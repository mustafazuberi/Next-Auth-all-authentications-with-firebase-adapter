import { BsGithub } from "react-icons/bs";
import { signIn } from "next-auth/react";

const SignInGithub = () => {
  return (
    <div
      className="flex gap-x-3 h-auto w-64 cursor-pointer items-center justify-center rounded-md border border-gray-300 px-4 py-2"
      onClick={() => signIn("github")}
    >
      <BsGithub />
      <span>Sign in with Github</span>
    </div>
  );
};

export default SignInGithub;
