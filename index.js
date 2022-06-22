// // 01 - Fruits
// const fruits = ["mango", "lemon", "blueberry"]
// console.log(fruits)
// console.table(fruits)

// // 02 - Access
// const ingredients = ["eggs", "milk", "butter"]
// console.log(ingredients[1])
// console.log(ingredients.indexOf("butter"))

// // 03 - Add and Remove
// const objects = ["pen", "book", "lamp"]
// objects.unshift("chair")
// console.log(objects)
// objects.pop("lamp")
// console.log(objects)
// objects.push("laptop")
// console.log(objects)
// objects.shift("chair")
// console.log(objects)

// // 04 - Order
// const numbers = [4, 10, 8, 12, 6]
// numbers.reverse()
// console.log(numbers)

// // 05 - Boucle
// let total = 0
// const limit = 10
// for (let i = 0; i <= limit; i++) {  
//     total = total+i
//     console.log(total)
//   }


// // 06 - Reverse
// const sentence = "Hello Konexio!"
// for (let i = sentence.length-1; i >= 0; i--) {  
//     console.log(sentence.charAt(i))
//   }

// // 07 - Fizzbuzz
// let departure = 0
// const finish = 100
// for (let i = 0; i <= finish; i++) {
// //   console.log(i)
// if (i % 7 ===0){
//     console.log("")
// } else if (i % 3 ===0 && i % 5 ===0){
//     console.log("Buzz")
// } else if (i % 5 ===0){
//     console.log("Fizzbuzz")
// } else if (i % 3 ===0) {
//     console.log("Fizz")
// }else {
//     console.log(i)
// }
// }

// // 08 - While
// let departure = 0
// const finish = 100
// while (departure < finish) {
//     departure +=1



// // 09 - Sans boucle
// const students = ["walid", "jad", "danh", "clara", "aurelien"]
// const random = students[Math.floor(Math.random()*students.length)]
// console.log(random)

// 10 - Random and max
const hempty = []
for (let i = 0; i <= 20; i++){
    // console.log(i)
    hempty[i]=[Math.floor(Math.random()*100)]
}
console.log(hempty)
for (let i = 0; i <= 20; i++) {  
    // console.log(i)
if (i<hempty[i]){
    console.log("i")
}
}


