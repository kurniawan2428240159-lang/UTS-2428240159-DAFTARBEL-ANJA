let nama = document.getElementById("nama");
let barang = document.getElementById("barang");
let jumlah = document.getElementById("jumlah");

function simpan() {

    //jika local storage belum ada isi/value
    if (localStorage.getItem("daftare") === null) {
        //simpan array kosong[]
        localStorage.setItem("daftar", "[]")
    }
    //panggil local storage(konvers String ke object)
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    //simpan value.npm dan nama ke dalam object
    data.push({
        nama: npm.value,
        barang: nama.value,
        jumlah: jumlah.value
    })
    console.log(data)

    //simpan data terbaru kedalam local storage
    //konversi dari objek ke string
    localStorage.setItem("daftar", JSON.stringify(data))
    //panggil tampil
    tampil()
}

function tampil() {
    //panggil  dulu localk stroge 
    let hasil = JSON.parse(localStorage.getItem("daftar"))

    //clear
    document.getElementById("daftar-belanja").innerHTML = ""

    //lakukan perulangan ataulooping(foreacrh)
    hasil.array.forEach(element => {
        document.getElementById("daftar-belanja").innerHTML += `
        <div class="col-lg-3 col-mb-6 col-md-3"> 
            <div class="col-lg-3 col-mb-6 col-md-3">
                <h4 class="text-primary"?  ${element.nama}</h4> 
                <h6 class="text-primary">  ${element.barang} </h6>
                <h6 class="text-primary">  ${element.keterangan} </h6>
                <h6 class="text-primary">  ${element.jumlah} </h6>
            </div>
        <div>`
        });    
}
//jalankan fu