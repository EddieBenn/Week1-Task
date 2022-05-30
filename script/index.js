const results = document.querySelector('#results');
let baseUrl = "https://swapi.dev/api/people"
let users = document.querySelector('.users');

async function getPeople(url){

    const response = await fetch(url);

    const data = await response.json();

    console.log(data)
    let html = '';
    data.results.forEach(person =>{
        html += `<div class="flex-container">
        <div class="box">
          <label for="dropdown"></label>
          <select class="dropdown" name="chr-name" id="dropdown">
            <option value="name" class="name">Name: ${person.name}</option>
            <option value="gender" class="gender">Gender: ${person.gender}</option>
            <option value="height" class="height">Height: ${person.height}</option>
          </select>
        </div>
    </div>`

    })

    users.innerHTML = html

}

getPeople(baseUrl)