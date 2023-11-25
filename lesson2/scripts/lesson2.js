// - Нам дано масив друзів
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// Потрібно зробити перевірку якщо кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те,
// що це великий масив, в якому 3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// switch (friends) {
//     case friends:if (friends.length >= 3)
//         console.log('це великий масив, в якому 3 і більше елементи!');
//         break;
//     case friends:if (friends.length < 3)
//         console.log('це маленький масив, в якому менше 3-х елементів');
//         break;
//     default:
//         console.log('щось пішло не так????');
// }
// або
if (friends.length >= 3){alert('великий масив, в якому 3 і більше елементи!')}
else alert('маленький масив, в якому менше 3-х елементів');

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let num1 = +prompt('enter first number');
let num2 = +prompt('enter second number');
let num3 = +prompt('enter third number');
if(num1 >= num2 & num2 >= num3){alert(`average num2`)}
else if(num3 >= num2 & num2 >= num1){alert(`average num2`)}
     else if(num1 >= num3 & num3 >= num2){alert(`average num3`)}
          else if(num2 >= num3 & num3 >= num1){alert(`average num3`)}
               else if(num3 > num1 & num1 > num2){alert(`average num1`)}
                    else if(num2 > num1 & num1 > num3){alert(`average num1`)}
                         else alert('щось пішло не так????');
// або:
if((num1 >= num2 & num2 >= num3)||(num3 >= num2 & num2 >= num1)){alert(`average num2`)}
else if((num1 >= num3 & num3 >= num2)||(num2 >= num3 & num3 >= num1)){alert(`average num3`)}
else if((num3 > num1 & num1 > num2)||(num2 > num1 & num1 > num3)){alert(`average num1`)}
else alert('щось пішло не так????');
// або:


// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
let a = + prompt('введить число');
let b = + prompt('введить число');
let result = a + b < 4 ? console.log ('Мало') : console.log ('Багато');

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
const numberYour = + prompt('введить число');
if(typeof numberYour === "number" & numberYour < 100 & numberYour > - 100){
  if (numberYour > 0){console.log('Ваше число позитивне!')}
     else  if (numberYour < 0){console.log('Ваше число негативне!')}
}
    // {switch (numberYour) {
    //     case numberYour:
    //         if (numberYour > 0)
    //             console.log('Ваше число позитивне!');
    //         break;
    //     case numberYour:
    //         if (numberYour < 0)
    //             console.log('Ваше число негативне!');
    //         break;
    //     case numberYour:
    //         console.log('Ваше число дорівнює 0')
    //         break;
    // }}
    else console.log('не відповідає умовам????');

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = confirm('ви жинка?');
if (test){
    console.log('Вірно')}
else console.log('Неправильно');
// або:
!test? console.log ('Неправильно'):console.log ('Вірно');
// const test1 = confirm('Are you busy');
// test1? console.log ('Йдемо на річку'):console.log ('Нажаль');

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
const test2 = confirm('„Яка «офіційна» назва JavaScript?“');
if (test2 === 'ECMAScript'){
    console.log('«Правильно!»')}
else console.log('\«Не знаєте? ECMAScript!');


    // - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
const apartment= + prompt('введить номер квартири (від 1 до 48 включно)');
// apartment < 20? alert('your apartment is on the first entrance'):apartment < 48? alert('your apartment is on the second entrance'):alert('your apartment is on the third entrance');
apartment < 20? alert('№1'):apartment < 48? alert('№2'):alert('№3');


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО
let number = + prompt('введить числове значення до 12');
number === 10? alert('ВІРНО') : alert('НЕВІРНО');

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
alert("чи ми йдемо сьогодні в OKTEN на навчання?");
const t = + alert('Яка сьогодні температура?');
t < 22 & t>10 ? alert('ми йдемо ВЧИТИСЯ') : alert('сидимо вдома і вчимося ОНЛАЙН');

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення -
//     що число не вірне ... .
alert('Давайте пограємо в гру-вікторину!');
let num = alert('Введить число від -10 до 20');
switch (num) {
    case "1":alert('Ваш приз авто')
        break;
    case "2":alert('Ваш приз мото')
        break;
    case "3":alert('Ваш приз телефон')
        break;
    case "4":alert('Ваш приз цукерки')
        break;
    case "5":alert('ваш приз чоботи')
        break;
    default:
        console.log('число не вірне');
}