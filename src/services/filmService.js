const baseUrl = "http://localhost:3030/publications";

export const createFilm = (filmData, accessToken) => {
    return fetch(`${baseUrl}/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(filmData)
    })
        .then(res => res.json());
};

export const getAll = () => fetch(`${baseUrl}/all`).then(res => res.json());
export const getMyPublications = (ownerId) => fetch(`${baseUrl}/profile/${ownerId}`).then(res => res.json());
export const getOne = (publicId) => fetch(`${baseUrl}/${publicId}`).then(res => res.json());

export const deletePublication = (publicId, accessToken) => {
    return fetch(`${baseUrl}/delete/${publicId}`, {
        method: "DELETE",
        headers: {
            'X-Authorization': accessToken
        }
    })
        .then(res => res.json());
};

export const editPublication = (publicId, accessToken, data) => {
    return fetch(`${baseUrl}/edit/${publicId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json());
};

export const saveFilm = (publicId, userId, token) => {
    return fetch(`${baseUrl}/save/${publicId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ userId })
    })
        .then(res => res.json());
};

export const getSavedFilms = (userId, token) => {
    return fetch(`${baseUrl}/save/${userId}`, {
        method: 'GET',
        headers: {
            'X-Authorization': token
        }
    })
        .then(res => res.json());
}