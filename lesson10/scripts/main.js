// 1. - Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з'явився блок
// з вашим об'єктом
console.log(document.forms);
let form = document.forms[0];
// console.log(form);
let users = [];
form.onsubmit = function (ev) {
    // console.log(ev);
    ev.preventDefault();
    let userName = this.userName.value;
    let userSurname = this.userSurname.value;
    let userAge = this.userAge.value;
    // console.log({userName, userSurname, userAge});
    let divUser = document.createElement('div');
    divUser.innerText = `user: surname - ${userSurname}, name - ${userName}, age - ${userAge}`;
    users.push({userName, userSurname, userAge});
    document.body.appendChild(divUser);
};
// let btnShow = document.getElementById('btn-show-all');
// btnShow.addEventListener('click', function (e) {
//     for (const user of users) {
//         let div = document.createElement('div');
//         div.innerText = `user: surname - ${user.userSurname}, name - ${user.userName}, age - ${user.userAge}`;
//         document.body.append(div);
//     }
// });

// ==========================
// 2. - є сторінка, на якій є блок, я кому знаходиться цифра. написати код, який при кожному
// перезавантажені сторінки буде додавати до неї +1
let butCount = document.getElementById('butCount');
let  count= document.createElement('div');
let  countText= document.createElement('div');
count.classList.add('count');
countText.classList.add('countText');
countText.innerText = `number of reboots`;
butCount.append(count, countText);
document.body.append(butCount);
let sk = JSON.parse(sessionStorage.getItem('countReboots')) || 0;
window.addEventListener( 'load', function () {
     sk = 1 + JSON.parse(sessionStorage.getItem('countReboots'))
    sessionStorage.setItem('countReboots', JSON.stringify(sk));
    count.innerText = `${sk}`;
})

// ==========================
//  3. - Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно
// відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сесію
window.onunload = function (){
    let sTate = JSON.parse(localStorage.getItem('sessions'));
    if (!sTate) { let sessions=[];
        localStorage.setItem('sessions', JSON.stringify(sessions));
    }
    let now = new Date();
    let session = now.toLocaleString();
    console.log(session);
    let sesSions =  JSON.parse(localStorage.getItem('sessions'));
    sesSions.push(session);
    localStorage.setItem('sessions', JSON.stringify(sesSions));
}

// =========================
//  4. - зробити масив на 100 об'єктів та дві кнопки prev next
// при завантаженні сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів




// 5. - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let draft= document.createElement('div');
draft.classList.add('draft');
let but = document.querySelector('div');
but.append(draft);
draft.innerText = `Kerch bridge`;
button = document.createElement('button');
button.innerHTML = 'disappearance <br> (Storm Shadow)';
button.className = 'buttonchic';
but.append(button);
button.onclick = function (){
    // let D = document.getElementsByClassName('draft');
    but.removeChild(draft);
    but.removeChild(button);
}

// 6. - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше
// він ніж 18, та повідомити про це користувача
f2.addEventListener('submit', function (e) {
    e.preventDefault();
    let age = this.age.value;
    if (age < 18) {
        alert('Вибачте, але Вам немає 18, вхід заборонено')
    } else {
        alert(`Age eligible entry permitted`)
    }
});


// 7. - *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість
// ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка,
//     з відповідним вмістом.
// (Додаткова частина для завдання)
let but5 = document.getElementById('but5');
but5.onclick = createTable;
function createTable() {
    form.onsubmit = function (ev) {
        // console.log(ev);
        ev.preventDefault();
        let element = this.element.value;
        let columns = this.columns.value;
        let rows = this.rows.value
        let tablet = document.createElement('table');

        for (let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');
            tr.classList.add('tr');
            for (let j = 0; j < columns; j++) {
                let td = document.createElement('td');
                td.classList.add('td')
                tr.appendChild(td);
                td.innerText = `${element}`
            }
            tablet.appendChild(tr);
        }
        document.body.appendChild(tablet);
    }
}


// 8. - *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з
// довільним блоком, в середині якого є значення "100 грн"
// при перезавантаженні сторінки до значення додається по 10 грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж
//     10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не
// відбувається
let butCountMoney = document.getElementById('butCountMoney');
let  countMoney= document.createElement('div');
let  countTextMoney= document.createElement('div');
count.classList.add('count');
countTextMoney.classList.add('countText');
countTextMoney.innerText = `гривень`;
let currentTime = new Date().getTime();
let lastRefreshTime = localStorage.getItem('lastRefresh') || currentTime;

let skw = JSON.parse(localStorage.getItem('countMoney')) || 100;
window.addEventListener('load', function () {
    if (currentTime - lastRefreshTime > 10000) {
        skw = 10 + skw;
        localStorage.setItem('countMoney', JSON.stringify(skw));
        countMoney.innerText = `${skw}`;
        butCountMoney.append(countMoney, countTextMoney);
        document.body.append(butCountMoney);
    }else {
        countMoney.innerText = `${skw}`;
    butCountMoney.append(countMoney, countTextMoney);
    document.body.append(butCountMoney)
    }
    localStorage.setItem('lastRefresh', currentTime.toString());
    localStorage.setItem('countMoney', skw.toString());
})
