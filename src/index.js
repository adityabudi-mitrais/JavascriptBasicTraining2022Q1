let { User } = require('./user/user');
const Todo = require('./todo/todo');

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
        <td>${result.address.suite} ${result.address.street}, ${result.address.city}</td>
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
    
function todos() {
    var id = document.getElementById('userId').value
    var todoBody = document.getElementById('todo-table-body')

    let todo = new Todo()
    todo.loadTodos(id)
        .then(result=> {
            var todoBodyContent = ``
            result.forEach(item => {
                todoBodyContent = todoBodyContent.concat(
                    `<tr>
                        <td scope="row">${item.id}</td>
                        <td>${item.title}</td>
                        <td>${item.completed}</td>
                    </tr>`
                )
            })
            return todoBodyContent
        })
        .then(result=> {
            todoBody.innerHTML = result
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
    getAlbumData,
    todos
}
