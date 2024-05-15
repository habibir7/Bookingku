"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ForgotPassword = () => {
  const Router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    Router.push("/auth/resetpassword");
    // Handle submitting email
    const email = e.target.email.value;
    // console.log('Email submitted:', email);
    // Add your logic for handling the submitted email
  };

  return (
    <>
      <p className="text-4xl">Forgot Password</p>
      <form className=" rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email" // Added name attribute for form submission
            placeholder="Email"
          />
        </div>
        <div className="flex items-center">
          <button
            type="submit"
            class="w-full text-[#FFFFFF] bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
          >
            Send
          </button>
        </div>
        <p className="text-gray-200">
          You'll get your message soon on your email
        </p>
      </form>
    </>
  );
};

export default ForgotPassword;
