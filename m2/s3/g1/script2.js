//ESERCIZIO 2
let petNameInputField = document.getElementById('petName')
let ownerNameInputField = document.getElementById('ownerName')
let speciesInputField = document.getElementById('species')
let breedInputField = document.getElementById('breed')

let pets = []

class Pets{
    constructor(petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    static sameOwnerName = function(otherPet){
       return this.ownerName === otherPet.ownerName
        }
    }


const createList = function () {
let listPets = document.querySelector('#users-list')
listPets.innerHTML = ''
pets.forEach((pets, i) => {
let newListItem = document.createElement('li')
newListItem.innerText =
pets.petName +
' ' +
pets.ownerName +
' ' +
pets.species +
' ' +
pets.breed
Pets.sameOwnerName() 
listPets.appendChild(newListItem)
})
}

let formReference = document.querySelector('form')
formReference.addEventListener('submit', (e) => {
e.preventDefault()
let petsFromTheForm = new Pets(petNameInputField.value, ownerNameInputField.value, speciesInputField.value, breedInputField.value)
console.log(petsFromTheForm)
pets.push(petsFromTheForm)
petNameInputField.value = '' 
ownerNameInputField.value = ''
speciesInputField.value = ''
breedInputField.value = ''
petNameInputField.focus()
createList()
})
