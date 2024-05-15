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
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Checkout</h2>
        {step === 1 && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
            <CheckoutForm onSubmit={handleShippingSubmit} />
          </div>
        )}
        {step === 2 && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Payment Details</h3>
            <form onSubmit={handlePaymentSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="cardNumber">Card Number</label>
                <input
                  id="cardNumber"
                  type="text"
                  placeholder="Card Number"
                  required
                  className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="expiryDate">Expiry Date</label>
                <input
                  id="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                  required
                  className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  type="text"
                  placeholder="CVV"
                  required
                  className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step === 3 && (
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Order Confirmation</h3>
            <p className="text-gray-700 mb-4">Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Back
              </button>
              <button
                onClick={() => alert('Order placed successfully!')}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
