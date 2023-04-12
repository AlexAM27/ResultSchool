const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const EMAIL = "user-email";
const LOCAL_ID = "jwt-local-token";
const REGISTERED = "user-registered";

export function setTokens({ refreshToken, idToken, expiresIn = 3600 }) {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(TOKEN_KEY, idToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, expiresDate);
}

export function setLoginData({
    refreshToken,
    idToken,
    expiresIn = 3600,
    email,
    localId,
    registered
}) {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(TOKEN_KEY, idToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, expiresDate);
    localStorage.setItem(EMAIL, email);
    localStorage.setItem(LOCAL_ID, localId);
    localStorage.setItem(REGISTERED, registered);
}

export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY);
}

export function getTokenExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY);
}

export function getUserEmail() {
    return localStorage.getItem(EMAIL);
}

export function getLocalToken() {
    return localStorage.getItem(LOCAL_ID);
}

export function getUserIsRegistered() {
    return localStorage.getItem(REGISTERED);
}

const localStorageService = {
    setTokens,
    setLoginData,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    getUserEmail,
    getLocalToken,
    getUserIsRegistered
};

export default localStorageService;
