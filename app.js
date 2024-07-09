function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    if(texto.length != 0){
        document.getElementById("texto").value = textoEncriptado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        imagen.src = "./img/encriptado.jpg";
    }
    else{
        imagen.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");

    let textoEncriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    if(texto.length != 0){
        document.getElementById("texto").value = textoEncriptado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        imagen.src = "./img/desencriptado.jpg";
    }
    else{
        imagen.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
    }

}