const axios = require('axios')
const instance = axios.create({
  baseURL: 'https://test-upload-vue.herokuapp.com/'
})

export default instance
