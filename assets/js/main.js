const meniStavke = ["Početna", "Izvodjači", "Karte", "Kontakt", "O autoru"];
const stranice = ["index", "izvodjaci", "karte", "kontakt", "oautoru"];
const meniji = document.querySelectorAll(".nav-meni");
let trenutnaStranica = window.location.pathname.split("/").pop();
meniji.forEach(meni => { 
    meniStavke.forEach((item, index) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const link = stranice[index] + ".html";
        a.textContent = item;
        a.href = link;
        if (link === trenutnaStranica) {
            a.classList.add("active");
        }
        li.appendChild(a);
        meni.appendChild(li);
    });
});
