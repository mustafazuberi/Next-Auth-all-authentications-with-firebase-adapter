"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn, signOut } from "next-auth/react";
export default function Home() {
  return (
    <main>
      <div className="flex h-screen w-screen items-center justify-center">
        <div
          className="flex gap-x-3 h-auto w-64 cursor-pointer items-center justify-center rounded-md border border-gray-300 px-4 py-2"
          onClick={() => signIn()}
        >
          <FcGoogle className="text-2xl" />
          <span>Sign in with Google</span>
        </div>
      </div>
    </main>
  );
}
