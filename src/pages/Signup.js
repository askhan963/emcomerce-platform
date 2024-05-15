import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/slices/authSlice';
import AuthForm from '../components/Auth/AuthForm';

const Signup = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);

  const onSubmit = (data) => {
    dispatch(signup(data));
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <AuthForm onSubmit={onSubmit} isSignup={true} />
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
    </div>
  );
};

export default Signup;
