/* NOMOR 1
[1,4,-2,-9,5,-21]
[-1, -4, 2, 9, -5, 21]

*/
function angka(num){
    var arr = num.map((val) => {
        return val * -1
    })
    return arr
}

// console.log(angka([1,4,-2,-9,5,-21]))


// Belum selesai kak//
/* substring yang paling panjang
function dua parameter str
parameter pertama: 'treysut'
parameter kedua: 'rtelsit'
outputnya: test
*/

// const str = 'Purwadhika'

// console.log(str.substr(1,4))
function tugas(str1, str2, str1IdxAwal=0, str2IdxAwal=0){
    const output = [];

    for(let str1Idx = str1IdxAwal; str1Idx < str1.length; str1Idx++){
        const s1Char = str1[str1Idx];
        const str2Idx = str2.indexOf(s1Char, str2IdxAwal)

        let hasil = [];

        if (str2Idx !== -1){
            hasil.push(s1Char, ...tugas(str1, str2, str1IdxAwal+1, str2IdxAwal+1))
        }
        output.push(hasil);
    }

    const longest = findLongest(output);
    return longest.join('');    
}

function findLongest(arr){
    let longest=[];

    for (let candidate of arr){
        if(candidate.length > longest.length){
            longest=candidate;
        }
    }
    return longest;
}

console.log(tugas('treysut', 'rtelsit'))
console.log(tugas('aaaa', 'aa'))
console.log(tugas('AGGTAB', 'GXTXAYB'))
