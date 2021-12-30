import axios from 'axios'
import toast from 'react-hot-toast'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
})

api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const message = error.response?.data?.message || error.message

    toast.error(message)
    return Promise.reject(message)
  }
)
