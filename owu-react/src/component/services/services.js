export default class Services{

    url = 'https://jsonplaceholder.typicode.com/users';
    getUserById (id) {
       return  fetch(`${this.url}/${id}`)
            .then(value => value.json())
    }
}