const Post = class Post {
    userId;
    id;
    title;
    body;

    constructor() {

    }

    loadPost(id) {
        return fetch(`https://jsonplaceholder.typicode.com/user/${id}/posts`)
            .then(result => {
                return result.json();
            })
    }
};

module.exports.Post = Post;