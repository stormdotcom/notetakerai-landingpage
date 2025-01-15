import apiClient from "./axios";

// Generic GET request
export const getRequest = async (url, params = {}) => {
  try {
    const response = await apiClient.get(url, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error fetching data";
  }
};

// Generic POST request
export const postRequest = async (url, data) => {
  try {
    const response = await apiClient.post(url, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error posting data";
  }
};

// Generic PUT request
export const putRequest = async (url, data) => {
  try {
    const response = await apiClient.put(url, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error updating data";
  }
};

// Generic DELETE request
export const deleteRequest = async (url) => {
  try {
    const response = await apiClient.delete(url);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error deleting data";
  }
};
