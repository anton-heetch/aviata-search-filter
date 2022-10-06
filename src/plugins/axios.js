import axios from 'axios'

const baseUrl = 'http://localhost:9000'

export default axios.create({
  baseUrl,
})
