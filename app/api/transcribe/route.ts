import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import * as path from "path";
import * as os from "os";

export const maxDuration = 300; // Allow up to 5 minutes for video transcription

export async function POST(req: NextRequest) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    // Parse FormData
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const filename = formData.get("filename") as string || "recording";
    let fileType = formData.get("fileType") as string || "video/mp4";
    if (fileType === "audio") fileType = "audio/mp3";
    if (fileType === "video") fileType = "video/mp4";

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Write file to a temporary location
    const buffer = Buffer.from(await file.arrayBuffer());
    const tempFilePath = path.join(os.tmpdir(), `${Date.now()}-${filename.replace(/[^a-zA-Z0-9.-]/g, '_')}`);
    await writeFile(tempFilePath, buffer);

    // Upload to Gemini
    let uploadResp = await ai.files.upload({
      file: tempFilePath,
      config: { mimeType: fileType }
    });

    // Clean up temporary file
    try {
      await unlink(tempFilePath);
    } catch (e) {
      console.error("Failed to delete temp file:", e);
    }

    // Wait for processing if it's a video
    while (uploadResp.state === 'PROCESSING') {
      await new Promise(resolve => setTimeout(resolve, 3000));
      uploadResp = await ai.files.get({ name: uploadResp.name! });
    }

    if (uploadResp.state === 'FAILED') {
      throw new Error("File processing failed on Gemini.");
    }

    // Generate content using the uploaded file
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        {
          fileData: {
            mimeType: uploadResp.mimeType || fileType,
            fileUri: uploadResp.uri
          }
        },
        `Analyze this media file. 
1. Provide a literal, accurate transcript of what is spoken.
2. Provide a detailed analysis including executive overview, budget, action items, technical needs, pains, objections, and delivery timeline based ONLY on the file contents.

Output strictly as a JSON object with "transcript" and "analysis" keys.`
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            transcript: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.INTEGER },
                  time: { type: Type.STRING },
                  speaker: { type: Type.STRING },
                  type: { type: Type.STRING },
                  text: { type: Type.STRING }
                }
              }
            },
            analysis: {
              type: Type.OBJECT,
              properties: {
                executiveOverview: { type: Type.STRING },
                sentiment: { type: Type.STRING },
                priority: { type: Type.STRING },
                budget: { type: Type.STRING },
                budgetConfidence: { type: Type.STRING },
                approvalStatus: { type: Type.STRING },
                fiscalWindow: { type: Type.STRING },
                technicalNeeds: { type: Type.ARRAY, items: { type: Type.STRING } },
                identifiedPains: { type: Type.ARRAY, items: { type: Type.STRING } },
                deliveryTimeline: { 
                  type: Type.ARRAY, 
                  items: { 
                    type: Type.OBJECT,
                    properties: {
                      date: { type: Type.STRING },
                      desc: { type: Type.STRING }
                    }
                  } 
                },
                crucialObjections: { 
                  type: Type.ARRAY, 
                  items: { 
                    type: Type.OBJECT,
                    properties: {
                      title: { type: Type.STRING },
                      desc: { type: Type.STRING }
                    }
                  } 
                },
                actionItems: { 
                  type: Type.ARRAY, 
                  items: { 
                    type: Type.OBJECT,
                    properties: {
                      task: { type: Type.STRING },
                      owner: { type: Type.STRING },
                      due: { type: Type.STRING }
                    }
                  } 
                }
              }
            }
          }
        }
      }
    });

    const jsonText = (response.text || "{}").replace(/```json\n?|\n?```/g, "").trim();
    const data = JSON.parse(jsonText);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Transcribe API error:", error);
    return NextResponse.json({ error: "Failed to generate transcript" }, { status: 500 });
  }
}

