const Post = class Post {
    userId;
    id;
    title;
    body;

    constructor(){}

    loadPost(userId) {
        return fetch('https://jsonplaceholder.typicode.com/posts?' + new URLSearchParams({
            userId: 1,
        }))
        .then(result => {
            return result.json();
        })
        .then(result => {
            this.userId = result.userId;
            this.id = result.id;
            this.title = result.title;
            this.body = result.body;
            return {id: this.id, title: this.title, body: this.body }
        })
        .catch(err => {
            throw err;
        })
    }
};

module.exports.Post = Post;