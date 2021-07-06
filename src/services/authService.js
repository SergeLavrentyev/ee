import { request } from './genericService'

const register = (user_data) => request({ url: 'register', method: 'post', data: user_data })
const login = (user_data) => request({ url: 'login', method: 'post', data: user_data })

export {
    register,
    login
}
