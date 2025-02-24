import authConfig from 'src/configs/auth'
import { handleResponseError } from 'src/utils/errorHandler'

export const attachToken = config => {
    const token = localStorage.getItem(authConfig.storageTokenKeyName)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
}

export const responseErrorInterceptor = error => handleResponseError(error)
