const PRODUCTS = 'https://striveschool-api.herokuapp.com/api/product/'


let addressBarContent = new URLSearchParams(window.location.search)

let productId = addressBarContent.get('productId')
console.log('PRODUCTID', productId)

if(productId){
    document.getElementsByTagName('h2')[0].innerText =
    'Backoffice page - Modifica prodotto'
    document.getElementById('save-button').innerText =
    'MODIFICA PRODOTTO'
    let deleteButton = document.getElementById('delete-button')
    deleteButton.classList.remove('d-none')
    deleteButton.addEventListener('click', () => {
        fetch(PRODUCTS + productId, {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDRiYzg4Zjc0MDAwMTQyODc0ODMiLCJpYXQiOjE2ODM5ODExMjYsImV4cCI6MTY4NTE5MDcyNn0.4iidlSoK_Fm230r8gIjAlYPbZLm0duEMAfs2rh2n6vU",
            },
        })
        .then((res) => {
            if(res.ok){
                alert('Eliminazione completata con successo')
                location.assign('./index.html')
            } else {
                throw new Error("Problema nell'eliminazione del prodotto")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    })

    fetch (PRODUCTS + productId, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDRiYzg4Zjc0MDAwMTQyODc0ODMiLCJpYXQiOjE2ODM5ODExMjYsImV4cCI6MTY4NTE5MDcyNn0.4iidlSoK_Fm230r8gIjAlYPbZLm0duEMAfs2rh2n6vU",
            }
    })
    .then((res) => {
        if(res.ok){
            return res.json()
        } else {
            throw new Error("Errore nel recupero del prodotto")
        }
        })
        .then((product) => {
            console.log('DATI DEL SINGOLO PRODOTTO', product)
            document.getElementById('name').value = product.name
            document.getElementById('description').value = product.description
            document.getElementById('brand').value = product.brand
            document.getElementById('imgfield').value = product.image
            document.getElementById('price').value = product.price
        })
        .catch((err) => {
            console.log(err)
        })
}else{

}


const productForm = document.getElementById('product-form')
productForm.addEventListener('submit', function (e){
    e.preventDefault()
    console.log('invio i dati')

    let nameInput = document.getElementById('name')
    let descriptionInput = document.getElementById('description')
    let brandInput = document.getElementById('brand')
    let imageInput = document.getElementById('imgfield')
    let priceInput = document.getElementById('price')

    function Product(
        name = nameInput.value,
        description = descriptionInput.value,
        brand = brandInput.value,
        price = priceInput.value,
        image = imageInput.value
      ) {
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.price = price;
        this.imageUrl = image;
      }

    console.log('evento pronto da inviare alle API', Product)

    fetch(productId ? PRODUCTS + productId : PRODUCTS, {
        method: productId ? 'PUT' : 'POST',
        body: JSON.stringify(new Product()),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDRiYzg4Zjc0MDAwMTQyODc0ODMiLCJpYXQiOjE2ODM5ODExMjYsImV4cCI6MTY4NTE5MDcyNn0.4iidlSoK_Fm230r8gIjAlYPbZLm0duEMAfs2rh2n6vU",
            "Content-Type": "application/json",
            }
    })
        .then((res) => {
            console.log('RESPONSE DELLA CHIAMATA POST', res)
            if(res.ok){
                alert (productId ? 'PRODOTTO MODIFICATO!' : 'PRODOTTO CREATO!')
                location.assign('./index.html')
            }else{
                alert ('ERRORE NEL SALVATAGGIO')
                throw new Error('Errore nel salvataggio')
            }
        })
        .catch((err) => {
            console.log(err)
        })
})
