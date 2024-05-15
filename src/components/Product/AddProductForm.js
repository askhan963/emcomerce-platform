import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/slices/productSlice';

const AddProductForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await dispatch(createProduct(data)).unwrap();
    } catch (err) {
      console.error('Failed to add product:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Product</h2>
      <input {...register('name')} placeholder="Name" required />
      <input {...register('description')} placeholder="Description" required />
      <input type="number" {...register('price')} placeholder="Price" required />
      <input {...register('image')} placeholder="Image URL" required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
