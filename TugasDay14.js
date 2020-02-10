/*
Penduduk awal 1000 = n a
5 persen penduduk melahirkan = p 2/100 *n b
pendatang tiap tahun 50 = c
berapa tahun untuk sampe 1200 penduduk (t)
*/
const berapaTahun = (penduduk, persen, pendatang, target) => {
var tahun = 0
while (penduduk <= target) {
    penduduk += penduduk * (persen/100) + pendatang
    tahun++
}
return tahun
}

console.log(berapaTahun(1000,2,50,1200))
console.log(berapaTahun(1500,5,100,5000))
console.log(berapaTahun(1500000,2.5,10000,2000000))
