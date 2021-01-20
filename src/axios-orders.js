import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://redux-burger-e5b7a-default-rtdb.firebaseio.com/'
})

export default instance;