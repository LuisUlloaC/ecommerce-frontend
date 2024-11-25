import axios from "axios";

const axiosInstance = axios.create({
    //${window.location.host}
    baseURL: `http://localhost:8000/api`,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    }
})

export default axiosInstance