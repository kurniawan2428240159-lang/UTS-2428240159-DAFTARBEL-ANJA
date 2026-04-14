let nama = document.getElementById("nama");
let barang = document.getElementById("barang");
let jumlah = document.getElementById("jumlah");

function simpan() {
   localStorage.setItem("daftar", JSON.stringify(data))

   tampil()
}

    //jika local storage belum ada isi/value
    if (localStorage.getItem("mahasiswa") === null) {
        //simpan array kosong[]
        localStorage.setItem("mahasiswa", "[]")
    }
    //panggil local storage(konvers String ke object)
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    //simpan value.npm dan nama ke dalam object
    data.push({
        npm: npm.value,
        nama: nama.value,
        image: image.value
    })
    console.log(data)

    //simpan data terbaru kedalam local storage
    //konversi dari objek ke string
    localStorage.setItem("mahasiswa", JSON.stringify(data))
    //panggil tampil
    tampil()
}
