import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import ProductList from '../components/Product/ProductList';
import AddProductForm from '../components/Product/AddProductForm';
import Footer from '../components/Footer';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
     
      <h1>Home</h1>
      {products.length === 0 && user ? (
        <AddProductForm />
      ) : (
        <ProductList products={products} />
      )}
      <Footer />
    </div>
  );
};

export default Home;
