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
  if (/[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜzáéíóúàèìòùâêîôûãõäëïöü]/.test(texto)) {
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

  // Verifica se o texto contém pelo menos uma vogal
  if (!/[aeiou]/.test(texto)) {
    alert('Presisamos de ao menos 1 vogal para ser criptografada');
    alert('Digite algo para ser criptografado ou descriptografado!');
    return;
  }

  var textoCriptografado = criptografar(texto);
  document.getElementById("texto_saida").value = textoCriptografado;

  if (texto.trim() !== "") {
    esconderImagem();
    mostrarBotao();
  } else {
    mostrarImagem();
    alert('Digite algo para ser criptografado ou descriptografado!');
  }
}

function descriptografarTexto() {
  var texto = document.getElementById("texto_inicial").value;
  if (!validarTexto(texto)) {
    return;
  }
  
  // Verifica se o texto contém pelo menos uma ocorrência de uma das palavras-chave
  if (!texto.includes("enter") && !texto.includes("imes") && !texto.includes("ai") && !texto.includes("ober") && !texto.includes("ufat")) {
    alert('Não há nada a ser descriptografado.');
    mostrarImagem();
    alert('Digite algo para ser criptografado ou descriptografado!');
    return;
  }

  var textoDescriptografado = descriptografar(texto);
  document.getElementById("texto_saida").value = textoDescriptografado;

  if (texto.trim() !== "") {
    esconderImagem();
    mostrarBotao();
  } else {
    mostrarImagem();
    alert('Digite algo para ser criptografado ou descriptografado!');
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
  let texto = document.getElementById("texto_saida");
  imagem.style.display = "block";
  mensagem.style.display = 'block';
  mensagem.style.textAlign = "center";
  BotaoCopiar.style.display = "none";
  texto.style.display = "none";
}
const digitar1 = document.querySelector("#texto_inicial")
const digitar2 = document.querySelector("#texto_saida")
const btnCopiar = document.getElementById("copiar")


function copy() {
  navigator.clipboard.writeText(digitar2.value);

  // Alterar o texto do botão para "Copiado!" imediatamente
  btnCopiar.innerText = "Copiado!";
  btnCopiar.style.backgroundColor = "green";
  btnCopiar.style.color = "white";
  btnCopiar.style.fontSize = "25px"


  // Agendar a mudança de volta para o texto original após 5 segundos
  setTimeout(function() {
    btnCopiar.innerText = "Copiar";
    btnCopiar.style.backgroundColor = "var(--cor--quintenaria)";
    btnCopiar.style.color = "white";
  }, 3000);
}

// Adicionar um ouvinte de evento de clique ao botão
btnCopiar.addEventListener("click", copy);


let BotaoCopiar = document.getElementById("copiar");
BotaoCopiar.style.display = "none";

function mostrarBotao() {
  BotaoCopiar.style.display = "block";
  let textArea = document.getElementById('texto_saida')
  textArea.style.display = "flex"
}
