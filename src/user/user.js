const User = class User {
  id;
  name;
  username;
  email;
  address;
  phone;
  website;
  company;

  constructor() {

  }

  loadUser(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(result => {
        return result.json();
      })
      .then(result => {
        this.id = result.id;
        this.name = result.name;
        this.username = result.username;
        this.email = result.email;
        this.address = result.address;
        this.phone = result.phone;
        this.website = result.website;
        this.company = result.company;

        return this;
      })
  }
}

module.exports.User = User;