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
export const saveFilm = (publicId, userId, accessToken) => {
    return fetch(`${baseUrl}/save/${publicId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify({ userId })
    })
        .then(res => res.json());
}