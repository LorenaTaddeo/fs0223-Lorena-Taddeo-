const PRODUCT_URL = 'https://striveschool-api.herokuapp.com/api/product/'

const fillDetailsPage = function (productDetails) {
    let colContent = `
    <img src=${productDetails.imageUrl} style="width: 100%"/>
    <div>
    <p href="#">${productDetails.name} ${productDetails.price}</p>
    </div>
    <div>
    <a href="./index.html">INDIETRO</a>
    </div>
`

let coltoFill = document.querySelector('.col-12.col-md-8')
coltoFill.innerHTML = colContent
}

const getSingleImage = function () {
    let productIdFromAddressBar = new URLSearchParams(window.location.search).get('productId')
    fetch(PRODUCT_URL + productIdFromAddressBar, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDRiYzg4Zjc0MDAwMTQyODc0ODMiLCJpYXQiOjE2ODM5ODExMjYsImV4cCI6MTY4NTE5MDcyNn0.4iidlSoK_Fm230r8gIjAlYPbZLm0duEMAfs2rh2n6vU",
        },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Error getting single image details')
        }
      })
      .then((singleImageDetails) => {
        console.log('SINGLE IMAGE DETAILS', singleImageDetails)
        fillDetailsPage(singleImageDetails)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  window.onload = function () {
    getSingleImage()
  }
  