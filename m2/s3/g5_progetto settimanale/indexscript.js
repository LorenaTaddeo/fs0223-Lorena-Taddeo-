const PRODUCTS = 'https://striveschool-api.herokuapp.com/api/product/'

const hideColumn = function (context) {
  console.log('context', context)
  let rightColToDelete = context.closest('.cards')
  rightColToDelete.remove()
  fetch(PRODUCTS + context.id , {
    method: 'DELETE',
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDRiYzg4Zjc0MDAwMTQyODc0ODMiLCJpYXQiOjE2ODM5ODExMjYsImV4cCI6MTY4NTE5MDcyNn0.4iidlSoK_Fm230r8gIjAlYPbZLm0duEMAfs2rh2n6vU",
      "Content-Type": "application/json",
      }
  })
  .catch((err) => {
    console.log(err);
  })
}

const getProducts = function (){
    fetch(PRODUCTS, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDRiYzg4Zjc0MDAwMTQyODc0ODMiLCJpYXQiOjE2ODM5ODExMjYsImV4cCI6MTY4NTE5MDcyNn0.4iidlSoK_Fm230r8gIjAlYPbZLm0duEMAfs2rh2n6vU",
        "Content-Type": "application/json",
        }
    })
    .then((res) => {
        console.log('RES', res)
        if(res.ok){
            return res.json()
        } else {
            throw new Error ('Errore nel recupero dei prodotti')
        }
    })
    .then((data) => {
        console.log('PRODOTTI IN DB', data)
        data.forEach((product) => {
            let colTemplate = `
            <div class="col-12 col-md-3 me-4 cards p-0 shadow bg-white rounded" style="height: 100px">
              <div class="card">
              <img src="${product.imageUrl}" class="card-img-top w-100">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.price}€</p>                  
                  <p class="card-text">${product.description}</p>
                  <p>${product.brand}</p>
                  <a href="./details.html?productId=${product._id}" class="d-block mb-1">Scopri di più</a>
                  <a href="./backoffice.html?productId=${
                    product._id
                  }" class="btn btn-outline-primary mb-2">MODIFICA</a>
                  <button type="button" class="btn btn-outline-danger mb-2" onclick="hideColumn(this)" id="${product._id}">
                  ELIMINA</button>
                </div>
              </div>
            </div>
            `;

            let rowReference = document.getElementById("products-container");
            rowReference.innerHTML += colTemplate;
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

window.onload = () => {
  getProducts();
};
