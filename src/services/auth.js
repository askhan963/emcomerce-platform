import API from './api';

export const login = async (credentials) => {
  try {
    const response = await API.post('/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error('Error during login:', error.response.data.message);
    throw error;
  }
};

export const signup = async (credentials) => {
  try {
    const response = await API.post('/auth/signup', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error('Error during signup:', error.response.data.message);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};
