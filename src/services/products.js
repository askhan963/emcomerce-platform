import API from './api';

export const getProducts = async () => {
  const response = await API.get('/products');
  return response.data;
};

export const createProduct = async (product) => {
  const response = await API.post('/products', product);
  return response.data;
};
