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







// async function asyncFetch(value) {
//     const res = await fetch (`https://swapi.co/api/${value}/`)
//     const data = await res.json();
//     displayResults(data, value)
// }

// function displayResults (data, value) {
//     let output = "";
//     if(value === "films") {
//         data.results.forEach(item => {
//             output += `
//                 <div class="card p-3 m-3" style="opacity:.8">
//                     <h4 class"card-title text-center">${item.title}</h4>
//                 </div>
//             `

//         });

//     }
//     results.innerHTML = output;
// }



// document.querySelector('#buttons').addEventListener('click', e => {
//     asyncFetch(e.target.textContent.trim().toLowerCase());
// }) 