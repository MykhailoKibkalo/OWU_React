export class Service{
    url = 'https://swapi.dev/api/people/';

    async getALLPeople(){
        return await fetch(this.url)
            .then(people => people.json())
    }

    async getPeopleById (id) {
        return await fetch(this.url + id)
            .then(value => value.json())
    }

    async doFetch (url) {
        return await fetch(url)
            .then(value => value.json())
    }
}