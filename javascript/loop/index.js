//ex1
for (let i = 0; i < 16; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

//ex2
for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  } else {
    console.log(`${i}`);
  }
}

//ex3
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < arr_1.length; i++) {
  sum1 += arr_1[i];
}
for (let i = 0; i < arr_2.length; i++) {
  sum2 += arr_2[i];
}
console.log(`sum: ${sum1 + sum2}`);

//4
let n1 = 22;
for (let i = 1; i <= n1; i++) {
  if (i % 2 == 0) {
    console.log(`${i}`);
  }
}

//ex5
let str1 = "javascript";
let str = "";
for (let i = 0; i < str1.length; i++) {
  if ((i + 1) % 2 == 0) {
    str += `Z`;
  } else {
    str += str1.charAt(i);
  }
}
console.log(str);

//ex6

let str2 = "don’t know why";
for (let i = 0; i < str2.length; i++) {
  if (str2.charAt(i) === "y") {
    console.log(`yes`);
  }
}

//ex7
let n2 = 4;
let sum7 = 1;
for (let i = 1; i <= n2; i++) {
  sum7 *= i;
  console.log(sum7);
}
console.log(sum7);

//ex8
for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 11; j++) {
    console.log(i * j);
  }
}

//ex9
let grade = [89, 90, 91];
for (let i = 0; i < grade.length; i++) {
  if (grade[i] < 70) {
    console.log("your final grade is D");
  } else if (grade[i] < 80) {
    console.log("your final grade is C");
  } else if (grade[i] < 90) {
    console.log("your final grade is B");
  } else if (grade[i] <= 100) {
    console.log("your final grade is A");
  }
}

//ex10
for (let i = 1; i < 11; i++) {
  console.log(`${i}`);
}

//ex11
let sum11 = 0;
for (let i = 1; i < 21; i++) {
  sum11 += i;
}
console.log(`${sum11}`);

//ex12
let str12 = "hello world";
let vowels = 0;
for (let i = 0; i < str12.length; i++) {
  if (
    str12.charAt(i) === "a" ||
    str12.charAt(i) === "e" ||
    str12.charAt(i) === "o" ||
    str12.charAt(i) === "i" ||
    str12.charAt(i) === "u"
  ) {
    vowels += 1;
  }
}

console.log(`${vowels}`);

//ex13
for (let i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {
    console.log(`${i}`);
  }
}

//ex14
let n = 7;
let counter = 0;
for (let i = 2; i < n; i++) {
  if (n % i === 0) {
    counter += 1;
  }
}
if (counter === 0) {
  console.log(`${n} is prime number`);
} else {
  console.log(`${n} is not prime number`);
}

//ex15
let str15 = "javascript";
let newString = "";
for (let i = str15.length - 1; i > -1; i--) {
  newString += str15.charAt(i);
}
console.log(`${newString}`);

//ex16
let base = 2;
let multip = 1;
let exponent = 5;
for (let i = 1; i <= exponent; i++) {
  multip *= 2;
}
console.log(`${multip}`);

//ex17
for (let i = 1; i <= 10; i++) {
  console.log(`${i * 5}`);
}

//ex18
let arr = [3, 67, 15, 98, 23];
let num = 0;
for (let i = 0; i < arr.length; i++) {
  if (num <= arr[i]) {
    num = arr[i];
  }
}
console.log(`${num}`);

//ex19
let str19 = "javascript is amazing";
counter = 0;
for (let i = 0; i < str19.length; i++) {
  if (str19.charAt(i) === "a") {
    counter += 1;
  }
}
console.log(`${counter}`);

//ex20
n = 7;
let sum20 = "01";
for (let i = 2; i < n; i++) {
  char = parseInt(sum20.charAt(i - 1)) + parseInt(sum20.charAt(i - 2));
  sum20 += char;
}
console.log(`${sum20}`);

//21
n = 28;
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    console.log(`${i}`);
  }
}

//23
let sentence = "Loops are fun to learn";
counter = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence.charAt(0) === " ") {
  } else if (sentence.charAt(sentence.length - 1) === " ") {
  } else if (sentence.charAt(i) === " ") {
    counter += 1;
  }
}

console.log(`Number of words:${counter + 1}`);
//24
arr = [1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 14];
counter = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== i + 1 + counter && i > 0) {
    counter += 1;
    console.log(` Missing number ${i + counter}`);
  }
}

//25
arr = [-3, 5, -2, 0, 9, -8];
str = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    str += arr[i] + " ";
  }
}
console.log(` [ ${str}]`);

//26
str = "";
for (let i = 0; i < 5; i++) {
  str += "*";
  console.log(`${str}`);
}

//ex27
num = 12345;
let sum27 = 0;
str = num.toString();
for (let i = 0; i < str.length; i++) {
  sum27 += num % 10;
  num = parseInt(num / 10);
}
console.log(`${sum27}`);

//ex28
arr = [1, 2, 3, 2, 1, 4];
for (let i = 0; i < arr.length; i++) {
  let a = arr[i];
  for (let j = 0; j < arr.length; j++) {
    if (i !== j && a === arr[j] && arr[j] !== "a") {
      arr[j] = "a";
    }
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != "a") {
    console.log(`${arr[i]}`);
  }
}
//29
arr = [4, 10, 9, 2, 7];
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] >= arr[i + 1]) {
    a = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = a;
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] >= arr[j + 1]) {
      a = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = a;
    }
  }
}
console.log(arr[arr.length - 2]);

//30
arr = [5, 3, 8, 1, 4];
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] >= arr[i + 1]) {
    a = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = a;
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] >= arr[j + 1]) {
      a = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = a;
    }
  }
}

console.log(arr);

//last one
str = [""];
str2 = [];
n = 5;
for (let i = 0; i < n; i++) {
  if (parseInt(n / 2) >= i) {
    for (let j = 0; j < i; j++) {
      str2.push("*");
      console.log(`${str2}`);

      str.push(str2);
    }
  } else {
    for (let j = 0; j < i; j++) {
      str2.pop();
      console.log(`${str2}`);

      str.push(str2);
    }
  }
}

console.log(`${str}`);

// register

const numcheck = /\d+/;
const register = ("op99982300").toUpperCase();
counter=0;
if(register.length===10){
for (let i = 0; i < register.length; i++) {
  if (i < 2&&(register.charCodeAt(i)>91||register.charCodeAt(i)<64)) {
    console.log("it's not register");
    break;
  }
  else{
      if (i > 2&&numcheck.test(register.charAt(i))!==true) {
        console.log("it's not register");
        break;
      }
      else{
      }
  }
  
}
}
else{
  console.log("it's not register");
}

//loop ex2 5
num=10;
checkNum=prompt("number:","");
if(checkNum===num){
  console.log(checkNum);
}
else if(checkNum>num){
  for(let i=num;i<=checkNum;i++){
  console.log(i);
}
}
else{
  for(let i=checkNum;i<=num;i++){
    console.log(i);
  }
}

//loop ex2 6

const numLength=prompt("number:","");
counter=0;
for(let i = 0; i < numLength.length; i++){
  if(numcheck.test(numLength.charAt(i))===true){
    counter++;
  }
  else{
    console.log("it's not a number");
    counter=""
    break;
  }
}
console.log(counter);
