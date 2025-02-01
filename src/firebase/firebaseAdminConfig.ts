import admin from "firebase-admin";

export type FirestoreDocument<T> = T & { id: string };

// Initialize Firebase Admin only if it hasn't been initialized yet
if (!admin.apps.length) {
  const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPath),
  });
}

// Get Firestore instance
const adminDb = admin.firestore();

export { adminDb };
