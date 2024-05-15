import React from 'react';
import { useForm } from 'react-hook-form';

const CheckoutForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Shipping Information</h3>
      <input {...register('name')} placeholder="Name" required />
      <input {...register('address')} placeholder="Address" required />
      <input {...register('city')} placeholder="City" required />
      <input {...register('state')} placeholder="State" required />
      <input {...register('zip')} placeholder="ZIP Code" required />
      <button type="submit">Next</button>
    </form>
  );
};

export default CheckoutForm;
