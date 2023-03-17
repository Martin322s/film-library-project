const baseUrl = "https://cinema-city-api.herokuapp.com/users";

export const registerUser = (userData) => {
    return fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json());
};

export const logoutUser = (accessToken) => {
    return fetch(`${baseUrl}/logout`, {
        method: "GET",
        headers: {
            "X-Authorization": accessToken
        }
    });
};

export const loginUser = (userData) => {
    return fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json());
};
