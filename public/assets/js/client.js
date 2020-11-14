// Asynchronous fetch gallery
fetch(`${window.location.origin}/api/v0/gallery`)

// send JSON fetch
.then(function(response) {
  return response.json(); 
})

.then(function(cakes) {
  console.log(cakes);
  let output = '';

  cakes.forEach(function(cakes) {
    output += `<figure class="card">
                  <img src=${cakes.image_path} alt="${cakes.description}" width=>
                  <figcaption>
                    <p>${cakes.description}</h2>
                  </figcaption>
                </figure>`;
  });

 // output to DOM
 document.querySelector('.gallery').innerHTML = output;
})

// error 
.catch(function(error) {
  if (error) {
    console.log("I don't know what happened either!");
  }
});