import axios from 'axios'


const webAPI = () => {
  const server = axios.create()
  server.interceptors.response.use(
    response => ({ ...response, err: false }),
    error => ({ ...error.response, err: true }),
  )

  return {
    restaurantsInBangsue: async () => {
      const res = await server.get('/api/restaurants-in-bangsue')
      return res
    },
  }
}

export default webAPI()
