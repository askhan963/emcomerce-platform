import React from 'react';
import { useForm } from 'react-hook-form';

const CheckoutForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md mx-auto w-full md:w-1/2 md:mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-center">Shipping Information</h3>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
        <input
          {...register('name')}
          id="name"
          type="text"
          placeholder="Name"
          required
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="address">Address</label>
        <input
          {...register('address')}
          id="address"
          type="text"
          placeholder="Address"
          required
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="city">City</label>
        <input
          {...register('city')}
          id="city"
          type="text"
          placeholder="City"
          required
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="state">State</label>
        <input
          {...register('state')}
          id="state"
          type="text"
          placeholder="State"
          required
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="zip">ZIP Code</label>
        <input
          {...register('zip')}
          id="zip"
          type="text"
          placeholder="ZIP Code"
          required
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Next
      </button>
    </form>
  );
};

export default CheckoutForm;
