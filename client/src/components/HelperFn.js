import axios from 'axios';

export const fetchData = async (searchInput) => {
  try {
    const data = await axios.get(
      `http://localhost:8080/api/v1/search/${searchInput}`,
    );
    return data.data.items;
  } catch (error) {
    console.error(error); // eslint-disable-line 
  }
};
export const fetchPopularData = async () => {
  try {
    const data = await axios.get('http://localhost:8080/api/v1/popular/');
    return data.data.items;
  } catch (error) {
    console.error(error);// eslint-disable-line 
  }
};
export const fetchContributors = async (repo) => {
  try {
    const data = await axios.post(
      'http://localhost:8080/api/v1/contributors/',
      { repo },
    );
    return data.data;
  } catch (error) {
    console.error(error);// eslint-disable-line 
  }
};

export const fetchCardData = async (url) => {
  try {
    const data = await axios.post(
      'http://localhost:8080/api/v1/search/user/',
      { url },
    );
    return data.data;
  } catch (error) {
    console.error(error); // eslint-disable-line 
  }
};
