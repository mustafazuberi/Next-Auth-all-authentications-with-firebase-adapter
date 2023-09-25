import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import type { Adapter } from "next-auth/adapters";
import { db } from "@/configs/config.firebase";
import * as firestoreFunctions from "firebase/firestore";

const firestoreAdapterConfig = {
  db: db as any,
  ...firestoreFunctions,
};

export const authOptions = {
  adapter: FirestoreAdapter(firestoreAdapterConfig as any) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  debug: true,
};
