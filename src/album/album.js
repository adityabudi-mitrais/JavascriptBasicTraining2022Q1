const endpoint = 'http://jsonplaceholder.typicode.com/albums'
const getAlbumByUserId = (userId) => {
    return fetch(`${endpoint}?userId=${userId}`, {
        method: 'GET'
    }).then(res => res.json())
}

export {
    getAlbumByUserId
}