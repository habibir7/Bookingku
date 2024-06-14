'use client';

import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import ErrorPopup from "@/components/ErrorPopUp";
import { useState } from "react";

export default function Auth() {
  const Router = useRouter()
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);

  const validatePassword = (password) => {
    const errors = [];
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[@#$%^&+=!]/.test(password);

    if (password.length < minLength) {
      errors.push(`Password must be at least ${minLength} characters long`);
    }
    if (!hasUpperCase) {
      errors.push('Password must contain at least one uppercase letter');
    }
    if (!hasLowerCase) {
      errors.push('Password must contain at least one lowercase letter');
    }
    if (!hasDigit) {
      errors.push('Password must contain at least one digit');
    }
    if (!hasSpecialChar) {
      errors.push('Password must contain at least one special character (@#$%^&+=!)');
    }

    return errors;
  };


  async function handleSubmit(event) {
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setValidationErrors(passwordErrors);
      return;
    }
    
    const data = {
      email,
      password,
    };

    const formBody = Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
    
    try{
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody,
      })
  
      const result = await response.json();
      if (response.ok) {
        // console.log(result.token)
        Cookies.set('access-token', result.data.access_token, { expires: 7 })
        Cookies.set('refresh-token', result.data.refresh_token, { expires: 7 })
        Router.push('/dashboard')
          // Cookies.useRouter   
        // cookies().set('token','test')
        // router.push('/')
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'An error occurred. Please try again.');
      }

    }catch (err){
      setError('An error occurred. Please try again.');
    }
    
  }

    return (
      <div>
      <ErrorPopup message={error} onClose={() => setError('')} />
      <p className="text-4xl">Login</p>
        <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
            Email
          </label>
          <input
            className=" appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="text"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border-b border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="******************"
            required
          />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full">
            <button type="submit" className="w-full text-[#FFFFFF] bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">Sign in</button>
          </div>
        </div>
        <div className="flex justify-between">
          <Link href="/auth/forgotpassword" legacyBehavior>
                <a className="text-blue-500 hover:text-blue-700">Forgot Password ?</a>
            </Link>
          <Link href="/auth/register" legacyBehavior>
                <a className="text-blue-500 hover:text-blue-700">Sign up here</a>
            </Link>
        </div>
      </form>
      {validationErrors.length > 0 && (
        <div className="validation-errors">
          <p>Password is invalid. Errors:</p>
          <ul>
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <style jsx>{`
        .validation-errors {
          color: red;
          margin-top: 10px;
        }
        .validation-errors ul {
          list-style-type: none;
          padding: 0;
        }
        .validation-errors li {
          margin: 5px 0;
        }
      `}</style>
      </div>
    )
}