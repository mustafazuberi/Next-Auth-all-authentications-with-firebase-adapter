import { getServerSession } from "next-auth/next";
import { authOptions } from "./authOptions";

export default async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}
