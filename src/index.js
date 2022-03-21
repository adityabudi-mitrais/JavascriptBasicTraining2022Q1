let { User } = require('./user/user');
let { Post } = require('./post/post')
let user = new User();
let post = new Post();

function userTable (result) { 
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

function createPostTable(result) {
    for (let i = 0; i < result.length; i++) {
        const element = array[i];
        
    }

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
    loadPost: () => {
        post.loadPost(1)
        .then(result => {
            // result.forEach(res => {
            //     console.log(res)
                
            // });
            console.log(result[0])
        })
    }
}