fetch('https://striveschool-api.herokuapp.com/books')
.then((res) =>{
    if(res.ok){
        return res.json();
    }else{
        throw new Error('Error');
    }
})
.then(dati => {
    console.log(dati);
    let row = document.querySelector("div.container-fluid div.row");
    dati.forEach(element => {
        row.innerHTML += 
        `<div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${element.img}" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text"><span class="fw-bol">Category:</span>${element.category}</p>
                <p class="card-text"><span class="fw-bol">Price:</span>${element.price}</p>
                <button class="btn btn-dark id="discardButton" onclick = "elimina(this)">Discard</button>
                </div>
            </div>
        </div>`   
        }) 
        
    });


let discard = col.querySelectorAll("#discardButton");
discard 

let elimina = function (par){
    par.closest(".col").remove();
}