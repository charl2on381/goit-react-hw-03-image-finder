import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://api.unsplash.com',

  headers: {
    common: {
      Authorization: 'Client-ID VYJRVzHXAR22ZLYZj0Y9DlndAsgDh3IWxs9zZaxgaaM',
  
    },
  },
});

export const getPhotos = async (query, page) => {
  const params = {
    query,
    page,
    per_page: 12,
    color: 'black_and_white',
    orientation: 'portrait',
  };
  const { data } = await instance.get('/search/photos', { params });
  return data;
};
