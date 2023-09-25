import { useSession } from "next-auth/react";

const getCurrentUser = () => {
  const { data: session } = useSession();
  return session?.user;
};

export default getCurrentUser;
