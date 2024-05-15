import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import ProductList from '../components/Product/ProductList';
import AddProductForm from '../components/Product/AddProductForm';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      dispatch(fetchProducts());
    }
  }, [dispatch, user]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>
        {!user ? (
          <div className="text-center">
            <p className="text-xl mb-4">Please log in to view products.</p>
            <Link to="/login" className="text-indigo-500 hover:text-indigo-700 font-bold">
              Go to Login
            </Link>
          </div>
        ) : (
          <>
            {products.length === 0 ? (
              <div className="flex justify-center">
                <AddProductForm />
              </div>
            ) : (
              <ProductList products={products} />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
