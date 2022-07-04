"use-script";

// sudeti skaicius nuo 1 iki 100
//Ciklas - t.y pasikartojantis pasikartojantis veiksmas

//atvaziduoti skaicius 1 iki 100(sugeneruoti 100 divu)

//100 kartu pakartotu console.log komanda

//tiek kartu kiek mes nurodom
// ciklo kintamaji
//i - iterator - iteratorius
// 0 iki 99

//i= 0;
// 1
//2
//99

//100 kiekvienos iteracijos metu dideja po
// 101
//i >99
for(let i=1; i<99; i++) {
    console.log(i);
}

//kol tenkinama salyga
let skaitiklis = 1;
while(skaitiklis < 101) {
    console.log(skaitiklis); //4
    skaitiklis++; // 5
}

// sudeti skaicius nuo 1 iki 100

let suma = 0;

for(let i = 1; i<101; i++){
    suma += i;
    document.querySelector(".main").innerHTML += "<div>Labas</div>";
}

console.log(suma);


//foreach
//amzinas ciklas

// masyvas
// masyvas = vienodo tipo kintamuju rinkinys

let masyvas = [101,5,2,14,5,6,1,9,7,5,8,1,5,5,5,5,5,5,5,5,55,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5, 6];
// 6 elementai
//elemento vietos skaiciuojamos nuo 0
// 101 jo  eiles numeris yra 0
// 6 jo eiles numeris yra 5
// console.log(masyvas)

// noriu atvaizduoti elementa kurio numeris 3(14)

// console.log(masyvas[6]);

//kiek masyve yra elementu?
console.log(masyvas); // 32

//// sudeti visus skaicius esancius masyve

let masyvoSuma = 0;

for(let i=0; i<masyvas.length; i++) {
    //masyvas[0]
    // masyvas[1]
    // ... masyvas[31]
    masyvoSuma += masyvas[i];
}

console.log(masyvoSuma);
