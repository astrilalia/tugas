var arrProduct = [
    {id: 1502202000104, kategori: "Fast Food", nama: "Indomie", harga: 3500, stock: 10},
    {id: 1502202001104, kategori: "Elektronik", nama: "Laptop", harga: 5400000, stock: 7},
    {id: 1502202002104, kategori: "Pakaian", nama: "Sweater", harga: 750000, stock: 35},
    {id: 1502202003104, kategori: "Buah", nama: "Jeruk", harga: 15000, stock: 57},
]

var arrCategory = ["All", "Fast Food", "Elektronik", "Pakaian", "Buah"]

// untuk nunjukin pilihan kategori
var showCategory = () => {
    var listKategori = arrCategory.map((element)=>{
        return(
            `
                <option value = "${element}">${element}</option>
            `
        )
    })
    document.getElementById("categoryInput").innerHTML = listKategori.join('')
    document.getElementById("categoryFilter").innerHTML = listKategori.join('')
}
showCategory()

// untuk nunjukin tabel data
var showMenu = (index) => {
    var listMenu = arrProduct.map((elem, i)=>{
        if(elem.id !== index){
        return(
                `
                <tr>
                <td>${elem.id}</td>
                <td>${elem.nama}</td>
                <td>${elem.kategori}</td>
                <td>${elem.harga.toLocaleString('id-ID')}</td>
                <td>${elem.stock}</td>
                <td><input type="button" value = "Add" onclick="addCart(${elem.id})"></td>
                <td><input type="button" value = "Delete" onclick="deleteData(${elem.id})"></td>
                <td><input type="button" value = "Edit" onclick="editData(${elem.id})"></td>
                </tr>
                `
        )}
        return(
            `
                <tr>
                    <td>${elem.id}</td>
                    <td><input type="text" value="${elem.nama}" id="editNama"></td>
                    <td>${elem.kategori}</td>
                    <td><input type="number" value="${elem.harga}" id="editHarga"></td>
                    <td><input type="number" value="${elem.stock}" id="editStock"></td>
                    <td><input type="button" value="Cancel" onclick="showMenu()"></td>
                    <td><input type="button" value="Save" onclick="saveData(${i})"></td>
                </tr>
            `
        )
    })
    console.log(listMenu)
    document.getElementById("output").innerHTML = listMenu.join('')
}

// untuk tambah produk di input data
var addData = () => {
    var nama = document.getElementById('nama').value;
    var harga = document.getElementById('harga').value;
    var stock = document.getElementById('stock').value;
    var kategori = document.getElementById('categoryInput').value;
    var id = new Date()

    var newProduct = {
        id: id.getTime(),
        nama,
        harga,
        stock,
        kategori
    }
    arrProduct.push(newProduct)
    showMenu()
}

// untuk filter nama
var filterNama = () => {
    var name = document.getElementById('namaFilter').value

    var namaLower = name.toLowerCase()
    var output = arrProduct.filter((val)=> {
        var namaProdLower = val.nama.toLowerCase()
        return namaProdLower.includes(namaLower)
    })
    showFilterResult(output)
}

// untuk filter harga
var filterHarga = () => {
    var priceMin = document.getElementById('hargaLowest').value
    var priceMax = document.getElementById('hargaHighest').value
    if (!(priceMin === '' || priceMax === '')) {
        var output = arrProduct.filter((val) => {
            return val.harga >= priceMin && val.harga <= priceMax
        })
        showFilterResult(output)
    } else {
        filterHarga = arrProduct
    }
    return showFilterResult(filterHarga)
}

// untuk filter kategori
var filterKategori = () => {
    var category = document.getElementById('categoryFilter').value
    if (category === 'All'){
        return showFilterResult(arrProduct)
    } else {
        var output = arrProduct.filter((val) => {
            return val.kategori == category
        })
        showFilterResult(output)
    }
}

// untuk nunjukin perubahan filter yang ditemukan
var showFilterResult = (hasilFilter) => {
    var hasil = hasilFilter.map((val) => {
        return(
            `
            <tr>
            <td>${val.id}</td>
            <td>${val.nama}</td>
            <td>${val.kategori}</td>
            <td>${val.harga.toLocaleString('id-ID')}</td>
            <td>${val.stock}</td>
        </tr>
            `
        )
    })
    return document.getElementById('output').innerHTML = hasil.join('')
}

// untuk menghapus produk di Tabel Data
var deleteData = (idProduct) => {
    arrProduct = arrProduct.filter ((val) => {
        return val.id !== idProduct
    })
    showMenu(arrProduct)
}

// untuk edit produk di Tabel data
var editData = (id) => {
    showMenu(id)
}

// untuk menyimpan perubahan di Tabel Data
var saveData = (id) => {
    arrProduct[id].nama = document.getElementById('editNama').value
    arrProduct[id].harga = document.getElementById('editHarga').value
    arrProduct[id].stock = document.getElementById('editStock').value
    
    // Spread Operator = misahin array dalam array
    // arrProduct[id] = {
        //     ...arrProduct[id],
        //     nama: document.getElementById('editNama').value,
        //     harga: document.getElementById('editHarga').value,
        //     stock: document.getElementById('editStock').value,
        // }
        showMenu()
    }
    
// untuk menampilkan pilihan produk di Keranjang
var showCart = (arr) => {
    var listCart = arr.map((elem)=>{
    return(
        `
            <tr>
                <td>${elem.id}</td>
                <td>${elem.nama}</td>
                <td>${elem.kategori}</td>
                <td>${elem.harga.toLocaleString('id-ID')}</td>
                <td><input type="button" value = "Delete" onclick="deleteCart(${elem.id})"></td>
            </tr>
        `
    )
    })
document.getElementById("cart").innerHTML = listCart.join('')
}
showMenu()
        
// Untuk menambahkan produk dari Tabel Data ke Keranjang
var beliProduk = []
var addCart = (idProduct) => {
    for(i = 0; i<arrProduct.length; i++){
        if(arrProduct[i].id === idProduct) {
            beliProduk.push(arrProduct[i])
        }
    }
    showCart(beliProduk)
}

// Untuk menghapus produk di Keranjang
var deleteCart = (idProduct) => {
    arr = beliProduk.filter ((val) => {
        return val.id !== idProduct
    })
    showCart(arr)
}
