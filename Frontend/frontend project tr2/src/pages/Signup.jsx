import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import axios from 'axios';
import {toast} from 'sonner';

import { useDispatch, useSelector } from 'react-redux';
import { Signup } from '../redux/userSlice.js';
import { CircularProgress } from '@mui/material';

// Corrected schema
const schema = z.object({
  name: z.string().min(1, "Name is required").max(40, "Name cannot exceed 40 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  password: z.string().min(8, "Password is too short").regex(/[0-9]/, "Password must contain a number").regex(/[a-z]/,"Password must have one Lowercase").regex(/[A-Z]/,"Password must contain Uppercase").regex(/[\W]/, "Password must contain a special symbol")

});
console.log(schema)

function AuthForm() {
  // Corrected "errors"

  const dispatch = useDispatch();
  console.log(useForm());
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });
  const [isLogin, setIsLogin] = useState(true);

  const onSubmit =  (data) => {
    console.log('submit is running')
    // console.log(data);
   dispatch(Signup(data))
  }


  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-500 ease-in-out">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          {isLogin ? 'Login' : 'Signup'}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name field for Signup */}
          {!isLogin && (
            <div className="transition duration-500">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                {...register('name')}
                id="name"
                className="w-full p-3 mt-1 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
          )}

          {/* Phone field for Signup */}
          {!isLogin && (
            <div className="transition duration-500">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Phone
              </label>
              <input
                {...register('phone')}
                id="phone"
                className="w-full p-3 mt-1 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              {...register('email')}
              id="email"
              type="email"
              className="w-full p-3 mt-1 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              {...register('password')}
              id="password"
              type="password"
              className="w-full p-3 mt-1 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={toggleForm}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            {isLogin ? 'Signup here' : 'Login here'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
