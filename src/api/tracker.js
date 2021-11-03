import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
    baseURL: 'http://b433-69-148-45-178.ngrok.io'
})

instance.interceptors.request.use(
     async (config) => {
        const token = await AsyncStorage.getItem('token')
        console.log('tracker token: ', token)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => {
        console.log('error: ', err)
        return Promise.reject(err)
    }
)

export default instance
