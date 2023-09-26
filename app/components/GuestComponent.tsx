import SignInGithub from "./SignInGithub";
import SignInGoogle from "./SignInGoogle";

const GuestComponent = () => {
  return (
    <div className="min-h-screen flex justify-center items-center gap-y-4 flex-col">
      <h1 className="text-3xl">Sign In</h1>
      <SignInGoogle />
      <SignInGithub />
    </div>
  );
};

export default GuestComponent;
