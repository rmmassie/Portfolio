
let starWarsPeopleList = document.querySelector('select')

let starwarsData = fetch('https://swapi.co/api/people')
    .then(function(response){return response.json()})
    .then(function(json){})
        let people = json.results; 
        for (const person of people) {
            let listItem = document.createElement('option'); 
            listItem.innerHTML = '<p>' + person.name + '</p>'
            starWarsPeopleList.appendChild(listItem)
        }
    })


