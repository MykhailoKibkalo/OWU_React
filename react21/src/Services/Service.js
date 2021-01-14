export class Service{

    url = 'https://jsonplaceholder.typicode.com/users';

    getAllUser () {
        return fetch(this.url)
            .then(value => value.json())
            .then(value => value)
    }
    // getUserById (id) {
    //     return fetch( `${this.url}/${id}`)
    //         .then(value => value.json())
    //         .then(value => value)
    // }
}

