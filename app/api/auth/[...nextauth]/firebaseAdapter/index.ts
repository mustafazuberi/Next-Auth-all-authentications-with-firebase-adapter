import { FirestoreAdapter } from "@auth/firebase-adapter";
import type { Adapter } from "next-auth/adapters";
import { initFirestore } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

const firestore = initFirestore({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
});

const firebaseAdapter = FirestoreAdapter(firestore) as Adapter;

export default firebaseAdapter;
