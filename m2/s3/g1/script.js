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
