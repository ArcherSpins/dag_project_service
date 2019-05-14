
import axios from 'axios';
const KEY = 'AIzaSyBey1oNWrruwGyZUrDIyaBfTCrqFTbOp8U';
const url = 'https://www.googleapis.com/youtube/v3';



export default axios.create({
    baseURL: url,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})