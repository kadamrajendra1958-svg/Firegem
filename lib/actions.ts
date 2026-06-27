"use server";

import { adminDb } from "@/lib/firebase-admin";
import { revalidatePath } from "next/cache";

export type Proposal = {
  id?: string;
  accountName: string;
  stakeholder: string;
  dealSize: number;
  sentiment: "High" | "Neutral" | "Critical";
  stage: "Discovery" | "Qualification" | "Proposal" | "Closed Won";
  probability: number;
  createdAt: Date | any;
};

export async function getProposals() {
  try {
    const snapshot = await adminDb.collection("proposals").orderBy("createdAt", "desc").get();
    return snapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate()?.toISOString() || new Date().toISOString(),
    })) as Proposal[];
  } catch (error) {
    console.error("Error fetching proposals:", error);
    return [];
  }
}

export async function createProposal(data: Omit<Proposal, "id" | "createdAt">) {
  try {
    await adminDb.collection("proposals").add({
      ...data,
      createdAt: new Date(),
    });
    revalidatePath("/dashboard");
    revalidatePath("/pipeline");
    return { success: true };
  } catch (error) {
    console.error("Error creating proposal:", error);
    return { success: false, error: "Failed to create proposal" };
  }
}
