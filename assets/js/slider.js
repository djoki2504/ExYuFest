 const izvodjaci = [
     { ime: "Azra", slika: "5", vreme: "18:00" },
     { ime: "EKV", slika: "4", vreme: "18:00" },
     { ime: "Atomsko Sklonište", slika: "6", vreme: "19:00" },
     { ime: "Bijelo Dugme", slika: "1", vreme: "19:00" },
     { ime: "Crvena Jabuka", slika: "20", vreme: "20:00"},
     { ime: "Indexi", slika: "7", vreme: "20:00" },
     { ime: "Partibrejkersi", slika: "8", vreme: "21:00" },
     { ime: "Riblja Čorba", slika: "2", vreme: "22:00" },
     { ime: "Parni Valjak", slika: "9", vreme: "23:00" },
     { ime: "Prljavo Kazalište", slika: "3", vreme: "23:00" },
     { ime: "Bajaga i Instruktori", slika: "10", vreme: "00:00" },
     { ime: "Idoli", slika: "11", vreme: "00:00" },
     { ime: "YU Grupa", slika: "12", vreme: "01:00" },
     { ime: "Galija", slika: "13", vreme: "01:00" },
     { ime: "Divlje Jagode", slika: "14", vreme: "02:00" },
     { ime: "Zabranjeno Pušenje", slika: "15", vreme: "02:00" },
     { ime: "Električni Orgazam", slika: "16", vreme: "03:00" },
     { ime: "Generacija 5", slika: "17", vreme: "03:00" },
     { ime: "Piloti", slika: "18", vreme: "04:00" },
     { ime: "Kerber", slika: "19", vreme: "04:00" }
 ];
const animacija = document.getElementById("slajder-animacija");
function napraviKarticu(izv) {
    const kartica = document.createElement("div");
    kartica.className = "ram-izvodjaci";
    kartica.innerHTML = `<img src="assets/img/g${izv.slika}.jpg" alt="${izv.ime}"><p>${izv.ime}</p>`;
    return kartica;
}
izvodjaci.forEach(i => animacija.appendChild(napraviKarticu(i)));
izvodjaci.forEach(i => animacija.appendChild(napraviKarticu(i)));
let brzina = 1.5; 
let pozicija = 0;
function animate() {
    pozicija -= brzina;
    if (pozicija <= -animacija.scrollWidth / 2) {
        pozicija = 0;
    }
    animacija.style.transform = `translateX(${pozicija}px)`;
    requestAnimationFrame(animate);
}
animate();
izvodjaci.forEach(i => {
    const div = document.createElement("div");
    div.className = "nastup";
    div.innerHTML = `
        <strong>${i.ime}</strong>
        <span class="linija"></span>
        <span>${i.vreme}</span>
    `;
    nastupi.appendChild(div);
});

