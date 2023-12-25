// 1. - Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об'єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з'явився блок
// з вашим об'єктом
console.log(document.forms);
let form = document.forms[0];
// console.log(form);
let users = [];
let f1But = document.querySelector('#f1But');
f1But.disabled = true;
form.userName.onclick = function (ev) {
    ev.preventDefault();
    f1But.disabled = !f1But.disabled
}
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
    form.reset();
    f1But.disabled = !f1But.disabled
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
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname =surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}
let clients = [
    new Client(100, 'Vivien', 'Hilton', 'druyten89frtj76@gmail.com', 380636354737,
        ['shirt', 'skirt', 'coat', 'cap']),
    new Client(99, 'Valya', 'Rubbiny', 'hts56@gmail.com', 380684544737,
        ['boll', 'skirt', 'coat', 'cap', 'cup']),
    new Client(98, 'Zinaida', 'Pilotca', 'plotcina23hy@gmail.com', 380664541287,
        ['shirt', 'skirt', 'coat']),
    new Client(97, 'Zhanna', 'Navhotta', 'ftf5ffg@gmail.com', 380634772587,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(96, 'Vasya', 'Fistonov', 'fistin45hj@gmail.com', 38068887287,
        ['shirt', 'skirt', 'cap', 'cup', 'milk']),
    new Client(95, 'Ludmila', 'Giltova', 'ddbbggiillg@gmail.com', 380677770287,
        ['shirt', 'skirt', 'cup', 'milk']),
    new Client(94, 'Fedor', 'Navoyta', 'fednav4499aya@gmail.com', 380664772466,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(93, 'Oksana', 'Kolesnyk', 'oksi474kol@gmail.com', 380639819998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(92, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(91, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(1156, 'Vivien', 'Hilton', 'druyten89frtj76@gmail.com', 380636354737,
        ['shirt', 'skirt', 'coat', 'cap']),
    new Client(90, 'Valya', 'Rubbiny', 'hts56@gmail.com', 380684544737,
        ['boll', 'skirt', 'coat', 'cap', 'cup']),
    new Client(89, 'Zinaida', 'Pilotca', 'plotcina23hy@gmail.com', 380664541287,
        ['shirt', 'skirt', 'coat']),
    new Client(88, 'Zhanna', 'Navhotta', 'ftf5ffg@gmail.com', 380634772587,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(87, 'Vasya', 'Fistonov', 'fistin45hj@gmail.com', 38068887287,
        ['shirt', 'skirt', 'cap', 'cup', 'milk']),
    new Client(86, 'Ludmila', 'Giltova', 'ddbbggiillg@gmail.com', 380677770287,
        ['shirt', 'skirt', 'cup', 'milk']),
    new Client(85, 'Fedor', 'Navoyta', 'fednav4499aya@gmail.com', 380664772466,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(84, 'Oksana', 'Kolesnyk', 'oksi474kol@gmail.com', 380639819998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(83, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(82, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(1156, 'Vivien', 'Hilton', 'druyten89frtj76@gmail.com', 380636354737,
        ['shirt', 'skirt', 'coat', 'cap']),
    new Client(81, 'Valya', 'Rubbiny', 'hts56@gmail.com', 380684544737,
        ['boll', 'skirt', 'coat', 'cap', 'cup']),
    new Client(80, 'Zinaida', 'Pilotca', 'plotcina23hy@gmail.com', 380664541287,
        ['shirt', 'skirt', 'coat']),
    new Client(79, 'Zhanna', 'Navhotta', 'ftf5ffg@gmail.com', 380634772587,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(78, 'Vasya', 'Fistonov', 'fistin45hj@gmail.com', 38068887287,
        ['shirt', 'skirt', 'cap', 'cup', 'milk']),
    new Client(77, 'Ludmila', 'Giltova', 'ddbbggiillg@gmail.com', 380677770287,
        ['shirt', 'skirt', 'cup', 'milk']),
    new Client(76, 'Fedor', 'Navoyta', 'fednav4499aya@gmail.com', 380664772466,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(75, 'Oksana', 'Kolesnyk', 'oksi474kol@gmail.com', 380639819998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(74, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(73, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(1156, 'Vivien', 'Hilton', 'druyten89frtj76@gmail.com', 380636354737,
        ['shirt', 'skirt', 'coat', 'cap']),
    new Client(72, 'Valya', 'Rubbiny', 'hts56@gmail.com', 380684544737,
        ['boll', 'skirt', 'coat', 'cap', 'cup']),
    new Client(71, 'Zinaida', 'Pilotca', 'plotcina23hy@gmail.com', 380664541287,
        ['shirt', 'skirt', 'coat']),
    new Client(70, 'Zhanna', 'Navhotta', 'ftf5ffg@gmail.com', 380634772587,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(69, 'Vasya', 'Fistonov', 'fistin45hj@gmail.com', 38068887287,
        ['shirt', 'skirt', 'cap', 'cup', 'milk']),
    new Client(68, 'Ludmila', 'Giltova', 'ddbbggiillg@gmail.com', 380677770287,
        ['shirt', 'skirt', 'cup', 'milk']),
    new Client(67, 'Fedor', 'Navoyta', 'fednav4499aya@gmail.com', 380664772466,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(66, 'Oksana', 'Kolesnyk', 'oksi474kol@gmail.com', 380639819998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(65, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(64, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(1156, 'Vivien', 'Hilton', 'druyten89frtj76@gmail.com', 380636354737,
        ['shirt', 'skirt', 'coat', 'cap']),
    new Client(63, 'Valya', 'Rubbiny', 'hts56@gmail.com', 380684544737,
        ['boll', 'skirt', 'coat', 'cap', 'cup']),
    new Client(62, 'Zinaida', 'Pilotca', 'plotcina23hy@gmail.com', 380664541287,
        ['shirt', 'skirt', 'coat']),
    new Client(61, 'Zhanna', 'Navhotta', 'ftf5ffg@gmail.com', 380634772587,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(60, 'Vasya', 'Fistonov', 'fistin45hj@gmail.com', 38068887287,
        ['shirt', 'skirt', 'cap', 'cup', 'milk']),
    new Client(59, 'Ludmila', 'Giltova', 'ddbbggiillg@gmail.com', 380677770287,
        ['shirt', 'skirt', 'cup', 'milk']),
    new Client(58, 'Fedor', 'Navoyta', 'fednav4499aya@gmail.com', 380664772466,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(57, 'Oksana', 'Kolesnyk', 'oksi474kol@gmail.com', 380639819998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(56, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(55, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(1156, 'Vivien', 'Hilton', 'druyten89frtj76@gmail.com', 380636354737,
        ['shirt', 'skirt', 'coat', 'cap']),
    new Client(54, 'Valya', 'Rubbiny', 'hts56@gmail.com', 380684544737,
        ['boll', 'skirt', 'coat', 'cap', 'cup']),
    new Client(53, 'Zinaida', 'Pilotca', 'plotcina23hy@gmail.com', 380664541287,
        ['shirt', 'skirt', 'coat']),
    new Client(52, 'Zhanna', 'Navhotta', 'ftf5ffg@gmail.com', 380634772587,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(51, 'Vasya', 'Fistonov', 'fistin45hj@gmail.com', 38068887287,
        ['shirt', 'skirt', 'cap', 'cup', 'milk']),
    new Client(50, 'Ludmila', 'Giltova', 'ddbbggiillg@gmail.com', 380677770287,
        ['shirt', 'skirt', 'cup', 'milk']),
    new Client(49, 'Fedor', 'Navoyta', 'fednav4499aya@gmail.com', 380664772466,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(48, 'Oksana', 'Kolesnyk', 'oksi474kol@gmail.com', 380639819998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(47, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(46, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(1156, 'Vivien', 'Hilton', 'druyten89frtj76@gmail.com', 380636354737,
        ['shirt', 'skirt', 'coat', 'cap']),
    new Client(45, 'Valya', 'Rubbiny', 'hts56@gmail.com', 380684544737,
        ['boll', 'skirt', 'coat', 'cap', 'cup']),
    new Client(44, 'Zinaida', 'Pilotca', 'plotcina23hy@gmail.com', 380664541287,
        ['shirt', 'skirt', 'coat']),
    new Client(43, 'Zhanna', 'Navhotta', 'ftf5ffg@gmail.com', 380634772587,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(42, 'Vasya', 'Fistonov', 'fistin45hj@gmail.com', 38068887287,
        ['shirt', 'skirt', 'cap', 'cup', 'milk']),
    new Client(41, 'Ludmila', 'Giltova', 'ddbbggiillg@gmail.com', 380677770287,
        ['shirt', 'skirt', 'cup', 'milk']),
    new Client(40, 'Fedor', 'Navoyta', 'fednav4499aya@gmail.com', 380664772466,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(39, 'Oksana', 'Kolesnyk', 'oksi474kol@gmail.com', 380639819998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(38, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(37, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(1156, 'Vivien', 'Hilton', 'druyten89frtj76@gmail.com', 380636354737,
        ['shirt', 'skirt', 'coat', 'cap']),
    new Client(36, 'Valya', 'Rubbiny', 'hts56@gmail.com', 380684544737,
        ['boll', 'skirt', 'coat', 'cap', 'cup']),
    new Client(35, 'Zinaida', 'Pilotca', 'plotcina23hy@gmail.com', 380664541287,
        ['shirt', 'skirt', 'coat']),
    new Client(34, 'Zhanna', 'Navhotta', 'ftf5ffg@gmail.com', 380634772587,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(33, 'Vasya', 'Fistonov', 'fistin45hj@gmail.com', 38068887287,
        ['shirt', 'skirt', 'cap', 'cup', 'milk']),
    new Client(32, 'Ludmila', 'Giltova', 'ddbbggiillg@gmail.com', 380677770287,
        ['shirt', 'skirt', 'cup', 'milk']),
    new Client(31, 'Fedor', 'Navoyta', 'fednav4499aya@gmail.com', 380664772466,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(30, 'Oksana', 'Kolesnyk', 'oksi474kol@gmail.com', 380639819998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(29, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(28, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(1156, 'Vivien', 'Hilton', 'druyten89frtj76@gmail.com', 380636354737,
        ['shirt', 'skirt', 'coat', 'cap']),
    new Client(27, 'Valya', 'Rubbiny', 'hts56@gmail.com', 380684544737,
        ['boll', 'skirt', 'coat', 'cap', 'cup']),
    new Client(26, 'Zinaida', 'Pilotca', 'plotcina23hy@gmail.com', 380664541287,
        ['shirt', 'skirt', 'coat']),
    new Client(25, 'Zhanna', 'Navhotta', 'ftf5ffg@gmail.com', 380634772587,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(24, 'Vasya', 'Fistonov', 'fistin45hj@gmail.com', 38068887287,
        ['shirt', 'skirt', 'cap', 'cup', 'milk']),
    new Client(23, 'Ludmila', 'Giltova', 'ddbbggiillg@gmail.com', 380677770287,
        ['shirt', 'skirt', 'cup', 'milk']),
    new Client(22, 'Fedor', 'Navoyta', 'fednav4499aya@gmail.com', 380664772466,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(21, 'Oksana', 'Kolesnyk', 'oksi474kol@gmail.com', 380639819998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(20, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(19, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(1156, 'Vivien', 'Hilton', 'druyten89frtj76@gmail.com', 380636354737,
        ['shirt', 'skirt', 'coat', 'cap']),
    new Client(18, 'Valya', 'Rubbiny', 'hts56@gmail.com', 380684544737,
        ['boll', 'skirt', 'coat', 'cap', 'cup']),
    new Client(17, 'Zinaida', 'Pilotca', 'plotcina23hy@gmail.com', 380664541287,
        ['shirt', 'skirt', 'coat']),
    new Client(16, 'Zhanna', 'Navhotta', 'ftf5ffg@gmail.com', 380634772587,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(15, 'Vasya', 'Fistonov', 'fistin45hj@gmail.com', 38068887287,
        ['shirt', 'skirt', 'cap', 'cup', 'milk']),
    new Client(14, 'Ludmila', 'Giltova', 'ddbbggiillg@gmail.com', 380677770287,
        ['shirt', 'skirt', 'cup', 'milk']),
    new Client(13, 'Fedor', 'Navoyta', 'fednav4499aya@gmail.com', 380664772466,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(12, 'Oksana', 'Kolesnyk', 'oksi474kol@gmail.com', 380639819998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(11, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(10, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['coat', 'cap', 'cup', 'milk', 'salt', 'lemon'])
];

console.log(clients.length);

let box = document.getElementById('box');
let clientsBoxX = document.getElementById('clientsBoxX');
let clientsBox = document.createElement('div')
// box.append( clientsBoxX);
clientsBoxX.append( clientsBox);


let numberPage = JSON.parse(sessionStorage.getItem('numberPage')) || 1;
let a;
let b;

let prev = document.getElementById('prev');
if(numberPage === 1){prev.disabled = true}
prev.addEventListener('click', function () {
    if (numberPage > 1){
        numberPage = numberPage - 1;
        foo666(clients)
    }
    next.disabled = false
    if(numberPage === 1){
        prev.disabled = true;
    }
});

let next = document.getElementById('next');
next.addEventListener('click', function () {
    if (numberPage < clients.length / 10){
    numberPage = numberPage + 1;
    foo666(clients)
    }
    prev.disabled = false
    if(numberPage === 10){next.disabled = true}
});

let foo666  = function(arr){
    clientsBox.innerHTML = '';
    sessionStorage.setItem('numberPage', JSON.stringify(numberPage));
    b = numberPage*10;
    a = b - 10;
    let clienTs = [];
    for (let i = a; i < b; i++) {
        clienTs.push(arr[i]);
        console.log(clienTs)
    }
    for (let j = 0; j < 10; j++) {
        // const clienT = clienTs[j];
        let clientFile = document.createElement('div');
        clientFile.classList.add('clientFile');
        clientFile.innerHTML = `<h4>id-${clienTs[j].id} name-${clienTs[j].name} ${clienTs[j].email}</h4>`;
        clientsBox.appendChild(clientFile);
        clientsBoxX = clientsBox
    }
    console.log(numberPage)
}
// prev.onclick = function (){
//     alert(`!!!!!`);
//     location.reload()
// }





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
let form2 = document.forms[1];
f2.addEventListener('submit', function (e) {
    e.preventDefault();
    let age = this.age.value;
        console.log(age);
    if (age < 18) {
        alert('Вибачте, але Вам немає 18, вхід заборонено')
    } else {
        alert(`Age eligible entry permitted`)
    }
        form2.reset();
}
);

// 7. - *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість
// ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка,
//     з відповідним вмістом.
// (Додаткова частина для завдання)
let form5 = document.forms[2];
let but5 = document.getElementById('but5');
// but5.disabled = 'true';
form5.rows.onchange = function () {
    // ev.preventDefault();
    // but5.disabled = !but5.disabled
}
f5.addEventListener('submit', function (ev){
    ev.preventDefault();

    let element = this.element.value;
    let columns = this.columns.value;
    let rows = this.rows.value;
    let tablet = document.createElement('tablet');
    tablet. classList.add('tablet');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('div');
        tr.classList.add('tr');
        tablet.appendChild(tr);
        for (let j = 0; j < columns; j++) {
            let td = document.createElement('div');
            td.classList.add('td')
            tr.appendChild(td);
            td.innerText = `${element}`
        }

    }
    document.body.appendChild(tablet);
    // but5.disabled = !but5.disabled
        form5.reset();
}
);


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
