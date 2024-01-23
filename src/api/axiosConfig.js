import axios from 'axios';

export const advertsInstance = axios.create({
  baseURL: 'https://65afe2602f26c3f2139bfbcf.mockapi.io/advertisement',
});
