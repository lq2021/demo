import axios from 'axios'
//简单的封装axios
const service = axios.create({
    baseURL: 'http://127.0.0.1:4523/mock/1446226',
})
export default service