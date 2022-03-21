const Todo = class Todo {
    userId
    id
    title
    completed

    loadTodos(id) {
        return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .then(result => {
            return result.json()
        })
        .then(result => {
            var arrTodos = []
            result.forEach(obj => {
                let todo = new Todo()
                todo.userId = obj.userId
                todo.id = obj.id
                todo.title = obj.title
                todo.completed = obj.completed
                arrTodos.push(todo)
            })
            return arrTodos
        })
    }
}

module.exports = Todo