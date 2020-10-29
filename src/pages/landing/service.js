import { rest } from 'utils'


const service = {
  send: async (data) => {
    const response = await rest.post('/landing/form', data)
    return response.data
  },
}


export default service
