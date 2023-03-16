siparis1 = {
    "id" : 101,
    "tarih" : "31.12.22",
    "ödeme_sekli" : "kredi kartı",
    "kargo_adresi" : "kalkınma mah. Trabzon",
    "siparis_ürünler" : [
        {   "id" : 5,
            "ürün_adı" : "iphone 13 pro",
            "ürün_fiyatı" : 20000,
        },
        {
            "id" : 6, 
            "ürün_adı" : "iphone 13 ",
            "ürün_fiyatı" : 15000,
        },
    ]
}
siparis2 = {
    "id" : 102,
    "tarih" : "30.12.22",
    "ödeme_sekli" : "kredi kartı",
    "kargo_adresi" : "konaklar mah. Trabzon",
    "siparis_ürünler" : [
        {   "id" : 8,
            "ürün_adı" : "iphone 13 pro",
            "ürün_fiyatı" : 17000,
        },
        {
            "id" : 9, 
            "ürün_adı" : "iphone 13 ",
            "ürün_fiyatı" : 22000,
        },
    ]
}


siparis1_toplam = (siparis1.siparis_ürünler[0].ürün_fiyatı + siparis1.siparis_ürünler[1].ürün_fiyatı) * 1.18
siparis2_toplam = (siparis2.siparis_ürünler[0].ürün_fiyatı + siparis2.siparis_ürünler[1].ürün_fiyatı) * 1.18

console.log("Sipariş 1 tutarı : ", siparis1_toplam)
console.log("Sipariş 2 tutarı : " , siparis2_toplam)

let siparis = [siparis1_toplam , siparis2_toplam]

let toplam = 0

for(let i=0 ; i < siparis.length ; i++){
    toplam += siparis[i]
}
console.log("Hasılat :" , toplam)



