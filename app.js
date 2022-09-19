// function maxString(ary) {
//     let maxStr = ary[0];
//     for (let i = 0; i < ary.length; i++) {
//         const element = ary[i];
//         if (element.length> maxStr.length) {
//             maxStr = element;
//         }
//     }
//     return maxStr;
// }

// const result =["Raisul", "Himal Islam", "Khairul", "DipokRoy"]
// const arrString = maxString(result);
// console.log(arrString);

// function reverseWords(str) {
//     const words = str.split(" ");
//     const result = [];
//     for (let i = words.length - 1; i >= 0; i--) {
//         const elem = words[i];
//         result.push(elem);
//     }
//     const reverse=result.join(" ");
//     return reverse;
// }
// const myString = 'I am a string';
// reverseWords(myString);

// const names = ['Abul', 'Babul', 'chabul', 'kabul', 'Babul', 'asif', 'asif'];
// function removeDuplicated(names) {
//     const unique=[];
//     for (let i = 0; i < names.length; i++) {
//         const name = names[i];
//         if(unique.includes(name) === false) {
//             unique.push(name);
//         }

//     }
//     return unique;
// }
// const uniqueName=removeDuplicated(names);
// console.log(uniqueName);


// function removeElement(names) {
//     const unique = [];
//     for (let i = 0; i < names.length; i++) {
//         const name = names[i];
//         if (unique.includes(name) === false) {
//             unique.push(name);
//         }
//     }
//     return unique;
// }
// const result =removeElement(names);
// console.log(result);

// const phones=[
//     {name: 'iPhone',camera: 23,str:'32gb',price:3445, color:'green'},
//     {name: 'gPhone',camera: 23,str:'32gb',price:5445, color:'green'},
//     {name: 'kPhone',camera: 23,str:'32gb',price:3445, color:'green'},
//     {name: 'rPhone',camera: 23,str:'32gb',price:445, color:'green'},
//     {name: 'dfPhone',camera: 23,str:'32gb',price:56445, color:'green'},
//     {name: 'hone',camera: 23,str:'32gb',price:344545, color:'green'},
// ];

// function cheapPhone(phones){
//     let cheap = phones[0];
//     for (let i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         if(phone.price < cheap.price){
//             cheap=phone;
//         }
//     }
//     return cheap;

// }
// const result=cheapPhone(phones);
// console.log(result);


// const shoppingCard=[
//     {name: 'Shoe', price:1200},
//     {name: 'Shirt', price:3200},
//     {name: 'Pant', price:3400},
//     {name: 'Watch', price:800},

// ];

// function totalCoasts(products){
//     let sum=0;
//     for(let i = 0; i < shoppingCard.length; i++){
//         const product=products[i];
//         sum=sum+product.price;

//     }
//     return sum;
// }
// const result =totalCoasts(shoppingCard);
// console.log(result);


// function ticketPrice(ticketQuantity){
//     const firstRate=100;
//     const secondRate=90;
//     const thirdRate=70;

//     if(ticketQuantity <=100){
//         const price=firstRate* ticketQuantity;
//         return price;
//     }
//     else if(ticketQuantity <= 200){
//         const firstHundred=100 * firstRate;
//         const restTicketQuantity=ticketQuantity -100;
//         const ticketPrice=restTicketQuantity * secondRate;
//         const totalPrice=firstHundred + restTicketQuantity;
//         return totalPrice;
//     }
//     else{
//         firstHundred=100 * firstRate;
//         const secondHundred=100 * secondRate;
//         const restTicketQuantity=ticketQuantity -200;
//         const restTicketPrice=restTicketQuantity * thirdRate;
//         const totalCoasts=firstHundred+secondHundred+restTicketPrice;
//         return totalCoasts;
//     }
// }


// const result=ticketPrice(300);
// console.log(result);

// function add(num1, num2){
//    if(typeof num1 !=='number' || typeof num2 !=='number'){
//     return "Please Enter Number";
//    }
//    return num1 + num2;
// }
// add(5,7);
var student = { name : "Yo Mama", age : 17 };
const stu=delete student.age;
console.log(stu);