// Get base URL from environment variables
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';

// Generic function to make API requests
const apiRequest = async (endpoint: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json', // Set content type to JSON
      },
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    // Parse the JSON response
    const jsonResponse = await response.json();

    // Return the `data` part of the response
    return jsonResponse.data;
  } catch (error) {
    console.error(error); // Log any errors
    return null; // Return null to indicate an error
  }
};

// Fetch all blog posts from the backend
export const fetchPosts = async () => {
  return await apiRequest('/posts');
};

// Fetch a single blog post by its ID
export const fetchPostById = async (id: string) => {
  return await apiRequest(`/post/${id}`);
};
