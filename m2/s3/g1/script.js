//ESERCIZIO 1
class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
}
    static compareAge(x, y) {
        if(x.age > y.age){
            return x.firstName + ' è più giovane di ' + y.firstName;
        }else{
            return y.firstName + ' è più vecchio di ' + x.firstName;
        }   
    }
}
        
    const userx = new User("Mario", "Bros", 40, "Roma");
    const usery = new User("Luigi", "Bros", 50, "Roma");
    
    console.log(User.compareAge(userx, usery));

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
        static sameOwnerName(firstowner, secondowner){
            if('firstowner' === 'secondowner'){
                return true;
            }else{
                return false;
            }
        }
    }

const createList = function () {
    let listPets = document.querySelector('#users-list')
    listPets.innerHTML = ''
    pets.forEach((pet, i) => {
    let newListItem = document.createElement('li')
    newListItem.innerText =
    pet.petName +
    ' ' +
    pet.ownerName +
    ' ' +
    pet.species +
    ' ' +
    pet.breed
    listPets.appendChild(newListItem)
    })
  }
  
  let formReference = document.querySelector('form')
  formReference.addEventListener('submit', (e) => {
    e.preventDefault()
    let petsFromTheForm = new User(petNameInputField.value, ownerNameInputField.value, speciesInputField.value, breedInputField.value)
    console.log(petsFromTheForm)
    users.push(petsFromTheForm)
    nameInputField.value = '' 
    surnameInputField.value = ''
    createList()
  })
