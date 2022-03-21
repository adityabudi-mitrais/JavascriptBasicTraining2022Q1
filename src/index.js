let { User } = require('./user/user');
let user = new User();

const { getAlbumByUserId } = require("./album/album");
const { getUserPosts } = require('./post/post');

function userTable(result) {
    return `<tr>
        <td>Id</td>
        <td>${result.id}</td>
    </tr>

    <tr>
        <td>Name</td>
        <td>${result.name}</td>
    </tr>
    <tr>
        <td>Username</td>
        <td>${result.username}</td>
    </tr>
    <tr>
        <td>Email</td>
        <td>${result.email}</td>
    </tr>
    <tr>
        <td>Address</td>
        <td>${result.address.name}</td>
    </tr>
    <tr>
        <td>Phone</td>
        <td>${result.phone}</td>
    </tr>
    <tr>
        <td>Website</td>
        <td>${result.website}</td>
    </tr>
    <tr>
        <td>Company</td>
        <td>${result.company.name}</td>
    </tr>`;
}

const loadUserPost = () =>  {
    const postTable = document.getElementById('post-table').getElementsByTagName('tbody')[0]
        const newTable = document.createElement('tbody')
        const userId = document.getElementById('userId').value
        getUserPosts(userId).then(data => {
            for (let i in data) {
                const row = newTable.insertRow(i)
                const id = row.insertCell(0)
                const title = row.insertCell(1)
                const body = row.insertCell(2)
                id.innerHTML = data[i].id
                title.innerHTML = data[i].title
                body.innerHTML = data[i].body
            }
            postTable.replaceWith(newTable)
        })
}
const getAlbumData = () => {
    const albumTable = document.getElementById('album-table').getElementsByTagName('tbody')[0]
    const newTable = document.createElement('tbody')
    const userId = document.getElementById('userId').value
    albumTable.innerHTML = 'Loading...'
    getAlbumByUserId(userId).then(data => {
        for (let i in data) {
            const row = newTable.insertRow(i)
            const id = row.insertCell(0)
            const title = row.insertCell(1)
            id.innerHTML = data[i].id
            title.innerHTML = data[i].title
        }
        albumTable.replaceWith(newTable)
    })
}

module.exports = {
    loadUser: (inputId, tableId, elementClass) => {
        let input = document.getElementById(inputId);
        let element = document.getElementsByClassName(elementClass);
        let table = document.getElementById(tableId);

        user.loadUser(input.value)
            .then(result => {
                table.innerHTML = userTable(result);
                element[0].style.visibility = 'visible';
            })
            .catch(err => {
                console.log(err);
            })
    },
    loadUserPost,
    getAlbumData
}