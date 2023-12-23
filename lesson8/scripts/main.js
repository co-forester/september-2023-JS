// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
 function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname =surname;
    this.email = email;
    this.phone = phone;
 }


// створити пустий масив, наповнити його 10 об'єктами new User(....)
 let users = [
     new User(10, 'Alla', 'Zavorotnuk', 'zhizel71@ukr.net', 380966774511),
     new User(9, 'Zheka', 'Ruffin', 'zheka72@ukr.net', 380966249978),
     new User(8, 'Margo', 'Miroshnichenco', 'miroshnichenco73@ukr.net', 380635467541),
     new User(7, 'Sergio', 'Kungurov', 'kungurovka71@ukr.net', 380966774511),
     new User(6, 'Luda', 'Kvachova', 'kvach73@ukr.net', 380933770912),
     new User(5, 'Natali', 'Scrjabina', 'scrjbina73@ukr.net', 380956784321),
     new User(4, 'Aleks', 'Kravchenco', 'pioner79aleks@ukr.net', 380985554322),
     new User(3, 'Illya', 'Luk', 'luk83illa@ukr.net', 380966677789),
     new User(2, 'Anatolii', 'Bureev', 'buran79tolya@ukr.net', 380636457898),
     new User(1, 'Dmitrii', 'Kolesnyk', 'kolesnyk72dima@ukr.net', 380966774511)
];
 console.log(users);
// - Взяти масив з User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(value => value.id%2 === 0));
// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((u1, u2) =>{return u1.id-u2.id}));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
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
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(1156, 'Vivien', 'Hilton', 'druyten89frtj76@gmail.com', 380636354737,
    ['shirt', 'skirt', 'coat', 'cap']),
    new Client(1234, 'Valya', 'Rubbiny', 'hts56@gmail.com', 380684544737,
    ['boll', 'skirt', 'coat', 'cap', 'cup']),
    new Client(10000004, 'Zinaida', 'Pilotca', 'plotcina23hy@gmail.com', 380664541287,
    ['shirt', 'skirt', 'coat']),
    new Client(1437, 'Zhanna', 'Navhotta', 'ftf5ffg@gmail.com', 380634772587,
    ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(1599, 'Vasya', 'Fistonov', 'fistin45hj@gmail.com', 38068887287,
    ['shirt', 'skirt', 'cap', 'cup', 'milk']),
    new Client(16450, 'Ludmila', 'Giltova', 'ddbbggiillg@gmail.com', 380677770287,
    ['shirt', 'skirt', 'cup', 'milk']),
    new Client(1711, 'Fedor', 'Navoyta', 'fednav4499aya@gmail.com', 380664772466,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk']),
    new Client(18321, 'Oksana', 'Kolesnyk', 'oksi474kol@gmail.com', 380639819998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(19432, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['shirt', 'skirt', 'coat', 'cap', 'cup', 'milk', 'salt', 'lemon']),
    new Client(2003, 'Jan', 'Kolesnyk', 'jann67kol@gmail.com', 380638919998,
        ['coat', 'cap', 'cup', 'milk', 'salt', 'lemon'])
];
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((c1, c2) => {return c1.order.length - c2.order.length}));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, producer, speedMax, year, engine) {
    this.model = model;
    this.producer = producer;
    this.speedMax = speedMax;
    this.year = year;
    this.engine = engine;
    this.drive = function (){
        return `їдемо зі швидкістю ${this.speedMax} на годину`
    };//-  виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.info = function () {
        return `model: ${this.model}, producer: ${this.producer}, 
        speedMax: ${this.speedMax}, year: ${this.year}, engine: ${this.engine}`
    };// - виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.increaseMaxSpeed = function (newSpeed){
        return this.speedMax =  this.speedMax + newSpeed
    };// -  підвищує значення максимальної швидкості на значення newSpeed
    this.changeYear = function (newValue){
        return this.year = newValue
    };//  - змінює рік випуску на значення newValue
    this.addDriver = function (driver){
        return this.driver = driver
    };// - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
}
let car = new Car('Golf', 'Volkswagen', 245,2020, 1.6);
let driver1 = {
    age: 81,
    experience: 66,
    name: 'Joe',
    surname: 'Biden'
};
console.log(car);
console.log(car.drive());
console.log(car.info());
car.addDriver(driver1);
car.changeYear(2019);
car.increaseMaxSpeed(15);
console.log(car);
console.log('************************')
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class CarNN {
    constructor(model, producer, speedMax, year, engine) {
        this.model = model;
        this.producer = producer;
        this.speedMax = speedMax;
        this.year = year;
        this.engine = engine;
    }
    drive(){
        return console.log(`Їдемо зі швидкістю ${this.speedMax} на годину`);
    };//  - виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    info() {
        return console.log(`model: ${this.model}, producer: ${this.producer}, 
        speedMax: ${this.speedMax}, year: ${this.year}, engine: ${this.engine}`)
    };// - виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    increaseMaxSpeed(newSpeed){
        return this.speedMax =  this.speedMax + newSpeed
    };//  -  підвищує значення максимальної швидкості на значення newSpeed
    changeYear(newValue){
        return this.year = newValue
    };//  - змінює рік випуску на значення newValue
    addDriver(driver){
        return this.driver = driver
    };// - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
}
let driver2 = {
    age: 51,
    experience: 33,
    name: 'Serhii',
    surname: 'Kolesnyk'
}
let carNN = new CarNN('Passat', 'Volkswagen', 265,2020, 2.0);
// console.log(carNN);
carNN.increaseMaxSpeed(100);
carNN.changeYear(2024);
carNN.addDriver(driver2);
carNN.info();
carNN.drive();
console.log('************************')

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize
    }
}
class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize
    }
}
// Створити масив з 10 попелюшок.
let cinderellas = [
    new Cinderella('Anna', 51, 39),
    new Cinderella('Violette', 13, 34),
    new Cinderella('Donna', 28, 39),
    new Cinderella('Zoe', 34, 39),
    new Cinderella('Vera', 15, 37),
    new Cinderella('Anna', 18, 40),
    new Cinderella('Janna', 17, 37),
    new Cinderella('Dasha', 33, 38),
    new Cinderella('Miranda', 16, 36),
    new Cinderella('Liza', 41, 37),
    new Cinderella('Margo', 16, 37)
];
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
const prince = new Prince('Arnold', 19, 37);
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellas) {
    if (cinderella.footSize ===  prince.shoeSize && prince.age > cinderella.age &&  cinderella.age > prince.age - 3){
        console.log(`*попелюшка  ${cinderella.name}  повинна бути з принцем!!!!!!*`)
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let res = cinderellas.find(function (cinderella){
    if (cinderella.footSize ===  prince.shoeSize && prince.age > cinderella.age &&  cinderella.age === prince.age - 3) return cinderella});
console.log(`попелюшка  ${res.name}  повинна бути з принцем`);

