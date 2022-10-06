import axios from 'plugins/axios.js'

export default {
  get() {
    return axios.get('/flights')
  },
}
