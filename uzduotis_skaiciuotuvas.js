"use-strict";

console.log("uzduotis_skaiciuotuvas");




document.querySelector("#sudetis").addEventListener("click", function() {
    let skaicius1;
    let skaicius2;

    //error kazkas negerai su tekstu
    //parse int dirba tiktai su sveikasiaisi skaiciais
    //parseFloat
    skaicius1 = parseInt(document.querySelector("#skaicius1").value);
    skaicius2 = parseInt(document.querySelector("#skaicius2").value);

    let rezultatas;
    rezultatas = skaicius1 + skaicius2;
    document.querySelector("#skaiciavimu_rezultatas").append("Sudėties rezultatas  "+ rezultatas);
});

document.querySelector("#atimtis").addEventListener("click", function() {
    let skaicius1;
    let skaicius2;

    skaicius1 = parseInt(document.querySelector("#skaicius1").value);
    skaicius2 = parseInt(document.querySelector("#skaicius2").value);

    let rezultatas;
    rezultatas = skaicius1 - skaicius2;
    document.querySelector("#skaiciavimu_rezultatas").append("Atimties rezultatas  "+ rezultatas);
});

document.querySelector("#dalyba").addEventListener("click", function() {
    let skaicius1;
    let skaicius2;

    skaicius1 = parseInt(document.querySelector("#skaicius1").value);
    skaicius2 = parseInt(document.querySelector("#skaicius2").value);

    let rezultatas;
    rezultatas = skaicius1 / skaicius2;
    document.querySelector("#skaiciavimu_rezultatas").append("Dalybos rezultatas  "+ rezultatas);
});

document.querySelector("#liekana").addEventListener("click", function() {
    let skaicius1;
    let skaicius2;

    skaicius1 = parseInt(document.querySelector("#skaicius1").value);
    skaicius2 = parseInt(document.querySelector("#skaicius2").value);

    let rezultatas;
    rezultatas = skaicius1 % skaicius2;
    document.querySelector("#skaiciavimu_rezultatas").append("Liekana  "+ rezultatas);
});

document.querySelector("#daugyba").addEventListener("click", function() {
    let skaicius1;
    let skaicius2;

    skaicius1 = parseInt(document.querySelector("#skaicius1").value);
    skaicius2 = parseInt(document.querySelector("#skaicius2").value);

    let rezultatas;
    rezultatas = skaicius1 * skaicius2;
    document.querySelector("#skaiciavimu_rezultatas").append("Daugybos rezultatas  "+ rezultatas);
});