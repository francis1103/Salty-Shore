// Backend API configuration
export const API_BASE_URL = 'http://localhost:5000/api';

export const ENDPOINTS = {
  ITEMS: '/items',
  ITEM_BY_NAME: (name) => `/items/${name}`,
};