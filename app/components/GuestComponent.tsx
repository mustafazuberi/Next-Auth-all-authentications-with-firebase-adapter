import SignInGithub from "./SignInGithub";
import SignInGoogle from "./SignInGoogle";
import SignupForm from "./SignupForm";

const GuestComponent = () => {
  return (
    <div className="min-h-screen flex justify-center items-center gap-y-4 flex-col">
      <h1 className="text-3xl">Sign Up</h1>
      {/* <SignupForm /> */}
      <SignInGoogle />
      <SignInGithub />
    </div>
  );
};

export default GuestComponent;
