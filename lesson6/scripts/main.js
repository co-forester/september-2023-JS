// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str01 = 'hello world';
let str02 = 'lorem ipsum';
let str03 = 'javascript is cool';
console.log(str01.length);
console.log(str02.length);
console.log(str03.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str01.toUpperCase());
console.log(str02.toUpperCase());
console.log(str03.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(str01.toLowerCase());
console.log(str02.toLowerCase());
console.log(str03.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.substring(str.indexOf('d'), str.lastIndexOf('g')+1));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str1 = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let arr = str1.split(' ');
console.log(arr);

// - є масив чисел  [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arrNum = [10,8,-7,55,987,-1011,0,1050,0];
let arrStr = '';
for (let number of arrNum) {
    number = number.toString();

}
console.log(arrNum)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let sortis = function (nums, direction) {
    if (direction === 'ascending'){
let sortNums = nums.sort((n1, n2) => {
    return n1-n2;
})}
    else if (direction === 'descending'){
let sortNums = nums.sort((n1, n2) => {
    return n2-n1
})}
    else console.log('введені невірні данні')
console.log(nums);
        console.log('=========================');
};
sortis(nums, 'ascending');
sortis(nums, 'descending')

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortMonthDuration = coursesAndDurationArray.sort((curs1, curs2) =>
    curs2.monthDuration-curs1.monthDuration
);
console.log(sortMonthDuration);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterMonthDuration = coursesAndDurationArray.filter(curs => curs.monthDuration > 5);
console.log(filterMonthDuration);
let filterMonthDuration000 = coursesAndDurationArray.filter(({monthDuration})=> monthDuration > 5);
console.log(filterMonthDuration000);

// описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
const cardSuits = ['spade', 'diamond', 'heart', 'clubs']; /*утворення колоди*/
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king']; /*утворення колоди*/
let cardsDesc = []; /*утворення колоди*/
for (const cardSuit of cardSuits) { /*утворення колоди*/
    const redSuits = ['diamond','heart']; /*утворення колоди*/
    const blackSuits  = ['spade', 'clubs']; /*утворення колоди*/
    let color = ''; /*утворення колоди*/
    if (redSuits.includes (cardSuit)) color = 'red'; /*утворення колоди*/
    if (blackSuits.includes (cardSuit)) color = 'bLack'; /*утворення колоди*/
    for (const value of values) { /*утворення колоди*/
        cardsDesc.push ({cardSuit, value, color})} /*утворення колоди*/
} /*утворення колоди*/
console.log (cardsDesc ); /*утворення колоди*/
let cards = cardsDesc;
// - знайти піковий туз
let res = cards.find(function (card){
    if (card.cardSuit === "spade" && card.value === 'ace') return card});
console.log(res);
// - всі шістки
let cardSix = cards.filter((card) => card.value === '6')
console.log(cardSix);
// - всі червоні карти
let cardRed = cards.filter((card) => card.color === 'red')
console.log(cardRed);
/// - всі буби
let cardDiamond = cards.filter((card) => card.cardSuit === 'diamond')
console.log(cardDiamond);
// - всі трефи від 9 та більше
let cardClubs = cards.filter((card) =>
    card.cardSuit === 'clubs' && card.value !== '6' && card.value !== '7' && card.value !== '8')
console.log(cardClubs);
// const eee = cards. filter((card) => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king','ace'].includes (card .value));
// console.log(eee);
console.log('=========================');


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = cards.reduce(function (accumulator, card){
    if (card.cardSuit ==='spade') {accumulator[0].push(card)}
    else if (card.cardSuit ==='diamond'){accumulator[1].push(card)}
    else if (card.cardSuit ==='clubs'){accumulator[2].push(card)}
    else {accumulator[3].push(card)}
    return accumulator
}, [[],[],[],[]]);
console.log(reduce);