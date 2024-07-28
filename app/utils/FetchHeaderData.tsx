import axios from 'axios';

export const FetchHeaderData = async () => {
  try {
    const response = await axios(`/api/globals/header`);
    return response.data;
  } catch (error) {
    console.error('Error fetching header data:', error);
    return null;
  }
};
