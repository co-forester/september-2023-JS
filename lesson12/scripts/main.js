let counter = 1;
let promise = async ()=> {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log(counter, ' чекаємо 3 секунди');
            counter++;
            resolve(counter)
        }, 1000)
    })
        .then((counter1) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(counter1, 'чекаємо 2 секунди');
                    counter1 = counter1 + 2;
                    resolve(counter1)
                }, 3000)
            })
        })
        .then((counter2) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(counter2, 'чекаємо 10 секунд');
                    counter2 = counter2 * 2;
                    resolve(counter2)
                }, 2000)
            })
        })
        .then((counter3) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(counter3, 'чекаємо 2 секунди');
                    counter3 = counter3 + 7;
                    resolve(counter3)
                }, 10000);
            })
        }).then((counter4) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(counter4);
                    resolve(counter4)
                }, 2000);
            })
        })
}
void promise();

let i= 0;
while (i<6){
    run(i);
    i++
}
 function  run(i){
     setTimeout(()=>{
         console.log(i)
     }, 1000)
 }

 let j = 0;
while (j<6){
    setTimeout(()=>{
        console.log(j*10000 + j*10000)
    }, 1000);
    j++
}
const Users =async ()=> {
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json()
        })
            // .then(value => console.log (value))
        .then(users => {
            for (const user of users) {
                let divUser = document.createElement('div');
                let divId = document.createElement('div');
                let divName = document.createElement('div');
                let divUserName = document.createElement('div');
                let divCompany = document.createElement('div');
                let divCatchPhrase = document.createElement('div');
                let divNameCompany = document.createElement('div');
                let divBs = document.createElement('div');
                let divEmail = document.createElement('div');
                let divPhone = document.createElement('div');
                let divWebsite = document.createElement('div');
                let divAddress = document.createElement('div');
                let divGeo = document.createElement('div');
                let divLat = document.createElement('div');
                let divLng = document.createElement('div');
                let divZipcode = document.createElement('div');
                let divCity = document.createElement('div');
                let divStreet = document.createElement('div');
                let divSuite = document.createElement('div');
                divUser.classList.add('User');
                divId.classList.add('Id');
                divName.classList.add('Name');
                divUserName.classList.add('UserName');
                divCompany.classList.add('Company');
                divEmail.classList.add('Email');
                divPhone.classList.add('Phone');
                divWebsite.classList.add('Website');
                divAddress.classList.add('Address');
                divStreet.classList.add('Street');
                divGeo.classList.add('Geo');
                divLat.classList.add('Lat');
                divLng.classList.add('Ing');
                divAddress.innerText = `address:`;
                divCompany.innerText = `company:`;
                divCatchPhrase.innerText = `catchPhrase:`;
                divBs.innerText = `bs:`;
                divNameCompany.innerText = `name:`;
                divGeo.innerText = `Geo:`;
                divZipcode.innerText = `zipcode: ${user.address.zipcode}`
                divLng.innerText = `Ing: ${user.address.geo.lng}`;
                divLat.innerText = `Lat: ${user.address.geo.lat}`;
                divCity.innerText = `city: ${user.address.city}`;
                divStreet.innerText = `street: ${user.address.street}`;
                divSuite.innerText = `suite: ${user.address.suite}`;
                divId.innerText = `id: ${user.id}`;
                divName.innerText = `name: ${user.name}`;
                divUserName.innerText = `username: ${user.username}`;
                divEmail.innerText = `email: ${user.email}`;
                divPhone.innerText = `phone: ${user.phone}`;
                divWebsite.innerText = `website: ${user.website}`;
                divNameCompany.innerText = `name: ${user.company.name}`;
                divCatchPhrase.innerText = `catchPhrase: ${user.company.catchPhrase}`;
                divBs.innerText = `bs: ${user.company.bs}`;
                document.body.appendChild(divUser);
                divUser.append(divId, divName, divUserName, divAddress, divCompany, divEmail, divPhone, divWebsite);
                divAddress.append(divGeo, divZipcode, divCity, divStreet, divSuite);
                divGeo.append(divLat, divLng);
                divCompany.append(divNameCompany, divCatchPhrase, divBs)
            }
        })
}
Users();
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json()
    }).then(value => console.log (value))