function miEncriptar(){
    let texto = document.getElementById("#textoUsuario").value;
    let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.getElementById("#textoUsuario").value;
}

boton1 = document.addEventListener("#encriptar");
boton1.addEventListener = encriptar;

function miDesencriptar(){
    let texto = document.getElementById("#textUsuario").value;
    let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.getElementById("#textoUsuario").value;

}

let boton2 = document.getElementById("#desencriptar"); 
boton2.onclick = desencriptar;


// function esconder(){
//     document.getElementById("#encriptar").style.display = "none";
// }

// function esconder(){
//     document.getElementById("#desencriptar").style.visibility = "hidden";
// }