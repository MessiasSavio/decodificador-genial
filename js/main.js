function criptografar(texto) {
  // Aplica as regras de criptografia
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");

  return texto;
}

function descriptografar(texto) {
  // Inverte as regras para descriptografar
  texto = texto.replace(/ufat/g, "u");
  texto = texto.replace(/ober/g, "o");
  texto = texto.replace(/ai/g, "a");
  texto = texto.replace(/imes/g, "i");
  texto = texto.replace(/enter/g, "e");

  return texto;
}

function validarTexto(texto) {
  // Verifica se o texto contém letras maiúsculas ou caracteres acentuados
  if (/[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜ]/.test(texto)) {
    alert("Por favor, digite apenas letras minúsculas e sem acento.");
    return false;
  }
  return true;
}

function textoCriptografado() {
  var texto = document.getElementById("texto_inicial").value;
  if (!validarTexto(texto)) {
    return;
  }
  var textoCriptografado = criptografar(texto);
  document.getElementById("texto_saida").value = textoCriptografado;
  
  if (texto.trim() !== "") {
    esconderImagem();
    mostrarBotao();
  } else {
    mostrarImagem();
}
}

function descriptografarTexto() {
  var texto = document.getElementById("texto_inicial").value;
  if (!validarTexto(texto)) {
    return;
  }
  var textoDescriptografado = descriptografar(texto);
  document.getElementById("texto_saida").value = textoDescriptografado;

  if (texto.trim() !== "") {
    esconderImagem();
    mostrarBotao();
  } else {
    mostrarImagem();
  }
}



function esconderImagem() {
  var imagem = document.getElementById("img_inicial");
  var mensagem = document.getElementById("mensagem");

  imagem.style.display = "none";
  mensagem.style.display = "none";
}

function mostrarImagem() {
  var imagem = document.getElementById("img_inicial");
  var mensagem = document.getElementById("mensagem");
  var mensagem = document.getElementById("mensagem");

  imagem.style.display = "block";
  imagem.style.alignItems = "center";
  
  imagem.style.marginRight ="25%";
  mensagem.style.display = "block";
  mensagem.style.textAlign ="center";

}

function copy() {
  var copiar = document.getElementById("copiar");
  navigator.clipboard.writeText(copiar.value);
}
let BotaoCopiar = document.getElementById("copiar");
BotaoCopiar.style.display = "none";

function mostrarBotao() {
  BotaoCopiar.style.display = "block";

}