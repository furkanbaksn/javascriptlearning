// function selamlama(msg){
//     console.log(msg);
// }
// selamlama("selam");

function yasHesapla(dogumYili){
    return new Date().getFullYear() - dogumYili;
}
let yasAhmet = yasHesapla(1955);
console.log(yasAhmet)

function emekliligeKacYilKaldi(dogumYili , isim){
    let yas = yasHesapla(dogumYili);
    let kalan_sene = 65 - yas;

    if(kalan_sene > 0){
        console.log(`${isim} , emekli olmanıza ${kalan_sene} yıl kaldı.`)
    }else{
        console.log(`${isim} zaten emekli olmuşsunuz.`)
    }
}
emekliligeKacYilKaldi(1954 ,"furkan");