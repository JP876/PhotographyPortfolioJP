const getCookie = name => {
    let cookies = document.cookie.split(';');
    let accessToken;
    cookies.forEach(cookie => {
        let cookiePair = cookie.split('=');

        if (cookiePair[0].trim() === name) {
            accessToken = decodeURIComponent(cookiePair[1]);
        }
    });
    return accessToken;
};

const getProfile = async (token, json = true) => {
    try {
        const profileRequest = await fetch('/api/users/profile', {
            headers: {
                'x-access-token': token,
            },
            method: 'GET',
        });
        if (json) {
            const profileRes = await profileRequest.json();
            return profileRes;
        }
        return profileRequest;
    } catch (error) {}
};

const isLoggedIn = async (token, json = true) => {
    try {
        const isLoggedIn = await fetch('/api/users/isauth', {
            headers: {
                'x-access-token': token,
            },
            method: 'GET',
        });
        if (json) {
            const profileRes = await isLoggedIn.json();
            return profileRes;
        }
        return isLoggedIn;
    } catch (error) {
        console.log(error);
    }
};

const handleLogin = async (email, password, json = true) => {
    if (email && password) {
        try {
            const request = await fetch('/api/users/login', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });
            if (json) {
                const profileRes = await request.json();
                return profileRes;
            }
            return request;
        } catch (error) {}
    }
    return null;
};

const handleSignUp = async (email, password) => {
    if (email && password) {
        try {
            const request = await fetch('/api/users/register', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });
            return request;
        } catch (error) {}
    }
    return null;
};

const updateProfile = async (data, token, json = true) => {
    try {
        const updateProfile = await fetch('/api/users/profile', {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
            },
            method: 'PATCH',
            body: JSON.stringify(data),
        });
        if (!json) return updateProfile;
        const profileRes = await updateProfile.json();

        if (profileRes._id) return profileRes;
    } catch (error) {}
};

const deleteProfile = async (id, token) => {
    try {
        await fetch('/api/users/profile', {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
            },
            method: 'DELETE',
            body: JSON.stringify({ _id: id }),
        });
    } catch (error) {}
};

const updateEmail = async (email, newemail, token) => {
    try {
        const emailUpdateRequest = await fetch('/api/users/update_email', {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': token,
            },
            method: 'PATCH',
            body: JSON.stringify({ email, newemail }),
        });
        return emailUpdateRequest;
    } catch (error) {}
};

export {
    getCookie,
    getProfile,
    isLoggedIn,
    handleLogin,
    handleSignUp,
    updateProfile,
    deleteProfile,
    updateEmail,
};
