import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/slices/authSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
      navigate('/');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} placeholder="Email" required />
        <input {...register('password')} type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      <Footer />
    </div>
  );
};

export default Login;
