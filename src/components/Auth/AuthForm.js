import React from 'react';
import { useForm } from 'react-hook-form';

const AuthForm = ({ onSubmit, isSignup }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isSignup && <input {...register('username')} placeholder="Username" required />}
      <input {...register('email')} placeholder="Email" required />
      <input {...register('password')} type="password" placeholder="Password" required />
      <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
    </form>
  );
};

export default AuthForm;
