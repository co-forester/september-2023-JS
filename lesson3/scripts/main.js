// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++){
    document.write('<div>шабадамагама</div>')
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>${i} ro-co-co</div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i=0;
while (i<20){
    document.write('<h1>kokosische</h1>')
    i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let n=0;
while (n<20){
    document.write(`<h1>${n} kokosische</h1>`)
    n++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:

    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>

// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
document.write('<ul>');
for (let j = 0; j < listOfItems.length; j++) {
    document.write(`<li> ${listOfItems[j]}</li>`)
}
document.write('</ul>');
// -----------------------------------------------

    // Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
//     <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
document.write('<div class="product-card">');
for (const product of products) {
    document.write(`<h3 class="product-title">${product.title}. Price - ${product.price}</h3>`);
    document.write(`<img src="${product.image}" alt="${product.title}" class="product-image">`);
}
document.write('</div>');

// --------------------
    // є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
for (const user of users) {
    if(user.status){console.log(user)}
};
console.log('---------------------');
// - користувачів зі статусом false
for (const user of users) {
    if(!user.status){console.log(user)}
};
console.log('---------------------');
// - користувачів які старші за 30 років
for (const user of users) {
    if(user.age > 30){console.log(user)}
};
console.log('---------------------');
// --створити масив з:
//     - з 5 числових значень
let nums = [-23, 0.64573, 1.34, 54673, 67];
console.log(nums);
// - з 5 стічкових значень
let str = ['VVV', 'volvo', 'mercedes', 'green', 'STAR'];
console.log(str);
// - з 5 значень стрічкового, числового та булевого типу
let arr = ['rogue', -333, true, false, 'gold'];
// - та вивести його в консоль
console.log(arr);
console.log('---------------------');
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let persons =[];
for (let j = 0; j < 5; j++) {
    persons += `${prompt('add number', '666')} , `;
};
console.log(persons);
console.log('---------------------');




// - є масив
let a = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let j = 0;
while (j < a.length){
    console.log(a[j])
    j ++;
};
console.log('---------------------');
//     2. перебрати його циклом for
for (let k = 0; k < a.length; k ++) {
    const aElement = a[k];
    console.log(aElement)
};
console.log('---------------------');
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let l = 0;
while (l < a.length){
    if (l%2 !== 0){console.log(a[l])}
    l ++;
};
console.log('---------------------');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let k = 0; k < a.length; k ++) {
    const aElement = a[k];
    if (k%2 !== 0){console.log(aElement)}
};
console.log('---------------------');
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let m = 0;
while (l < a.length){
    if (m%2 === 0){console.log(a[m])}
    m ++;
};
console.log('---------------------');
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let k = 0; k < a.length; k ++) {
    const aElement = a[k];
    if (k%2 === 0){console.log(aElement)}
};
console.log('---------------------');
// 7. замінити кожне число кратне 3 на слово "okten"
for (let k = 0; k < a.length; k ++) {
    const aElement = a[k];
    if (k%3 === 0){console.log('okten')}
    else console.log(aElement)
};
console.log('---------------------');
// 8. вивести масив в зворотньому порядку.
for (let k = (a.length - 1); k >= 0; k --) {
    const aElement = a[k];
    console.log(aElement)
};
console.log('---------------------');
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1. перебрати його циклом while (в зворотньому циклі (с заду на перед))
let o = (a.length-1);
while (o >= 0){
    console.log(a[o])
    o --;
};
console.log('---------------------');
//     2. перебрати його циклом for (в зворотньому циклі (с заду на перед))
for (let k = a.length-1; k >= 0; k --) {
    const aElement = a[k];
    console.log(aElement)
};
console.log('---------------------');
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом (в зворотньому циклі (с заду на перед))
let h = a.length-1;
while (h >= 0){
    if (h%2 !== 0){console.log(a[h])}
    h --;
};
console.log('---------------------');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом (в зворотньому циклі (с заду на перед))
for (let k = a.length-1; k >= 0; k --) {
    const aElement = a[k];
    if (k%2 !== 0){console.log(aElement)}
};
console.log('---------------------');
// 5. перебрати циклом while та вивести  числа тільки парні  значення (в зворотньому циклі (с заду на перед))
let s = a.length-1;
while (s >= 0){
    if (s%2 === 0){console.log(a[s])}
    s --;
};
console.log('---------------------');
// 6. перебрати циклом for та вивести  числа тільки парні  значення (в зворотньому циклі (с заду на перед))
for (let k = a.length-1; k >= 0; k --) {
    const aElement = a[k];
    if (k%2 === 0){console.log(aElement)}
};
console.log('---------------------');
// 7. замінити кожне число кратне 3 на слово "okten" (в зворотньому циклі (с заду на перед))
for (let k = a.length-1; k >= 0; k --) {
    const aElement = a[k];
    if (k%3 === 0){console.log('okten')}
    else console.log(aElement)
};
console.log('---------------------');
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
const numbers = [90, 44, 777, 0.2, 11, -3, -0.456, 5, 222, 0.7];
for (const number of numbers) {
    console.log(number)
};
console.log('---------------------');
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
const strings = ['ee', 'yyy', 'fg', 'dd', 'nnn', 't', 'aaa', 'ddd', 'dd', 'yyy'];
for (const string of strings) {
    console.log(string)
};
console.log('---------------------');
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let full = [33, true, true, 'number', '666', 777, -0.314, false, -1, 'trueshechka'];
for (const fullElement of full) {
    console.log(fullElement)
};
console.log('---------------------');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (const fullElement of full) {
    if (typeof(fullElement) === "boolean") {console.log(fullElement)}
};
console.log('---------------------');
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const fullElement of full) {
    if (typeof(fullElement) === "number") {console.log(fullElement)}
};
console.log('---------------------');
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const fullElement of full) {
    if (typeof(fullElement) === "string") {console.log(fullElement)}
};
console.log('---------------------');
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let mdg = [];
 mdg[3] = 4444;
 mdg[0] = 'фарба';
 mdg[9] = true;
 mdg[1] = false;
 mdg[2] = 'rubin';
 mdg[5] = 1;
 mdg[6] = 222;
 mdg[4] = 4;
 mdg[8] = '8';
 mdg[7] = -0.999;
for (const mdgElement of mdg) {
    console.log(mdgElement)
};
console.log('---------------------');
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k < 10; k++) {
    console.log(k+1);
    document.write(`<div>${k+1}</div> `)
};
console.log('---------------------');
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k < 100; k++) {
    console.log(k+1);
    document.write(`<div>${k+1}</div> `)
};
console.log('---------------------');
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let k = 0; k < 100; k=k+2) {
    console.log(k);
    document.write(`<div>${k}</div> `)
};
console.log('---------------------');
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let k = 0; k < 100; k=k+2) {
    console.log(k);
    document.write(`<div>${k}</div> `)
};
console.log('---------------------');
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let k = 1; k <= 100; k=k+2) {
    console.log(k);
    document.write(`<div>${k}</div> `)
};
console.log('---------------------');
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        title: 'алгебра',
        page: 168,
        genre: ['учбова'],
        authors:["Свірідова", "Ерогін", "Жорхіч"]
    },{
        title: 'хімія на кухне',
        page: 169,
        genre: ['прікладна, драма'],
        authors:["Заноха", "Любчик"]
    },{
        title: 'Женщіна і автомобіль',
        page: 5,
        genre: ['фантастіка, драма'],
        authors:["Слесарьов", "Чоловік", "Зять", "Батя", "Сусід"]
    },{
        title: 'геометрія',
        page: 198,
        genre: ['учбова'],
        authors:["Дронов", "Цимбал", "Хрюндєль"]
    },{
        title: 'фізика',
        page: 207,
        genre: ['учбова'],
        authors:["Стакан", "Ловкій", "Шустряк", "Кокос"]
    },{
        title: 'казки',
        page: 376,
        genre: ['казки, фентазі'],
        authors:["Тимошенко", "Порошенко"]
    },
]
// -знайти наібльшу книжку.
let p = 0;
let bookBig = [];
for (const book of books) {
    if (book.page > p){p = book.page, bookBig = book}
};
console.log(bookBig);
console.log('---------------------');
// - знайти книжку/ки з найбільшою кількістю жанрів
let v = 0;
let bookMoreGenre = [];
for (const book of books) {
    if (book.genre.length > v){v = book.genre.length, bookMoreGenre = bookMoreGenre + book}
};
console.log(bookMoreGenre);
console.log('---------------------');
// - знайти книжку/ки з найдовшою назвою

// - знайти книжку/ки які писали 2 автори
let bookDblAuthors = [];
for (const book of books) {
    if (book.authors.length === 1){
        bookDblAuthors = bookDblAuthors + book
    }
};
console.log(bookDblAuthors);
console.log('---------------------');
// - знайти книжку/ки які писав 1 автор



// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// 2. Вивести за допомогою console.log кожен третій елемен
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.



// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
    let usersWithCities = [
            {
                id: 1, // <===
                name: 'vasya',
                age: 31,
                status: false,
                address: {
                    user_id: 1, // <===
                    country: 'Ukraine',
                    city: 'Ternopil'
                }
            },
            // TO BE CONTINUED .....
        ]




        // - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.