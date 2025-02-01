"use server";

import { adminDb } from "@/firebase/firebaseAdminConfig";
import { FirestoreDocument } from "@/firebase/firebaseAdminConfig";

export async function getCollection<T>(collectionName: string): Promise<FirestoreDocument<T>[]> {
  const snapshot = await adminDb.collection(collectionName).get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as T),
  }));
}
