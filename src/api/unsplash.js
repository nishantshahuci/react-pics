// import axios
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID ee9ec586465abec23382f90c74a5ee5b65229cace6881716f33c593728c93f08'
    }
});
