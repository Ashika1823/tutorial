// // function evenNumber(n){
// // for (i = 1; i <= n; i++){
// //     if (i %2 == 0){
// //         console.log("Even num :" + i)
// //     }
// // }
// // }
// // evenNumber(20)

// // function oddNumber(n) {
// //     let j = 1;           

// //     while (j <= n) {     
// //         if (j % 2 == 1) {
// //             console.log("Odd num: " + j);
// //         }
// //         j++;            
// //     }
// // }

// // oddNumber(15);

// // function findPositive(n){
// //     if(n > 0){
// //         console.log("Positive")
// //     }else{
// //         console.log("Negative")
// //     }
// // }
// // findPositive(19)

// // function descOrder(n){
// //     for (i = n; i >= 1; i--){
// //         if(i == 5){
// //             continue;
// //         }
// //         else{
// //             console.log(i);
// //         }
// //     }
// // }
// // descOrder(20)

// // function multiplesOf3(n){
// //     for(i = 1; i <= n; i++){
// //         if (i % 3 == 0){
// //             console.log("Multiples of 3 :" + i)
// //         }
// //     }
// // }
// // multiplesOf3(20)

// // let array = [1,2,3,4,5,6];
// // function evenNumberInArray(array){
// //     count = 0;
// //     for(i = 1; i== array; i++){
// //         if()
// //     }
// // }

// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         console.log(num + " is Even");
//     } else {
//         console.log(num + " is Odd");
//     }
// }
// checkEvenOdd(10);
// checkEvenOdd(7);

// function sumToN(n) {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     console.log("Sum from 1 to " + n + " is: " + sum);
// }
// sumToN(5);

// function factorial(n) {
//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }

//     return result;
// }
// console.log("Factorial of 5 is:", factorial(5));

// Use map() to double each element

// Use map() to double each element
// 

// function removeDuplicates(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (result.indexOf(arr[i]) === -1) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log("Remove Dublicate Elements : " +removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// function countEvenNumbers(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log("count Even Numbers : " + countEvenNumbers([1, 2, 3, 4, 6, 7]));

function OddOrEven(arr){
  if(arr % 2 == 0){
    console.log("Even")
  }
  else{
    console.log("Odd")
  }
}
OddOrEven(8)

function ReverseArr(arr1){
  let Reversed = []
  for(let i=arr1.length-1; i >= 0; i--){
    Reversed.push(arr1[i])
  }
  console.log(Reversed)
}
ReverseArr([2,3,4,5])

// function ReverseArray(arr1){
//   let Reversed = [];
//   for(let i = arr1.length - 1, j = 0; i >= 0; i--, j++){
//     Reversed[j] = arr1[i];
//   }
//   console.log(Reversed);
// }

// ReverseArray([2,3,4,5]);

function ReverseArr(arr1){
  let Reversed = []
  for(let i=arr1.length-1; i >= 0; i--){
    Reversed = arr1[i]
  }
  console.log(Reversed)
}
ReverseArr([2,3,4,5])

function ReverseArr(arr1){
  let Reversed = []
  for(let i=arr1.length-1; i >= 0; i--){
    Reversed[Reversed.length] = arr1[i]
  }
  console.log(Reversed)
}
ReverseArr([2,3,4,5])

let arr2 = [1,2,3]
for (let i = 0; i< arr2.length;i++){
  arr2[i] = arr2[i] + 5
}
console.log(arr2)

