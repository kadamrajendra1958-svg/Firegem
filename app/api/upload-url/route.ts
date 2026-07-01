import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { filename, mimeType, sizeBytes } = await req.json();
    
    if (!filename || !mimeType || !sizeBytes) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GEMINI_API_KEY not configured" }, { status: 500 });
    }

    const res = await fetch(`https://generativelanguage.googleapis.com/upload/v1beta/files?uploadType=resumable&key=${apiKey}`, {
      method: "POST",
      headers: {
        "X-Goog-Upload-Protocol": "resumable",
        "X-Goog-Upload-Command": "start",
        "X-Goog-Upload-Header-Content-Length": sizeBytes.toString(),
        "X-Goog-Upload-Header-Content-Type": mimeType,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ file: { display_name: filename } })
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: `Failed to start upload: ${res.status} ${text}` }, { status: res.status });
    }

    const uploadUrl = res.headers.get("x-goog-upload-url");
    if (!uploadUrl) {
      return NextResponse.json({ error: "No upload URL returned by Gemini" }, { status: 500 });
    }

    return NextResponse.json({ uploadUrl });
  } catch (error: any) {
    console.error("Upload URL generation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
