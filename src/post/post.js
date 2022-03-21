const getUserPosts = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/user/${id}/posts`)
    .then(result => result.json())
}

export {
    getUserPosts
}