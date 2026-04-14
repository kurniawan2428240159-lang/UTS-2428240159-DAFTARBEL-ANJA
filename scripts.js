let namabarang = document.getElementById("namabarang");
let jumlah = document.getElementById("jumlah");
let keterangan = document.getElementById("keterangan");

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
        nama: namabarang.value,
        jumlah: jumlah.value,
        keterangan: keterangan.value
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
            <div class="card-body">
                <h4 class="text-primary"?  ${element.namabarang}</h4> 
                <h6 class="text-primary">  ${element.keterangan} </h6>
                <h6 class="text-primary">  ${element.jumlah} </h6>
            </div>
        <div>`
        });    
}
//jalankan fu