import { FcGoogle } from "react-icons/fc";
import { signIn, signOut } from "next-auth/react";

const SignInGoogle = () => {
  return (
    <div
      className="flex gap-x-3 h-auto w-64 cursor-pointer items-center justify-center rounded-md border border-gray-300 px-4 py-2"
      onClick={() => signIn("google")}
    >
      <FcGoogle />
      <span>Sign in with Google</span>
    </div>
  );
};

export default SignInGoogle;
