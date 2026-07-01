import { GoogleGenAI } from "@google/genai";
import * as fs from "fs";

async function run() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  console.log("Checking signature of ai.files.upload");
  console.log(ai.files.upload.toString());
}
run().catch(console.error);
