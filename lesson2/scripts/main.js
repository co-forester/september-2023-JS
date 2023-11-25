// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let tresh = ['false', , null, 1444.567, 'Ruby', 666, -8, 'Mukolayv', 'kokos',[3.14, 'true', true], '777-number'];
console.log (tresh);
console.log(tresh[0]);
console.log(tresh[1]);
console.log(tresh[2]);
console.log(tresh[3]);
console.log(tresh[4]);
console.log(tresh[5]);
console.log(tresh[6]);
console.log(tresh[7]);
console.log(tresh[8]);
console.log(tresh[9]);
console.log(tresh[10]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book01 = {
    title: 'Тіні забутих предків',
    pageCount: 192,
    genre: 'story'
};
let book02 = {
    title: 'Legends and myths of Ancient Greece',
    pageCount: 461,
    genre: 'parable'
};
let book03 = {
    title: 'Quantum physics',
    pageCount: 266,
    genre: 'scientific literature'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
//     Кожен автор має поля name та age.
const  bookAlice = {
    title:'Alice\'s Adventures in Wonderland and Other Stories',
    pageCount: 1184,
    genre: 'tale, absurdity',
    author: ['Lewis Carroll', 1832]
};
const bookPotter = {
    title: 'Harry Potter and the Chamber of Secrets',
    pageCount: 400,
    genre: 'fantastic adventures',
    author: ['J.K. Rowling', 58]
};
const bookRedWiteRoylBlue = {
    title:'Red, White and Royal Blue',
    pageCount: 448,
    genre: 'fiction',
    author: ['Casey McQuiston', 32]
};


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
const persons = [
    {name: 'Alice', username: 'Alya', password: 'D56276FB72445%M'},
    {name: 'Maksim', username: 'Max', password: 'Y27788j$#72JH'},
    {name: 'Violetta', username: 'Viola', password: 'jY67bn389099KLj'},
    {name: 'Boris', username: 'Biba', password: '788dgJ&bnj34Nl'},
    {name: 'Moysha', username: 'Moysha', password: 'vhdc6cs7ss4a$$%bbjs'},
    {name: 'Grisha', username: 'Gera', password: 'bhgg%^yg6752lkHm'},
    {name: 'Firdor', username: 'Shift', password:'bhg5677%!bnh78jLKjM'},
    {name: 'Lena', username: 'Kokos', password: 'iYhg666$df$njHj46H'},
    {name: 'Rikardo', username: 'Rik', password: '67Hf%^h$$dF'},
    {name: 'Larisa', username: 'Lola', password: 'iiisDD56$%$222JKuUyU5'}
];
console.log('List password:');
console.log(`${persons[0].name} * ${persons[0].password}`);
console.log(`${persons[1].name} * ${persons[1].password}`);
console.log(`${persons[2].name} * ${persons[2].password}`);
console.log(`${persons[3].name} * ${persons[3].password}`);
console.log(`${persons[4].name} * ${persons[4].password}`);
console.log(`${persons[5].name} * ${persons[5].password}`);
console.log(`${persons[6].name} * ${persons[6].password}`);
console.log(`${persons[7].name} * ${persons[7].password}`);
console.log(`${persons[8].name} * ${persons[8].password}`);
console.log(`${persons[9].name} * ${persons[9].password}`);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x;
// х = 1;
// x=0;
// x = -3;
if (x !== 0){
    console.log('Вірно')}
else console.log('Невірно');

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time;
// time = 29;
// time = 13;
// time = 15;
// time = 34;
time = 47;
// time = 59;
// time = 0;
if (time > 0 && time <= 15) {
    console.log('перша чверть години');
}
else if (time > 15 && time <= 30) {
    console.log('друга чверть години');
}
else if (time > 30 && time <= 45) {
    console.log('треття чверть години');
}
else {
    console.log('четверта чверть години');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
let day;
// day=1;
// day=31;
day = 20;
if (day >= 1 && day <= 10) {
    console.log('перша декада місяця');
}
else if (day > 10 && day <= 20) {
    console.log('друга декада місяця');
}
else {
    console.log('треття декадамісяця');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).
var dayOfTheWeek = prompt('enter the serial number of the day of the week');
switch (dayOfTheWeek) {
    case '1':
        console.log('цьомкнути Оксану');
        break;
    case '2':
        console.log('Почати війну з Кітаєм');
        break;
    case '3':
        console.log('подзвонити Залужному');
        break;
    case '4':
        console.log('похід в перукарню');
        break;
    case '5':
        console.log('ххх');
        break;
    default:
        console.log('Відвідати психіатра');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let namber1 = +prompt('enter  first number', 666);
let namber2 = +prompt('enter  second number', '666');
if (namber1 > namber2) {
    console.log('максимальне число', namber1);
}
else if (namber1 < namber2) {
    console.log('максимальне число', namber2);
}
else {
    console.log('оба числа дорівнюють', namber1);
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//     (хибноподібні, тобто приводиться до false)
let xx;
xx = -0;
if (typeof xx === undefined || xx == null) {
    xx = 'defoult';
}
console.log(xx);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray;
coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
let tr;
tr = coursesAndDurationArray;
if (tr[0].monthDuration > 5 || tr[1].monthDuration > 5 || tr[2].monthDuration > 5 || tr[3].monthDuration > 5 || tr[4].monthDuration > 5 || tr[5].monthDuration > 5) {
    console.log('супер');
}
