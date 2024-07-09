function miEncriptar(){
    let texto = document.getElementById("textoUsuario").value;
    console.log(texto);
    let textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    console.log(textoCifrado);
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#textoUsuario").value;
};

function miDesencriptar(){
    let texto = document.getElementById("textoUsuario").value;
    console.log(texto);
    let textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    console.log(textoCifrado);
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#textoUsuario").value;
};


// FUNCIONES PARA ESCONDER COSAS
//  const esconder = () => {
//      document.querySelector('botones').style.display = "none";
//      document.getElementById('imagen').style.display = "none";
//      document.getElementById('1').style.display = "none";

//  }

//  const botones = document.querySelector('h3', 'imagenMuñeco');
//  botones.addEventListener('click',esconder)

