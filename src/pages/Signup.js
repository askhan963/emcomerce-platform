import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../services/auth';
import { signup as signupAction } from '../redux/slices/authSlice';
import { toast } from 'react-toastify';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, // Access form errors for validation
  } = useForm();
  
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
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
              <input
                {...register('username', { required: 'Username is required' })}
                id="username"
                type="text"
                placeholder="Username"
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.username && (
                <span className="text-red-500 text-sm">{errors.username.message}</span>
              )}
            </div>
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address',
                  },
                })}
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>
            
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Password must be at least 6 characters' },
                })}
                id="password"
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </form>
          
          {/* Already have an account */}
          <div className='text-center mt-4'>
            Already have the Account? <Link to="/login" className="text-blue-500 hover:text-blue-700">SignIn</Link>
          </div>

          {/* Status Messages */}
          {status === 'loading' && <div className="text-center mt-4">Loading...</div>}
          {status === 'failed' && <div className="text-center mt-4 text-red-500">{error}</div>}
        </div>
      </main>
    </div>
  );
};

export default Signup;
