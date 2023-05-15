const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const EMAIL = "user-email";
const USERID_KEY = "user-local-id";
const REGISTERED = "user-registered";

export function setTokens({
    refreshToken,
    idToken,
    localId,
    expiresIn = 3600
}) {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(TOKEN_KEY, idToken);
    localStorage.setItem(USERID_KEY, localId);
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
    localStorage.setItem(USERID_KEY, localId);
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

export function getUserId() {
    return localStorage.getItem(USERID_KEY);
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
    getUserId,
    getUserIsRegistered
};

export default localStorageService;
