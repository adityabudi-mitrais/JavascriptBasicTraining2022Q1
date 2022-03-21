const { getAlbumByUserId } = require("./album/album");

const getAlbumData = () => {
    const albumTable = document.getElementById('album-table').getElementsByTagName('tbody')[0]
    const newTable = document.createElement('tbody')
    albumTable.innerHTML = 'Loading...'
    getAlbumByUserId(2).then(data => {
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
    run: ()=> {
        document.getElementById('btn-album').onclick = (e) => {
            e.preventDefault()
            getAlbumData()
        }
    }
}