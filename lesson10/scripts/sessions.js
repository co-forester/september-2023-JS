let sesSions = JSON.parse(localStorage.getItem('sessions')) || [];
console.log(sesSions)
for (const session of sesSions) {
    let titra = document.createElement('div');
    titra.classList.add('titra');
    let p = document.createElement('p');
    p.innerText = session;
    titra.appendChild(p);
    document.body.appendChild(titra);
}