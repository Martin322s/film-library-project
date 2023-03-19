const baseUrl = "http://localhost:3030/users";

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

export const getUsers = () => fetch(`${baseUrl}/users`).then(res => res.json()); 

export const deleteUser = (userId, token) => {
    return fetch(`${baseUrl}/delete/${userId}`, {
        method: 'DELETE',
        headers: {
            "X-Authorization": token
        }
    })
        .then(res => res.json());
};

export const updateUser = (userId, token, data) => {
    return fetch(`${baseUrl}/update/${userId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json());
};
