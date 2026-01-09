document.getElementById("dugme-poslaji").addEventListener("click", function () {
    const ime = document.getElementById("ime");
    const email = document.getElementById("email");
    const poruka = document.getElementById("poruka");
    const slazemSe = document.getElementById("slazemse");
    let validno = true;
    const imeRegex = /^[A-Za-zČĆŽŠĐčćžšđ]{2,}\s[A-Za-zČĆŽŠĐčćžšđ]{2,}$/;
    if (!imeRegex.test(ime.value.trim())) {
        prikaziGresku(
            ime,
            "greska-ime",
            "Unesi ime i prezime sa tačno dve reči"
        );
        validno = false;
    } else {
        prikaziUspeh(ime, "greska-ime");
    }
    if (!validateEmail(email.value.trim())) {
        prikaziGresku(email, "greska-email", "Unesi validnu email adresu");
        validno = false;
    } else {
        prikaziUspeh(email, "greska-email");
    }
    const duzinaPoruke = poruka.value.trim().length;
    if (duzinaPoruke < 10 || duzinaPoruke > 300) {
        prikaziGresku(
            poruka,
            "greska-poruka",
            "Poruka mora imati između 10 i 300 karaktera"
        );
        validno = false;
    } else {
        prikaziUspeh(poruka, "greska-poruka");
    }
    if (!slazemSe.checked) {
        prikaziGresku(slazemSe, "greska-slazemse", "Morate se složiti sa Politikom privatnosti");
        validno = false;
    } else {
        prikaziUspeh(slazemSe, "greska-slazemse");
    }
    if (validno) {
        document.getElementById("forma-poruka").textContent =
            "Uspešno ste poslali poruku!";
        [ime, email, poruka].forEach(polje => {
            polje.value = "";
            polje.classList.remove("ispravno", "neispravno");
            slazemSe.checked = false;
        });
        ["greska-ime", "greska-email", "greska-poruka"].forEach(id => {
            document.getElementById(id).textContent = "";
        });
    } else {
        document.getElementById("forma-poruka").textContent = "";
    }
});
function prikaziGresku(input, idGreske, poruka) {
    input.classList.remove("ispravno");
    input.classList.add("neispravno");
    document.getElementById(idGreske).textContent = poruka;
}
function prikaziUspeh(input, idGreske) {
    input.classList.remove("neispravno");
    input.classList.add("ispravno");
    document.getElementById(idGreske).textContent = "";
}
function validateEmail(email) {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
}
