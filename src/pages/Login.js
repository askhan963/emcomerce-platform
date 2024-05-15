import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import AuthForm from '../components/Auth/AuthForm';

const Login = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div>
      <h2>Login</h2>
      <AuthForm onSubmit={onSubmit} isSignup={false} />
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
    </div>
  );
};

export default Login;
