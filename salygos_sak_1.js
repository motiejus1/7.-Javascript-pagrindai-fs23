"use-strict";

document.querySelector("#palyginti").addEventListener("click", function(){
    let skaicius1;
    let skaicius2;

    skaicius1 = parseInt(document.querySelector(".skaicius1").value);
    skaicius2 = parseInt(document.querySelector(".skaicius2").value);


    if(skaicius1 == skaicius2) {
        //jei norime isvesti i input, naudojame ne append, bet value
        document.querySelector("#palyginimo_rezultatas").value = "skaicius1 lygus skaicius2";
    } else if(skaicius1 > skaicius2) {
        document.querySelector("#palyginimo_rezultatas").value = "skaicius1 daugiau nei skaicius2";
    }
    else{
        document.querySelector("#palyginimo_rezultatas").value = "skaicius1 maziau nei skaicius2";

    }

    //jeigu skaicius1> skaicius2, i neaktyvu inpute isvedamew kad skaicius1 > skaicius2
    //kitu atveju skaicius2 yra didesnis
    //skaiciai lygus
})