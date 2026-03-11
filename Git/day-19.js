// // 1. Create an array with 5 fruits and print it
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// console.log("1. Print all values :"+fruits);

// // 2. Print the first and last element of an array
// console.log("2. First Element:", fruits[0]);
// console.log("3. Last Element:", fruits[fruits.length - 1]);

// // 3. Find the length of an array
// console.log("4. Length of array:", fruits.length);

// // 4. Add an element at the end using push()
// fruits.push("Orange");
// console.log("5. Push new element :"+fruits);

// // 5. Remove the last element using pop()
// fruits.pop();
// console.log("6. Pop element :"+fruits);

// // 6. Add an element at the beginning using unshift()
// fruits.unshift("Apple");
// console.log("7. Unshift Element :"+fruits);

// // 7. Remove the first element using shift()
// fruits.shift();
// console.log("8. Shift :"+fruits);

// // 8. Change the second element of an array
// fruits[1] = "Pine apple";
// console.log(fruits);

// 1. Replace the second element in the array [5, 10, 15] with 20.
let numOfArray = [5,10,15];
numOfArray[1] = 20;
console.log(numOfArray);

// 2. Add the elements 7 and 8 at the end of the array [1, 2, 3, 4, 5].
let listOfNum = [1,2,3,4,5];
listOfNum.push(7,8);
console.log(listOfNum);

// let arrayNum =  [3, 6, 9, 12, 15];
// arrayNum[2] = arrayNum.push(0);
// console.log(arrayNum);

// 4. Replace the second element in the array [5, 10, 15] with 20.
let array1 = [10,20,30];
array1.unshift(99);
console.log(array1);

// 5.Remove the last element from the array [2, 4, 6, 8, 10].
let array2 = [2,4,6,8,10];
array2.pop();
console.log(array2);

// 6.Given the array [3, 6, 9, 12, 15], insert 0 at index 2.
let array3 = [3,6,9,12,15];
array3[2] = 0;
console.log(array3);

let array4 = [1,2,3,4,5];
array4[array4.lenght - 1] = 10;
console.log(array4);

let array5 = [11,23,445];
array5.length = 0;
console.log(array5.unshift(10));
console.log(array5.shift());