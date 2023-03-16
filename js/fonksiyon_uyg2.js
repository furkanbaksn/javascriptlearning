// function kelimeYazdir(kelime , adet){
//     for(let i=0 ; i <= adet ;i++){
//         console.log(kelime)
//     }                                                  //kaç adet isteniyorsa o kadar kelime yazdırma
// }
// kelimeYazdir("hello world" , 5)

// function hesap(taban , yükseklik){
//     let alan = taban * yükseklik;
//     let cevre = (taban+yükseklik)*2
//     return `alan : ${alan} ve çevre: ${cevre}`   -----> Dikdörtgen alan ve çevre hesaplama
// }   

// let sonuc = hesap(10,5);
// sonuc = hesap(10,7);
// console.log(sonuc)


// function oyun(){
//     let random = Math.random();
//     if(random < 0.5){
//         console.log("yazı")
//     }else{
//         console.log("tura")          yazı tura oyunu
//     }
//     console.log(random)
// }

// oyun()


// function tambolenler(sayi){
//     let sayilar = [];

//     for(let i=2 ; i < sayi ; i++){
//         if(sayi % i == 0){
//             sayilar.push(i);             tam bölenleri hesaplama
//         }
//     }

//     return sayilar;

// }


// console.log(tambolenler(10))
// console.log(tambolenler(23525151))
// console.log(tambolenler(5222))
// console.log(tambolenler(11))



function toplam() {
    let sonuc = 0 ;

    for(let i=0 ; i < arguments.length ; i++){
        sonuc += arguments[i];
    }

    return sonuc;
}
console.log(toplam(2,7,95))