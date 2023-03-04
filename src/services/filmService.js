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