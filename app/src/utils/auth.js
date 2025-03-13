export const generateFakeJWT = (email) => {
    const payload = {
        email,
        exp: Math.floor(Date.now() / 1000) + 3600, // Token expires in 1 hour
    };
    return btoa(JSON.stringify(payload)); // Encoding payload as base64 (fake JWT)
};

export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
        const decoded = JSON.parse(atob(token)); // Decode base64
        return decoded.exp > Math.floor(Date.now() / 1000); // Check if token is expired
    } catch (error) {
        return false;
    }
};

export const logout = () => {
    localStorage.removeItem("token");
};
