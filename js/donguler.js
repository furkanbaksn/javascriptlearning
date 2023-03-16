// let toplam = 0 
// for(let i = 0; i<=10; i++) {
//     toplam += i
// }
// console.log(toplam)


let sayilar = [1,3,5,11,17,13]
toplam = 0
// // for(let i=0 ; i < sayilar.length ; i++){    //for döngüsünün 3 farklı kullanımı bu şekildedir.
//     toplam += sayilar[i]
// }
// for(i in sayilar){
//     toplam += sayilar[i]
// }

for(sayi of sayilar){
    toplam += sayi
}
console.log(toplam)


//objelerde kullanımı 

let user = {
    "name" : "Furkan Baksın",
    "username" : "achimenes",
    "password" : "1234",
    "email" : "info@frkn.com"
}
for(key in user){
    console.log(user[key])
}






