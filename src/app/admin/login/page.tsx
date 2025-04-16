'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES, API_ROUTES } from '@/constants/index';

export default function AdminLogin() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    loginId: '',
    password: '',
    otp: '',
  });

  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = async () => {
    if (formData.loginId && formData.password) {
      try {
        const res = await fetch(API_ROUTES.LOGIN, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            loginId: formData.loginId,
            password: formData.password,
          }),
        });

        const data = await res.json();

        if (data.success) {
          setToken(data.token); // Save token for OTP verification
          setStep(2); // Proceed to OTP
        } else {
          setError(data.message || 'Login failed');
        }
      } catch (err) {
        setError('Login request failed');
      }
    }
  };

  const handleLogin = async () => {
    try {
      const res = await fetch(API_ROUTES.VERIFY_OTP, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          otp: formData.otp,
          token: token,
        }),
      });

      const data = await res.json();

      if (data.success) {
        router.push(ROUTES.DASHBOARD);
      } else {
        setError(data.message || 'OTP verification failed');
      }
    } catch (err) {
      setError('OTP verification error');
    }
  };

  return (
    <div className="min-h-screen text-black bg-gradient-to-t from-pink-100 to-white flex items-center justify-center">
      <div className="flex border border-black w-full max-w-4xl  h-[40rem] rounded-xl overflow-hidden shadow-xl">

        {/* Left Image */}
        <div className="w-1/2 bg-cover bg-center hidden md:block" style={{ backgroundImage: "url('/images/bg/LoginBG.jpg')" }} />

        {/* Right Form */}
        <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold align-text-top mb-6 mt-9 ">Admin Login</h2>

          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          {step === 1 && (
            <>
              <input
                type="text"
                name="loginId"
                required = {true}
                placeholder="Enter username or email"
                className="border border-black p-3 mb-4 w-full rounded"
                value={formData.loginId}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                required = {true}
                placeholder="Enter password"
                className="border border-black p-3 mb-6 w-full rounded"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                onClick={handleContinue}
                className="bg-black text-white cursor-pointer py-2 px-6 rounded hover:bg-gray-800 transition"
              >
                Continue
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <input
                type="text"
                name="otp"
                required = {true}
                placeholder="Enter 6-digit OTP"
                maxLength={6}
                className="border border-black p-3 mb-6 w-full rounded"
                value={formData.otp}
                onChange={handleChange}
              />
              <button
                onClick={handleLogin}
                className="bg-black text-white cursor-pointer py-2 px-6 rounded hover:bg-gray-800 transition"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
