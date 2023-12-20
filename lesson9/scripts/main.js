// - створити блок,
let div1 = document.createElement('div');
div1.innerText = 'shop';
// - додати йому класи wrap, collapse, alpha, beta
div1.classList.add('wrap');
div1.classList.add('collapse');
div1.classList.add('alpha');
div1.classList.add('beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div1.style.background ='#9CF18B80';
div1.style.color = '#F50505F9';
// - додати цей блок в body.
document.body.append(div1);
// - клонувати його повністю, та додати клон в body.
let div1Clon = div1.cloneNode(true);
document.body.append(div1Clon);
// - Є масив:
const menu =  ['Main','Products','About us','Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ul = document.createElement('ul');
ul.classList.add('ul');
document.body.appendChild(ul);
for (const item of menu) {
    const li = document.createElement('li');
    li.innerText = `${item}`
    ul.appendChild(li)
}
document.write('*************************');
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
 let cD = coursesAndDurationArray;
for (const item of cD) {
    let courD = document.createElement('div');
    courD.classList.add('coursMonth')
    courD.innerText = `${item.title} - ${item.monthDuration} months`;
    document.body.appendChild(courD)
}
document.write('==========================');

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const item of cD) {
    let courD = document.createElement('div');
    let courDH1 = document.createElement('h1');
    let courDP = document.createElement('p');
    courD.classList.add('item');
    courDH1.classList.add('heading');
    courDP.classList.add('description');
    courDH1.innerText = `${item.title}`;
    courDP.innerText = `${item.monthDuration} months`;
    courD.append(courDH1, courDP);
    document.body.appendChild(courD)
}

// ==========================

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
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
for (const simpson of simpsons) {
    const div = document.createElement('div');
    let img = document.createElement("img");
    let h1 = document.createElement('h1');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    h1.innerText = `${simpson.name}`;
    img.src = simpson.photo;
    img.alt = simpson.name;
    div.append(img);
    div.classList.add('member');
    h3.innerText = `${simpson.surname}`;
    h3.innerText = `${simpson.age} years`;
    p.innerText = `${simpson.info}`;
    div.append(h1, img, h3, p);
    document.body.appendChild(div)
}
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// --------------------------------------------------------
for (const cours  of coursesArray) {
    let courses = document.createElement('div');
    courses.classList.add('courses');

    let title = document.createElement('div');
    title.classList.add('title');
    let h31 = document.createElement('h3');
    h31.innerText = `${cours.title}`
    title.append(h31);

    let courses1 = document.createElement('div');
    courses1.classList.add('courses1');

    let monthDuration = document.createElement('div');
    monthDuration.classList.add('monthDuration');
    let h321 = document.createElement('h3');
    h321.innerText = `${cours.monthDuration} month`
    monthDuration.append(h321);

    let hourDuration = document.createElement('div');
    hourDuration.classList.add('hourDuration');
    let h322 = document.createElement('h3');
    h322.innerText = `${cours.hourDuration} hours`
    hourDuration.append(h322);

    let courses2 = document.createElement('div');
    courses2.classList.add('courses2');


    let modules = cours.modules
    for (const modul of modules) {
        let ul = document.createElement('ul');
        courses2.appendChild(ul);
        ul.classList.add('ul');
        let li = document.createElement('li');
        li.innerText = `${modul}`;
        courses.append(courses2);
        ul.appendChild(li);
    }
    courses1.appendChild(monthDuration);
    courses1.appendChild(hourDuration);
    courses.append(title);
    courses.append(courses1);
    document.body.appendChild(courses)
}
// ------------------