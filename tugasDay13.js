function duplikat(str){
    let lower = str.toLowerCase() // jadi kecil
    let split = lower.split('') // jadi array
    let sort = split.sort() // jadi array berurut
    let output1 = []
    let output2 = []
    let output = 0
    for (i=0; i<sort.length; i++){
        if(output1.indexOf(sort[i]) == -1)
            output1.push(sort[i])
    }
    for (i=0; i<output1.length; i++){
        let newSplit = (lower.split(output1[i]).length - 1)
        output2.push(newSplit)
    }
    for (i=0; i<output2.length; i++){
        if (output2[i] > 1){
            output++
        }
    }
    return output
}

console.log(duplikat("aAAnNNNiiII"))