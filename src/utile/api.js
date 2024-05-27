import axios from 'axios';

const BASE_URL = 'https://merchlife-ecommerce-backend.onrender.com';

const apiCall = async (method, endpoint, data = null, params = null) => {
  const url = `${BASE_URL}/${endpoint}`;

  try {
    const response = await axios({
      method: method,
      url: url,
      data: data,
      params: params
    });

    return response.data;
  } catch (error) {
    console.error(`Error ${method} ${url}:`, error);
    throw error;
  }
};

export default apiCall;
