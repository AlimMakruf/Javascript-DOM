// TUGAS 1

function kirim(){
    let username = document.getElementById("inputUsername").value;
    let password = document.getElementById("inputPassword").value;

    if (username == "" || password == ""){
        alert("Mohon lengkapi data diatas")
    } else {
        cek = confirm("Apakah data diatas sudah benar?")
        if (cek == true ){
            alert("Login berhasil")
        } else {
            alert("Silahkan isi data kembali")
        }
    }
}

const tombol = document.getElementById("btn");
tombol.addEventListener("click", kirim)

// TUGAS 2

function submitted(){                                                     
    var nama = document.getElementById("inputName").value;
    var email = document.getElementById("inputEmail").value;
    var pesan = document.getElementById("pesan").value;

    if (nama == "" || email == "" || pesan == ""){
        swal({
            title: "Pesan Gagal Terkirim!",                             
            text: "Tidak boleh ada form yang kosong",
            icon: "error",
          });
    } else {
        swal({
            title: "Pesan Berhasil Terkirim!",
            text: "Nama :" + nama + "\nEmail :" + email + "\nPesan :\n" + pesan,
            icon: "success",
          });
    }
}

let buttonSubmit = document.getElementById("contactUs");
buttonSubmit.addEventListener("click", submitted);

// TUGAS 3

let apel = document.getElementById("apel")
let anggur = document.getElementById("anggur")
let jeruk = document.getElementById("jeruk")



apel.addEventListener("click", pilih.bind(this,"apel"))
anggur.addEventListener("click", pilih.bind(this,"anggur"))
jeruk.addEventListener("click", pilih.bind(this,"jeruk"))

function pilih(buah){
        if(buah == "apel"){
            alert("Kamu memilih apel")
        } else if (buah == "anggur"){
            alert("Kamu memilih anggur")
        } else if (buah == "jeruk"){
            alert("kamu memilih jeruk")
        }
}