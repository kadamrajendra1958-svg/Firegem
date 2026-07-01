import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import * as path from "path";
import * as os from "os";

export const maxDuration = 300; // Allow up to 5 minutes for video transcription

export async function POST(req: NextRequest) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    // Parse JSON
    const body = await req.json();
    const { geminiFileName, filename, fileType: incomingFileType } = body;
    
    let fileType = incomingFileType || "video/mp4";
    if (fileType === "audio") fileType = "audio/mp3";
    if (fileType === "video") fileType = "video/mp4";

    if (!geminiFileName) {
      return NextResponse.json({ error: "No geminiFileName provided" }, { status: 400 });
    }

    // Wait for processing if it's a video
    let uploadResp;
    let attempts = 0;
    while (attempts < 20) {
      uploadResp = await ai.files.get({ name: geminiFileName });
      if (uploadResp.state !== 'PROCESSING') {
        break;
      }
      await new Promise(resolve => setTimeout(resolve, 3000));
      attempts++;
    }

    if (!uploadResp || uploadResp.state === 'FAILED') {
      throw new Error("File processing failed on Gemini.");
    }

    const contents = [
      {
        fileData: {
          mimeType: uploadResp.mimeType || fileType,
          fileUri: uploadResp.uri
        }
      },
      `Analyze this media file. IMPORTANT: The audio may be in any language (including Hindi). 
1. Provide a literal, accurate transcript of what is spoken. Translate non-English speech into English. If it's mixed language, translate all of it to English.
2. Provide a detailed analysis including executive overview, budget, action items, technical needs, pains, objections, and delivery timeline based ONLY on the file contents.
If any field is completely missing or unknown from the conversation, use "Not specified" or "Unknown" instead of leaving it empty.

Output strictly as a JSON object with "transcript" and "analysis" keys.`
    ];

    // Generate content
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
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

