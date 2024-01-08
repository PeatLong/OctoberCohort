/*1. **Using string concatenation add two different strings together and print this off.**
2. **Using variables create a variable for a number, a string. Then print each of these variables.**
3. **Using string concatenation in javascript combine 3 different variables and prints it off. I.e variable for name age and date of birth will result in “my name is John I am 35 years old and I was born in 1988”. (you cannot use name age and dob as your variables).**
4. **Create a variable that is printed off then changed further down the script and printed.**
5. **Print off the datatypes for a number variable & string variable.**
6. **Write a conditional statement to state if hero is a dc character or marvel character. (i.e superman would be dc, spiderman would be marvel).***/

const animalType = "cat"
const furColour = "orange"

console.log(`The ${animalType} is ${furColour}`)

let petNumber = 2
const petOwner = "Mary"

console.log('petNumber')
console.log('petOwner')

console.log(`The vet visitor today is ${petOwner} who has ${petNumber} pets. Today she is bringing her ${furColour} ${animalType}`)

petNumber = 5

console.log(`${petOwner} is back and now she has ${petNumber} pets!`)

console.log(typeof petNumber)

const Hero = "Deadpool"

if (Hero == "Deadpool")
    console.log('Marvel')
else
    console.log('DC')
