let card = document.getElementsByClassName('card')

fetch("https://api.pexels.com/v1/search?query=Nature",
{
    method: 'GET',
    headers: {
        Authorization: "fl4F03TrHG6Op17niomH2EXSxt7fmlygWhteLkLZ26SqaNxvazxp8iJ7",
    }
})
    .then((res) => {
        if(res.ok){
            return res.json()
        }else{
            throw new Error('Error')
        }
    })
    .then((photos) => {
        photos.photos.forEach((element, i) => {
            let load = document.querySelector('#load')
            load.addEventListener('click', function(){
                card[i].firstElementChild.remove()
                let newImg = document.createElement('img');
                newImg.classList.add('img-fluid');
                newImg.height = '225';
                newImg.src = element.src.landscape
                card[i].prepend(newImg)
            })
        });
    })
    .catch((err) => {
        console.log(err)
    })

    let buttonGrpHide= document.querySelectorAll('btn-group button:last-child')
    console.log(buttonGrpHide)
    buttonGrpHide.forEach((element) =>{
        element.textContent = 'Hide'
        element.addEventListener('click', function hide(){
            element.closest('.col-md-4').remove()
        })
    })
    

