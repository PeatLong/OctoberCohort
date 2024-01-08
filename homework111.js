for (var input = 1; input <= 10; input++) {
    console.log(input);
   }


// Initializing numbers array
let numbers = [10, 23, 12, 21];
 
// Declaring empty Even array
let even = [];
for(let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 == 0)
       even.push(numbers[i]);
}
 
// Printing output
console.log(`Even numbers in an array are: ${even}`);

let odd = [];
for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0)
        odd.push(numbers[i]);
}

console.log('Odd numbers in an array are: ${odd}');