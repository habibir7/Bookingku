'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Register(){

  const router = useRouter()
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

 
  async function handleRegister(event) {
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    const name = formData.get('name')
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setValidationErrors(passwordErrors);
      return;
    }
    
    const data = {
      email,
      password,
      name,
    };

    const formBody = Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
    
    try{
      const response = await fetch(`/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody,
      })
  
      const result = await response.json();
   
      if (response.ok) {
        router.push('/auth')
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'An error occurred. Please try again.');
      }

    }catch (err){
      setError('An error occurred. Please try again.');
    }
    
  }

    return(
      <div>
        <form className=" px-8 pt-6 pb-8 mb-4" onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className=" appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className=" appearance-none border-b rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="******************"
                required
              />
              <p className="text-gray-600 text-xs italic">Please choose a strong password.</p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="full-name">
                Full Name
              </label>
              <input
                className=" appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="flex flex-col items-center">
            <div className="w-full">
            <button type="submit" className="w-full text-[#FFFFFF] bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">Register</button>
          </div>
              <Link href={'/auth'}>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                >
                Sign In here
              </button>
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