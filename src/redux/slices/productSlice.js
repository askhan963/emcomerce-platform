import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/api'; // Import the configured Axios instance

// Fetch products action
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await API.get('/products');
  return response.data;
});

// Create product action
export const createProduct = createAsyncThunk('products/createProduct', async (productData) => {
  const response = await API.post('/products', productData);
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
