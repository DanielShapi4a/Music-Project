
const BASE_URL = 'https://api.spotify.com/v1';

const fetchSongs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/browse/new-releases`);
    if (!response.ok) {
      throw new Error('Failed to fetch songs');
    }
    const data = await response.json();
    return data.albums.items; // Assuming you want to fetch new releases
  } catch (error) {
    console.error('Error fetching songs:', error);
    return [];
  }
};

export { fetchSongs };
