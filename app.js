let inputUsuario;
let letraReemplazar;
let textoEncriptado;

function encriptarTextoF() {
    // Obtiene el texto que el usuario ingresa al text area
    inputUsuario = document.querySelector(".input_texto").value;
    // console.log(inputUsuario);
    if (inputUsuario === "") {
        // Si se cumple la condición, el div con la imagen se vuelve visible
        document.querySelector(".inicial").style.display = "";
    } else {
        // se asigna a la funcion reemplazar() que letra será reemplazada y su reemplazo 
        reemplazar('e', 'enter');
        reemplazar('i', 'imes');
        reemplazar('a', 'ai');
        reemplazar('o', 'ober');
        reemplazar('u', 'ufat');

        console.log(inputUsuario);
        // Llama a la función ocultarMostrar() para ocultar el div con imagen
        // y mostrar el div con el texto encriptado
        ocultarMostrar();
    }
}

// Funcion para desencriptar texto

function desencriptarTextoF() {
    inputUsuario = document.querySelector(".input_texto").value;
    if (inputUsuario === "") {
        document.querySelector(".inicial").style.display = "";
    } else {
        reemplazar('enter', 'e');
        reemplazar('imes', 'i');
        reemplazar('ai', 'a');
        reemplazar('ober', 'o');
        reemplazar('ufat', 'u');

        console.log(inputUsuario);

        ocultarMostrar();
    }
}


// Función para ocultar div con imagen inicial y mostrar el texto encriptado
function ocultarMostrar() {
    // Inicializa el div con la imagen oculto
    document.querySelector(".inicial").style.display = "none";
    document.querySelector(".encriptacion").style.display = "flex";
    // Muestra el texto del textarea
    document.querySelector(".encriptacion").innerHTML = `
    <p class="texto_encriptado">${inputUsuario}</p>
                    <div class="copiar_container">
                        <button class="btn_copiar" onclick="btnCopiar();">Copiar</button>
                    </div>
    `;
    inputUsuario = document.querySelector(".input_texto").value = "";
    return;
}


// Funcion para encriptar
// reemplaza una letra por otras

function reemplazar(letra, reemplazo) {
    // Reemplaza el texto escrito por el usuario con el texto encriptado
    letraReemplazar = inputUsuario.replaceAll(letra, reemplazo);
    // inputUsuario toma el valor del texto encriptado
    inputUsuario = letraReemplazar;

    return;
}

// Función para copiar texto

function btnCopiar() {
    copiar = document.querySelector(".btn_copiar");
    textoEncriptado = document.querySelector(".texto_encriptado");

    // let txt = textoEncriptado.value;
    console.log(textoEncriptado.textContent);
    navigator.clipboard.writeText(textoEncriptado.textContent);
    textoEncriptado.textContent = "";
}