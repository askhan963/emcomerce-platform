import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/auth';
import { signup as signupAction } from '../redux/slices/authSlice';
import { toast } from 'react-toastify';

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);

  const onSubmit = async (data) => {
    try {
      const userData = await signup(data);
      dispatch(signupAction(userData));
      toast.success('Signup successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate('/login'); // Navigate to login page upon successful signup
    } catch (err) {
      toast.error('Signup failed: ' + err.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
              <input
                {...register('username')}
                id="username"
                type="text"
                placeholder="Username"
                required
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                {...register('email')}
                id="email"
                type="email"
                placeholder="Email"
                required
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input
                {...register('password')}
                id="password"
                type="password"
                placeholder="Password"
                required
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </form>
          {status === 'loading' && <div className="text-center mt-4">Loading...</div>}
          {status === 'failed' && <div className="text-center mt-4 text-red-500">{error}</div>}
        </div>
      </main>
    </div>
  );
};

export default Signup;
