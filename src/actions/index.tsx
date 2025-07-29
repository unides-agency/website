"use server";

import { adminDb } from "@/firebase/firebaseAdminConfig";
import { FirestoreDocument } from "@/firebase/firebaseAdminConfig";
import admin from "firebase-admin";

export async function getCollection<T>(collectionName: string): Promise<FirestoreDocument<T>[]> {
  const snapshot = await adminDb.collection(collectionName).get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as T),
  }));
}

export async function getDocument<T extends admin.firestore.DocumentData>(
  collectionName: string,
  documentId: string
): Promise<FirestoreDocument<T>> {
  const doc = await adminDb.collection(collectionName).doc(documentId).get();
  return {
    id: doc.id,
    ...(doc.data() as T),
  };
}

export async function addDocument<T extends admin.firestore.DocumentData>(
  collectionName: string,
  data: T
): Promise<FirestoreDocument<T>> {
  const docRef = await adminDb.collection(collectionName).add({
    ...data,
  });

  const doc = await docRef.get();

  return {
    id: docRef.id,
    ...(doc.data() as T),
  };
}
