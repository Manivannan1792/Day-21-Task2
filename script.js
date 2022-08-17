async function foo() {

    try {


        let s1 = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand");
        let res = await s1.json();
        console.log(res);

        let div = document.getElementById('div')

        div.innerHTML = `<div class="card mb-3 mx-auto my-3">
          <div class="row no-gutters">
              <div class="col-md-4">
                  <img src="${res.image_link}" class="img rounded img-thumbnail " alt="img">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                      <h5 class="card-title text-center">${res.name}</h5>
                      <p class="card-text"><span class="h5">Latin name: </span> <span class="pfont">${res.latin_name}</span> </p>
                      <p class="card-text"><span class="h5">Animal type: </span> <span class="pfont"> ${res.animal_type}</span></p>
                      <p class="card-text"><span class="h5">Diet: </span> <span class="pfont">${res.diet}</span></p>
                      <p class="card-text"><span class="h5">Active time: </span> <span class="pfont">${res.active_time}</span></p>
                      <p class="card-text"><span class="h5">Weight_max and Weight_min: </span> <span class="pfont">${res.weight_max} and ${res.weight_min}</span></p>
                      <p class="card-text"><span class="h5">Length_max and Length_min: </span> <span class="pfont">${res.length_max} and ${res.length_min}</span</p>
                      <p class="card-text"><span class="h5">Life span: </span> <span class="pfont">${res.lifespan}</span></p>
                      <p class="card-text"><span class="h5">Habitat: </span> <span class="pfont">${res.habitat}</span></p>
                      <p class="card-text"><span class="h5">Geo range: </span> <span class="pfont">${res.geo_range}</span></p>
                      <button type="button" class="btn btn-outline-dark w-100" onclick="foo()">Next</button>
                  </div>
              </div>
          </div>
      </div>`





    } catch (error) {
        alert('something Error')
    }
}

foo()