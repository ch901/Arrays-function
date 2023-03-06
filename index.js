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
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']

languages.push('Kotlin')
console.log(languages)

languages.splice(3, 0, 'Java')
console.log(languages)

languages.shift('C#')
console.log(languages)

languages.unshift('Scala', 'Swift')
console.log(languages)

let removeElement = languages.splice(5, 1, 'Go', 'Rust')
console.log(languages)

// Question3





