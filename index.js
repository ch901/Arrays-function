// Question 1
// Mutating methods are ones that change the object after the method has been used.
// Array.prototype.pop()
// Array.prototype.push()
// Array.prototype.shift()
// Array.prototype.unshift()
// Array.prototype.reverse()
// Array.prototype.sort()
// Array.prototype.splice()

// Non-mutating methods do not change the object after the method has been used.
// Array.prototype.slice()
// Array.prototype.concat()
// Array.prototype.map()
// Array.prototype.filter()
// Array.prototype.flat()

// qUESTION2
// let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']

// languages.push('Kotlin')
// console.log(languages)

// languages.splice(3, 0, 'Java')
// console.log(languages)

// languages.shift('C#')
// console.log(languages)

// languages.unshift('Scala', 'Swift')
// console.log(languages)

// let removeElement = languages.splice(5, 1, 'Go', 'Rust')
// console.log(languages)

// Question3

// let fruit = ['apple', 'mango', 'banana'];
		// function changeFruit(fruit) {
    			// fruit[2] = "orange";
    			// return fruit;
		// }
// console.log(fruit)

//changeFruit=['apple', 'mango', 'orange'] in computer counting start from 0

// question4

// const numbers = [4, 5, 10, -2];
// let max = numbers[0];
// for (let  i = 0; i <  numbers.length; i++) {
//   if (numbers[i] >= max){
//   max = numbers[i];
// }
// }
// console.log( 'max is ' + max)

// Solution 2
// const getMaxFromArray = (array) => {
//   let currentMaxNumber = 0;
  
//   array.forEach((n) => {
//     if(n > currentMaxNumber){
//       currentMaxNumber = n
//     }
//   })
  
//   return currentMaxNumber
// }

// console.log('getMaxFromArray', getMaxFromArray([4, 5, 10, -2]))

// question5


function valTimesIndex (array){
  return  array.map((val, index) => val * index)
 }

console.log ( valTimesIndex ([1, 2, 3]))
