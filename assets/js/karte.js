const karte = [
    { naziv: "Regular", opis: "Osnovna karta za ceo festival", cena: 2000 },
    { naziv: "Fan Pit", opis: "Najbolja mesta ispred bine", cena: 3500 },
    { naziv: "VIP", opis: "VIP zona + besplatno piće", cena: 6000 }
];
const pdvStopa = 0.2;
const taksa = 300;
const wrapper = document.querySelector(".karte-wrapper");
let stanjeKarata = karte.map(k => ({ naziv: k.naziv, cena: k.cena, kolicina: 0 }));
function prikaziKarte() {
    wrapper.innerHTML = "";
    karte.forEach((k, index) => {
        const div = document.createElement("div");
        div.className = "karta";
        div.innerHTML = `
            <h2>${k.naziv}</h2>
            <p>${k.opis}</p>
            <strong>${k.cena} RSD</strong>
            <div class="kolicina-div">
                <label for="kolicina-${index}">Količina:</label>
                <input type="number" id="kolicina-${index}" value="0" min="0" max="10" 
                onchange="izmeniKolicinu(${index}, this.value)"/>
            </div>
        `;
        wrapper.appendChild(div);
    });
}
function izmeniKolicinu(index, novaKolicina) {
    stanjeKarata[index].kolicina = parseInt(novaKolicina) || 0;
    prikaziRacun();
}
function prikaziRacun() {
    let ukupnoCena = 0;
    let ukupnoPDV = 0;
    let ukupnoPopust = 0;
    const nestoIzabrano = stanjeKarata.some(k => k.kolicina > 0);
    let racunHTML = "<h3>Račun</h3>";
    if (nestoIzabrano) {
        stanjeKarata.forEach(k => {
            if (k.kolicina > 0) {
                const subtotal = k.cena * k.kolicina;
                const pdv = subtotal * pdvStopa;
                const popust = k.kolicina >= 2 ? subtotal * 0.15 : 0;
                racunHTML += `
                    <p>
                        ${k.naziv}: ${k.kolicina} x ${k.cena} RSD<br>
                        Ukupno: ${subtotal.toFixed(2)} RSD, PDV: ${pdv.toFixed(2)} RSD, 
                        Popust: -${popust.toFixed(2)} RSD
                    </p>
                `;
                ukupnoCena += subtotal;
                ukupnoPDV += pdv;
                ukupnoPopust += popust;
            }
        });
        const ukupno = ukupnoCena + ukupnoPDV + taksa - ukupnoPopust;
        racunHTML += `
            <hr>
            <p>Servisna taksa: ${taksa} RSD</p>
            <h4>Ukupno za sve karte: ${ukupno.toFixed(2)} RSD</h4>
            <div class="email-div">
                <label for="email">Unesi email za potvrdu kupovine:</label><br>
                <input type="email" id="email" placeholder="tvojemail@primer.com" required/>
                <button onclick="posaljiRacun()">Kupi kartu</button>
                <p id="kupovina"></p>
            </div>
        `;
    }
    else {
        racunHTML += `<p>Ukupno: 0 RSD</p>`;
    }
    document.getElementById("racun").innerHTML = racunHTML;
}
function posaljiRacun() {
    const emailInput = document.getElementById("email");
    const poruka = document.getElementById("kupovina");
    const email = emailInput.value.trim();
    poruka.textContent = "";
    emailInput.classList.remove("ispravno", "neispravno");
    if (!email || !validateEmail(email)) {
        poruka.textContent = "Molimo unesite validnu email adresu.";
        poruka.style.color = "#f44336";
        emailInput.classList.add("neispravno");
        return;
    }
    poruka.textContent = "Uspešna kupovina! Račun će biti poslat na vaš email. Plaćanje se vrši na blagajni.";
    poruka.style.color = "#4caf50";
    emailInput.classList.add("ispravno");
}
function validateEmail(email) {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
}
prikaziKarte();
prikaziRacun(); 
