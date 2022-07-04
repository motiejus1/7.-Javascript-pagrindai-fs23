"use-strict";

document.querySelector("#palyginti").addEventListener("click", function(){
    let skaicius1;
    let skaicius2;
    let skaicius3;

    skaicius1 = parseInt(document.querySelector(".skaicius1").value);
    skaicius2 = parseInt(document.querySelector(".skaicius2").value);
    skaicius3 = parseInt(document.querySelector(".skaicius3").value);


    // ar visi skaiciai yra lygus
    // && - ir; || - arba
    if(skaicius1 == skaicius2 && skaicius1 == skaicius3 && skaicius3 == skaicius2) {
        document.querySelector("#palyginimo_rezultatas").value = "Visi skaiciai yra lygus";
    } else if(skaicius1 > skaicius2 && skaicius1 > skaicius3) {
        document.querySelector("#palyginimo_rezultatas").value = "Skaicius1 didziausias";

    } else if (skaicius2 > skaicius1 && skaicius2 > skaicius3) {
        document.querySelector("#palyginimo_rezultatas").value = "Skaicius2 didziausias";

    } else if(skaicius3 > skaicius1 && skaicius3 > skaicius2) {
        document.querySelector("#palyginimo_rezultatas").value = "Skaicius3 didziausias";

    }
    // jeigu skaicius1 yra daugiau uz skaicius2 ir skaicius1 > skaicius3, vadinasi skaicius1 didziausias
    // jeigu skaicius2 yra daugiau uz skaicius1 ir skaicius2 > skaicius3, vadinasi skaicius2 didziausias
    // jeigu skaicius3 yra daugiau uz skaicius1 ir skaicius3 > skaicius2, vadinasi skaicius3 didziausias






    // if(skaicius1 == skaicius2) {
    //     //jei norime isvesti i input, naudojame ne append, bet value
    //     document.querySelector("#palyginimo_rezultatas").value = "skaicius1 lygus skaicius2";
    // } else if(skaicius1 > skaicius2) {
    //     document.querySelector("#palyginimo_rezultatas").value = "skaicius1 daugiau nei skaicius2";
    // }
    // else{
    //     document.querySelector("#palyginimo_rezultatas").value = "skaicius1 maziau nei skaicius2";

    // }

    //jeigu skaicius1> skaicius2, i neaktyvu inpute isvedamew kad skaicius1 > skaicius2
    //kitu atveju skaicius2 yra didesnis
    //skaiciai lygus
})