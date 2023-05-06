import axios from 'axios';
export { fetchImages };



export default class GalleryApi {
  constructor() {
    this.API_KEY = '?key=25716133-5af1cc1f28b9664f0c877d305';
    this.BASE_URL = 'https://pixabay.com/api/';
    this.image_type = "image_type=photo";
    this.orientation = "orientation=horizontal"
    this.safesearch = "safesearch=true";
    this.per_page = 40;
    this.page = 1;
    this.searchQuery = '';
  }


  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}


axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '36068919-a9b8173293b4586ac32aefec5';

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
  );
  return response;
}