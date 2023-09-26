"use client";
import Link from "next/link";
import useSignupForm from "../hooks/useSignupForm";

const SignupForm = () => {
  const { handleOnInputChange, handleSubmit, formData, error } =
    useSignupForm();
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder="Full Name"
            onChange={handleOnInputChange}
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleOnInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleOnInputChange}
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error.message}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
