console.log(`-----------
Question 1
-----------
`)
//create the ages array
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages);
//subtract the first value from the last programatically
console.log((ages[ages.length-1] - ages[0]));
//add a new age to the array programatically
ages.push(44);
console.log(ages);
//subtract last from first again
console.log((ages[ages.length-1] - ages[0]));
//use a loop to calculate the average age, so add all the ages together and divide by ages.length
//let average = 0
let sum = 0;
let average = 0;
for (let i=0; i<ages.length; i++){
    sum += ages[i];
    average = (sum/ages.length);
} console.log(average);
    
console.log(`-----------
Question 2
-----------
`)

//create an array called names
let names = ["Sam", "Tommy","Tim", "Sally", "Buck", "Bob"];
console.log(names);
//find the average number of letters in each name using a loop

let total = 0;
let nameAverage = 0;
for(let i = 0; i<names.length; i++){
    total += names[i].length;
    nameAverage = (total/names.length)
} console.log(nameAverage.toFixed(0));
//I used .toFixed since you can't have a fraction of a letter

//Use a loop to iterate through the names Array and concantenate them
//together. Why not just use console.log(names.join(' '));??

let namesTogether = ""
for(let i = 0; i<names.length; i++){
     namesTogether += (names[i] + " ");
   } console.log(namesTogether);

console.log(`-----------
Question 3
-----------
`);
console.log(`You access the last element of any array by using the index position at array[array.length-1]`);

console.log(`-----------
Question 4
-----------
`)
console.log(`You access the first element of any array using the 0 index position array[0]`);

console.log(`-----------
Question 5
-----------
`)
//use a loop to add the lengths of the names from the names Array to a new array. 
let nameLengths = [];
for(let i = 0; i<names.length; i++){
    nameLengths.push(names[i].length);
}console.log(nameLengths);
//I didn't have to look that up! WOOHOO!!

console.log(`-----------
Question 6
-----------
`)
//write a loop to calculate the sum of the elements in the nameLengths array
let nameSum = 0
for(i = 0; i<nameLengths.length; i++){
    nameSum += nameLengths[i];
}console.log(nameSum);

console.log(`-----------
Question 7
-----------
`)
//write a function, 2 parameters: word and n, returns the word concantenated to itself n times
let makeWordCombo = (word, n) => {
    let result = ''
    for(i=0; i<n; i++){
    result += word;
    } return result;
}
console.log(makeWordCombo('Hello',3));

console.log(`-----------
Question 8
-----------
`)
//write a function with 2 parameters, firstName and lastName and returns a full name with a space in between
let writeFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(writeFullName('Tom', 'Nook'));

console.log(`-----------
Question 9
-----------
`)
//create a function that takes an array of numbers and returns true if the sum of all the numbers is >100.
//There has to be a more efficient way to do this
let array1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let array2 = [50, 40, 30, 20, 10];
let isGreaterThan100 = (x) => {
    let arraySum = 0;
    for(let i=0; i<x.length; i++){
        arraySum += x[i];
    } if(arraySum>100){
        return true;
    } else{
        return false;
    }
    
}
console.log(isGreaterThan100(array1));
console.log(isGreaterThan100(array2));

console.log(`-----------
Question 10
-----------
`);
//write a function that takes an array and returns the average of the elements in the array
//I'm just going to use array1 and array2 from above

let findArrayAverage = (y) => {
    let arrayAverage = 0
    let newArraySum = 0
    for(let i=0; i<y.length; i++){
        newArraySum += y[i];
        arrayAverage = (newArraySum/(y.length));
    } return arrayAverage;
}
console.log(findArrayAverage(array1));
console.log(findArrayAverage(array2));
let array3 = [10, 10, 10];
console.log(findArrayAverage(array3));

console.log(`-----------
Question 11
-----------
`);

//create a function that compares the average of 2 arrays and returns true if the average of the first array is > the average of the second
//can I just use the function I wrote above and compare it?!
let compareAverages = (a,b) => {
    if (findArrayAverage(a) > findArrayAverage(b)){
        return true
    } else {
        return false
    }
}
console.log(compareAverages(array2, array1));
//yes I can! Yay!

console.log(`-----------
Question 12
-----------
`);

let willBuyDrink = (a,b) => {
    if(a && b>10.50){
        return true;
    } else {
        return false;
    }
}
let isHotOutside = true;
let moneyInPocket = 20;
console.log(willBuyDrink(isHotOutside, moneyInPocket));

console.log(`-----------
Question 13
-----------
`);
//create my own function that solves a problem
//I'm going to create a function that tells you whether or not to let an Animal Crossing villager move from your island
//If you have their Photo and you either have all the reactions they give OR they've been there at least 6 months, then they can leave
let haveVillagerPhoto = true;
let haveAllReactions = false;
let monthsAsResident = 6;
let letVillagerLeave = (a,b,c) => {
    if (a && (b || c>=6)){
        return (`Good luck on your next adventure!`);
    } else {
        return (`No! You can't leave yet!`)
    }
    
}
console.log(letVillagerLeave(haveVillagerPhoto, haveAllReactions, monthsAsResident));