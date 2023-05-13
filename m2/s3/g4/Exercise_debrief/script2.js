//1) ENTRO NELLA PAGINA DI PEXELS E RECUPERO LA MIA CHIAVE E IL SITO
//   DOVE HO LE FOTO:
//   QUESTO E' IL SITO DOVE TROVO ENTRAMBI => 
//   https://www.pexels.com/api/new?nc=
//   QUESTA E' LA CHIAVE = >
//   fl4F03TrHG6Op17niomH2EXSxt7fmlygWhteLkLZ26SqaNxvazxp8iJ7
//   QUESTO E' IL SITO PER COLLEGARE LE FOTO =>
//   https://api.pexels.com/v1/search?query=
//2) CREO LA COSTANTE  DEL SITO DAL QUALE PRENDERO' LE FOTO
const PEXELS_URL = 'https://api.pexels.com/v1/search?query='
//3) DEVO CREARE UNA FUNZIONE CHE MI PERMETTE DI PREMERE SUL BOTTONE "Load Images" E DI CONSEGUENZA CARICHERA' IL CONTENUTO DELLE API NELLA PAGINA AL POSTO DEI PLACEHOLDER:
const getImages = function (query) {
    fetch(PEXELS_URL + query, {
        headers: {
        authorization: 'fl4F03TrHG6Op17niomH2EXSxt7fmlygWhteLkLZ26SqaNxvazxp8iJ7',
    },
})
.then((res) => {
    if(res.ok) {
        return res.json()
    }else{
        throw new Error('Error getting the images')
    }
})
.then((data) => {
    console.log(data)
    //rimpiazzo il DOM
    renderCards(data.photos)
})
.catch((err) => {
    console.log(err)
})
}

window.onload = function() {
    let primaryButton = document.querySelector('btn-primary')
    primaryButton.addEventListener('click', () => {
        getImages('sea')
    })

    let secondaryButton = document.querySelector('btn-secondary')
    secondaryButton.addEventListener('click', () => {
        getImages('mountains')
    })
}