
import apiClient from './axios';
import { API_ENDPOINTS } from './urls';

export const createAudioSession = async data => {
    return apiClient.post(API_ENDPOINTS.SESSION.START, data)
}

export const sendInstantAudio = async (formData) => {
    try {
        const response = await apiClient.post(
            API_ENDPOINTS.SESSION.INSTANT_AUDIO,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return response; // Return response for further processing if needed
    } catch (error) {
        console.error("Error sending audio chunk:", error);
        throw error;
    }
};

export const getContentById = async sessionId => {
    return apiClient.get(API_ENDPOINTS.SESSION.CONTENT.replace(":sessionId", sessionId))
}

export const saveContentById = async ({ sessionId, content }) => {
    return apiClient.patch(API_ENDPOINTS.SESSION.CONTENT.replace(":sessionId", sessionId), { content })
}

export const fetchSessionCard = async (sessionId) => {
    return apiClient.get(API_ENDPOINTS.SESSION.USAGE_CARD.replace(":sessionId", sessionId))
}

export const fetchSessionList = async (sessionId) => {
    return apiClient.get(API_ENDPOINTS.SESSION.USAGE_LIST.replace(":sessionId", sessionId))
}