import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root using createRoot
const root = createRoot(container);

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
