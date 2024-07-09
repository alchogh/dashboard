import axios from 'axios';
import qs from 'qs';

const API_URL = 'http://your-api-url.com'; // 실제 API URL로 변경

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, qs.stringify({ username, password }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Login failed', error.response?.data);
      throw new Error(error.response?.data || 'Login failed');
    } else {
      console.error('An unexpected error occurred', error);
      throw new Error('An unexpected error occurred');
    }
  }
};
