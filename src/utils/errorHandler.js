import { STORAGE_KEYS } from '@/modules/home/constant';
import { toast } from 'react-toastify';

export const handleResponseError = async (error) => {
    console.log({ error })
    if (!error.message) {

        console.error('Network error:', error);
        toast.error('Network error. Please check your connection.');
        return Promise.reject(error);
    }

    const { status, data } = error.response;


    if (status === 400) {

        if (Array.isArray(data.errors)) {
            data.errors.forEach((err) => {
                toast.error(err.message || err);
            });
        } else if (data?.message) {
            toast.error(data.message);
        } else {
            toast.error('Bad request. Please check your input.');
        }
    } else if (status === 429) {
        toast.error(data.error || 'Too many requests. Please try again later.');
    } else if (data?.code) {
        switch (data.code) {
            case 'INVALID_CREDENTIALS':
                toast.error('Invalid email or password.');
                break;
            case 'USER_NOT_FOUND':
                toast.error('User does not exist.');
                break;
            case 'ACCOUNT_LOCKED':
                toast.error('Your account is locked. Please contact support.');
                break;
            default:
                toast.error(data.message || 'An error occurred.');
        }
    } else {
        switch (status) {
            case 401:
                // Handle 401 Unauthorized (Token expired or invalid)
                toast.error('Unauthorized. Redirecting to login...');
                localStorage.removeItem(STORAGE_KEYS.LOCAL_STORAGE);
                setTimeout(() => {
                    window.location.href = '/';
                }, 2000);
                break;
            case 403:

                toast.error(data.message || 'Forbidden');
                break;
            case 404:
                toast.error(data.message || 'Resource not found');
                break;
            case 500:
                toast.error(data.message || 'Internal Server Error');
                break;
            default:
                toast.error(data.message || 'An unexpected error occurred.');
        }
    }

    return Promise.reject(error.response.data);
};
