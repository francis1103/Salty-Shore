import { API_BASE_URL, ENDPOINTS } from '../config/apiConfig';

// Helper function to handle fetch responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }
  return response.json();
};

export const itemsService = {
  // Get all items
  getAllItems: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.ITEMS}`);
      return handleResponse(response);
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  },

  // Get a specific item by name
  getItemByName: async (name) => {
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.ITEM_BY_NAME(name)}`);
      return handleResponse(response);
    } catch (error) {
      console.error(`Error fetching item ${name}:`, error);
      throw error;
    }
  },
};