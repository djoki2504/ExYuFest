const datum = new Date(2026, 6, 18, 18 + 1, 0, 0); 
function Odbrojavanje() {
    const sad = new Date().getTime();
    const razlika = datum - sad;
    if (razlika <= 0) {
        document.getElementById("dani").textContent = 0;
        document.getElementById("sati").textContent = 0;
        document.getElementById("minuti").textContent = 0;
        document.getElementById("sekunde").textContent = 0;
        return;
    }
    const dani = Math.floor(razlika / (1000 * 60 * 60 * 24));
    const sati = Math.floor((razlika / (1000 * 60 * 60)) % 24);
    const minuti = Math.floor((razlika / (1000 * 60)) % 60);
    const sekunde = Math.floor((razlika / 1000) % 60);
    document.getElementById("dani").textContent = dani;
    document.getElementById("sati").textContent = sati;
    document.getElementById("minuti").textContent = minuti;
    document.getElementById("sekunde").textContent = sekunde;
    function tekstDani(dani) {
        if (dani % 100 >= 11 && dani % 100 <= 14) return "Dana";
        if (dani % 10 === 1) return "Dan";
        if (dani % 10 >= 2 && dani % 10 <= 4) return "Dana";
        return "Dana";
    }
    function tekstSati(sati) {
        if (sati % 100 >= 11 && sati % 100 <= 14) return "Sati";
        if (sati % 10 === 1) return "Sat";
        if (sati % 10 >= 2 && sati % 10 <= 4) return "Sata";
        return "Sati";
    }
    function tekstMinuti(minuti) {
        if (minuti % 100 >= 11 && minuti % 100 <= 14) return "Minuta";
        if (minuti % 10 === 1) return "Minut";
        if (minuti % 10 >= 2 && minuti % 10 <= 4) return "Minute";
        return "Minuta";
    }
    function tekstSekunde(sekunde) {
        if (sekunde % 100 >= 11 && sekunde % 100 <= 14) return "Sekundi";
        if (sekunde % 10 === 1) return "Sekunda";
        if (sekunde % 10 >= 2 && sekunde % 10 <= 4) return "Sekunde";
        return "Sekundi";
    }
    document.getElementById("dani").nextElementSibling.textContent = tekstDani(dani);
    document.getElementById("sati").nextElementSibling.textContent = tekstSati(sati);
    document.getElementById("minuti").nextElementSibling.textContent = tekstMinuti(minuti);
    document.getElementById("sekunde").nextElementSibling.textContent = tekstSekunde(sekunde);
} 
setInterval(Odbrojavanje, 1000);
Odbrojavanje();
$(document).ready(function () {
    $("#dugacak-tekst").hide();
    $("#prikazi-vise").click(function () {
        $("#dugacak-tekst").slideDown(400);
        $("#prikazi-vise").hide();
    });
    $("#prikazi-manje").click(function () {
        $("#dugacak-tekst").slideUp(400, function () {
            $("#prikazi-vise").show();
        });
    });
});