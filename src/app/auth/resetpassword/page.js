'use client';
import Link from 'next/link';
import React from 'react';

const ResetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submitting email and OTP
    const email = e.target.email.value;
    const otp = e.target.otp.value;
    console.log('Email:', email);
    console.log('OTP:', otp);
    // Add your logic for handling the submitted email and OTP
  };

  return (
          <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                OTP
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="otp"
                type="text"
                name="otp" // Added name attribute for form submission
                placeholder="OTP"
              />
            </div>
            <div className="flex items-center justify-between">
                <Link href={'/auth'} className='w-full'>
                <button type="submit" class="w-full text-[#FFFFFF] bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">Verify</button>
                </Link>
            </div>
          </form>
  );
};

export default ResetPassword;
