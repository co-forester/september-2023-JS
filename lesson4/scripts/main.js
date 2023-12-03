// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let ar;
function areaRectangle(a, b) {
    return ar = a * b
}
areaRectangle(3, 7);
// areaRectangle(13, 7);
console.log('площа прямокутника = ' + ar);
document.write('площа прямокутника = ' + ar);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let ac;
function areaCircle(r) {
    return ac = Math.PI * r * r;
}
areaCircle(786);
console.log('площа круга = ' + ac);
document.write('<hr>');
document.write('площ круга = ' + ac);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let sc;
// const PI=3.14;
function areaCylinder(r, h) {
    return sc = 2 * Math.PI * r * (r + h);
}
areaCylinder(6, 3);
console.log('площа циліндра = ' + sc);
document.write("<hr>");
document.write('площа циліндра = ' + sc);
// - створити функцію яка приймає масив та виводить кожен його елемент
function printAr(arr) {
    for (let i = 0, arr1 = arr; i < arr1.length; i++) {
        let itter = arr1[i];
        console.log(itter);
        document.write("<div>".concat(itter.name, " ").concat(itter.surname, "<br> ").concat(itter.age, "<br> ").concat(itter.info, "</div>"));
        document.write("<div>*********************</div>");
    }
}
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
printAr(simpsons);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writerParagraph(tt) {
    document.write("<div><p>".concat(tt, "</p></div>"));
}
writerParagraph('що це все означає? <br>мабуть так потрібно ' +
    'у березні, щоб оцінити,<br>наскільки швидко вони можуть надати. Тоді побачимо <br>продемонстрували ' +
    'вищий рівень здібностей у кількох різних сферах.');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
 let ulTHreeLi = function (text, count) {
     document.write(`<ol>`);
         for (let i = 0; i < count; i++)
         {document.write(`<li> ${text} </li>`)}
     document.write(`</ol>`)
 };
 ulTHreeLi('жалюгидне явище', 3);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mass = [false, 'gruwkas', 11, -3, true, 0.546474];
function ulMass(arr) {
    document.write(`<ol>`);
    for (let i =0; i < arr.length; i++){
         document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ol>`);
}
ulMass(mass);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let persons = [
    {
        name: 'olga',
        id: 435267,
        age: 34
    },
    {
        name: 'jan',
        id: 566473,
        age: 45
    },
    {
        name: 'lena',
        id: 456738,
        age: 23
    },
    {
        name: 'max',
        id: 9779897,
        age: 31
    },
    {
        name: 'kokos',
        id: 334258,
        age: 28
    }
];
const perSons = function(arr){
    document.write(`<div>`);
    for (const arrElement of arr) {
        document.write(`<div><hr></hr>${arrElement.id}<br>${arrElement.name}<br>${arrElement.age}</div>`);
    }
    document.write(`</div>`);
}
perSons(persons);
// - створити функцію яка повертає найменьше число з масиву
let numChic = [-234, 546, 0,546378,-Math.E, 56, -756];
function minArr(arr){
    let min = arr[0];
    for (let i =1; i < arr.length; i++){
        if (arr[i] < min){min = arr[i]}
    }
    document.write(min);
    document.write(`<hr>`)
}
minArr(numChic);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sumArr = function (arr){
    let summ = 0;
    for (const arrElement of arr) {
       summ = summ + arrElement
    }
   document.write(summ)
}
const redNum = [2, 45, 67, 0.34, -78, -37.34];
sumArr(redNum);
document.write(`<hr>`)
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function changIndex (index1, index2, arr){
    let eL= arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = eL;
    document.write(arr)
}
changIndex(2, 5, redNum);
document.write(`<hr>`)
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = function exchange(sumUAH, currency, currencyBank){
for (let i =0; i < currencyBank.length; i++){
    if (currencyBank[i].currency === currency){
        document.write(sumUAH / currencyBank[i].value)
    }
}
};
let currencyBankPrivat =  [
    {currency:'USD',value:37.25},
    {currency:'EUR',value:39.6},
    {currency:'GBR',value:47.1},
    {currency:'CZK',value:1.65},
    {currency:'CNY',value:5.35},
    {currency:'PLN',value:9.3},
    {currency:'TRY',value:1.45},
];
let currencyBankSens =  [
    {currency:'USD',value:37.40},
    {currency:'EUR',value:40},
    {currency:'GBR',value:47.05},
    {currency:'CZK',value:1.66},
    {currency:'CNY',value:5.4},
    {currency:'PLN',value:9.25},
    {currency:'TRY',value:1.46},
];
exchange(1460000, 'TRY', currencyBankSens);


console.log('курс валют в банке "Sens":')
for (const currencyValue of currencyBankSens) {
    for (const currencyBankSensKey in currencyValue) {
        console.log(currencyBankSensKey, ':', currencyValue[currencyBankSensKey]);
    }
    console.log('')
}

currencyBankSens.push({currency:'CHF', value: 42.45});
console.log(currencyBankSens);
