import { GoogleGenAI } from "@google/genai";

async function run() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  console.log("Checking signature of ai.files.get");
  console.log(ai.files.get.toString());
}
run().catch(console.error);
