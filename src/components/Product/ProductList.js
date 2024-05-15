import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slices/productSlice';
import ProductCard from './ProductCard';
import Container from '../common/Container';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  return (
    <Container>
      {status === 'loading' && (
        <div className="flex justify-center items-center py-8">
          <div className="text-xl font-semibold">Loading...</div>
        </div>
      )}
      {status === 'failed' && (
        <div className="flex justify-center items-center py-8">
          <div className="text-xl font-semibold text-red-500">{error}</div>
        </div>
      )}
      {status === 'succeeded' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default ProductList;
