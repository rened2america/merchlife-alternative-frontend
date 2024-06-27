import axios from 'axios';
import { env } from "@/env";

const BASE_URL = env.NEXT_PUBLIC_BACKEND_URL;

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
