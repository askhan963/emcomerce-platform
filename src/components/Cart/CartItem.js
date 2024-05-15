import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../redux/slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
      <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
      <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
    </div>
  );
};

export default CartItem;
