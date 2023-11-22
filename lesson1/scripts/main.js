// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let str1;
let str2;
let str3;
let str4;
let num1;
let num2;
let num3;
let num4;
let Pi;
let num5;
let num6;
let bool1;
let bool2;
str1 = 'hello';
str2 = 'owu';
str3 = 'com';
str4 = 'ua';
num1 = 1;
num2 = 10;
num3 = -999;
num4 = 123;
Pi = 3.14;
num5 = 2.7;
num6 = 16;
bool1 = true;
bool2 = false;
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(Pi);
console.log(num5);
console.log(num6);
console.log(bool1);
console.log(bool2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName;
let middleName;
let lastName;
firstName = 'Сергій';
middleName = 'Дмитрович';
lastName = 'Колесник';
let person1 = firstName + ' ' + middleName + ' ' + lastName;
console.log(person1);
let space = ' ';
let person2 = firstName + space + middleName + space + lastName;
console.log(person2);
let person = `${firstName} ${middleName} ${lastName}`;
console.log(person)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100; let b = '100'; let c = true;
console.log(`a = ${a} //`, typeof a);
console.log(`b = '${b}' //`, typeof b);
console.log(`c = ${c} //`, typeof c);


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let fN = prompt('ВВедіть ім`я', 'Сергій');
let mN = prompt('введіть Ваше по-батькові', 'Дмтрович');
let age = +prompt('введіть скількі Вам років');
let user = " ".concat(fN, " ").concat(mN, " ").concat(age);
console.log(user);
console.log(`${fN} ${mN} ${age}`);