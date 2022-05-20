const sure = document.getElementById('sure')

let saniye = 0,
    dakika = 0,
    saat = 0;

function bak() {
    if (saniye < 59) saniye = saniye + 1;
    else {
        saniye = 0;
        if (dakika < 59) dakika = dakika + 1;
        else {
            dakika = 0;
            saat = saat + 1;
        }
    }
    $("#sure").html(saat + " : " + dakika + " : " + saniye);
}
$(document).ready(function() {
    $("#sure").html("0 : 0 : 0");
    setInterval(bak, 1000);
});