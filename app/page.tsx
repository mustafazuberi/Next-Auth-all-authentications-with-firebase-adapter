"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn, signOut } from "next-auth/react";
import getCurrentUser from "../getCurrentUser";

export default function Home() {
  const user = getCurrentUser();

  if (!user) {
    return (
      <div
        className="flex gap-x-3 h-auto w-64 cursor-pointer items-center justify-center rounded-md border border-gray-300 px-4 py-2"
        onClick={() => signIn()}
      >
        <FcGoogle />
        <span>Sign in with Google</span>
      </div>
    );
  }

  return (
    <main>
      <div className="flex h-screen w-screen items-center justify-center">
        <div
          className="flex gap-x-3 h-auto w-64 cursor-pointer items-center justify-center rounded-md border border-gray-300 px-4 py-2"
          onClick={() => signOut()}
        >
          <span>Log out</span>
        </div>
        <p className="text-white">Signed in as {user?.name}</p>
      </div>
    </main>
  );
}
