"use client";
import getCurrentUser from "../getCurrentUser";
import { signOut } from "next-auth/react";
import GuestComponent from "./components/GuestComponent";
import UserCard from "./components/UserCard";

export default function Home() {
  const user = getCurrentUser();

  if (!user) {
    return <GuestComponent />;
  }

  return (
    <main>
      <div className="min-h-screen flex justify-center items-center gap-y-4 flex-col">
        <div
          className="flex gap-x-3 h-auto w-64 cursor-pointer items-center justify-center rounded-md border border-gray-300 px-4 py-2"
          onClick={() => signOut()}
        >
          <span>Log out</span>
        </div>
        <p className="text-green-500 text-2xl font-bold">
          Signed in as {user?.name}
        </p>
        <UserCard user={user} />
      </div>
    </main>
  );
}
