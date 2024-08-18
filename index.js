function procesarTexto(transformarTexto) {
    const texto = document.querySelector("textarea").value;   
    const inicial = document.querySelector(".respuesta-inicial");
    const respuesta = document.querySelector(".respuesta-resultado");
    const textoProcesado = document.querySelector("#textoProcesado");
    const imagen = document.querySelector("div img");

    if (texto === "") {
        imagen.style.display = "block";        
    } else {
        imagen.style.display = "none";
    }

    const textoEncriptado = transformarTexto(texto);
    inicial.style.display ="none";
    respuesta.style.display = "flex";
    textoProcesado.textContent = textoEncriptado;
}

function encriptar() {
    procesarTexto(encriptarTexto);
}

function desencriptar() {
    procesarTexto(desencriptarTexto);
}

function encriptarTexto(texto) {
    let textoEncriptado = "";
    for(let i = 0; i < texto.length; i++) {
        switch(texto[i]) {
            case "a":
                textoEncriptado += "ai";
                break;
            case "e":
                textoEncriptado += "enter";
                break;
            case "i":
                textoEncriptado += "imes";
                break;
            case "o":
                textoEncriptado += "ober";
                break;
            case "u":
                textoEncriptado += "ufat";
                break;
            default:
                textoEncriptado += texto[i];
                break;
        }
    }
    return textoEncriptado;
}


function desencriptarTexto(texto) {
    return texto.replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
}

function copy() {
    navigator.clipboard.writeText(document.querySelector("#textoProcesado").textContent);
    document.querySelector("textarea").value = "";
}