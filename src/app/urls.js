export const API_ENDPOINTS = {
    SESSION: {
        START: 'v1/session/initiate',
        INSTANT_AUDIO: 'v1/audio/upload',
        AUDIO_FILE: 'v1/session/logout',
        REGISTER: 'v1/session/register',
        VIDEO_RECORD: 'v1/session/me',
    },
    NOTIFICATIONS: {
        LIST: 'api/v1/notifications',
        UPDATE: 'api/v1/notifications/read/:id',
        MARK_ALL_READ: '/api/v1/notifications/read-all'
    },
    USERS: {
        LIST: 'api/v1/users',
        CREATE: '/api/v1/users',
        VIEW: 'api/v1/users/:id',
        UPDATE: 'api/v1/users',
        PASSWORD_RESET: 'api/v1/users/:id',
        DELETE: '/api/v1/users/:id'
    }
}
