import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CheckoutForm from '../components/Checkout/CheckoutForm';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleShippingSubmit = (data) => {
    console.log('Shipping Data:', data);
    nextStep();
  };

  const handlePaymentSubmit = (data) => {
    console.log('Payment Data:', data);
    nextStep();
  };

  return (
    <div>
      <h2>Checkout</h2>
      {step === 1 && (
        <CheckoutForm onSubmit={handleShippingSubmit} />
      )}
      {step === 2 && (
        <div>
          <h3>Payment Details</h3>
          <form onSubmit={handlePaymentSubmit}>
            <input placeholder="Card Number" required />
            <input placeholder="Expiry Date" required />
            <input placeholder="CVV" required />
            <button type="submit">Next</button>
          </form>
        </div>
      )}
      {step === 3 && (
        <div>
          <h3>Order Confirmation</h3>
          <p>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
          <button onClick={prevStep}>Back</button>
          <button onClick={() => alert('Order placed successfully!')}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
