const imagem = document.getElementById("img_inicial");
var mensagem = document.getElementById("mensagem");
var mensagem1 = document.getElementById("mensagem__aguardando");
const digitar1 = document.querySelector("#texto_inicial");
const digitar2 = document.querySelector("#texto_saida");
const btnCopiar = document.getElementById("copiar");
const larguraPagina = window.innerWidth; // Altura da janela do navegador
const apresentacaoResultado = document.querySelector('.apresentacao__resultado');
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
  if (/[A-ZÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜáéíóúàèìòùâêîôûãõäëïöü]/.test(texto)) {
    alert("Por favor, digite apenas letras minúsculas e sem acento.");
    mostrarImagem();
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
    alert('Presisamos de ao menos 1 vogal para que sua mensagem possa ser criptografada!');
    mostrarImagem();
    alert('Digite algo para ser criptografado ou descriptografado!');
    return;
  }

  var textoCriptografado = criptografar(texto);
  digitar2.value = textoCriptografado;

  if (texto.trim() !== "") {
    esconderImagem();
    mostrarBotao();
    let textoBotao = document.getElementById('acao__criptrografar');

    function criptografando(){
      textoBotao.innerText ="Criptografado!";
      textoBotao.style.background ='#1e78a2';
      textoBotao.style.color ='white';

      setTimeout(function() {
        textoBotao.innerText ="Criptografar";
        textoBotao.style.background ='var(--cor-primaria)';
        textoBotao.style.color ='white';
      },3000);
    }
    textoBotao.addEventListener('click',criptografando());
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
  digitar2.value = textoDescriptografado;

  if (texto.trim() !== "") {
    esconderImagem();
    mostrarBotao();
    let textoBotao = document.getElementById('acao__descptografar')

    function criptografando(){
      textoBotao.innerText ="Descriptogafado!";
      textoBotao.style.background ='#1e78a2';
      textoBotao.style.color ='white';

      setTimeout(function() {
        textoBotao.innerText ="Descriptografar";
        textoBotao.style.background ='var(--cor-secundaria)';
        textoBotao.style.color ='var(--cor-primaria)';
      },3000);
    };
    textoBotao.addEventListener('click',criptografando());
  } else {
    mostrarImagem();
    alert('Digite algo para ser criptografado ou descriptografado!');
  }
}

function esconderImagem() {
  imagem.style.display = "none";
  mensagem.style.display = "none";
  mensagem1.style.display = "none";
  if(larguraPagina>400 && larguraPagina<1200) {
    apresentacaoResultado.style.height = '343px';
  }
}

function mostrarImagem() {
  larguraPagina>1200 ? imagem.style.display = "flex" : imagem.style.display = "none";
  mensagem.style.display = 'block';
  mensagem1.style.display = 'block';
  btnCopiar.style.display = "none";
  digitar2.style.display = "none";
  if(larguraPagina>400 && larguraPagina<1200) {
    apresentacaoResultado.style.height = '133px';
    apresentacaoResultado.style.display = 'flex'
  }
}

function copy() {
  navigator.clipboard.writeText(digitar2.value);

  // Alterar o texto do botão para "Copiado!" imediatamente
  btnCopiar.innerText = "Copiado!";
  btnCopiar.style.backgroundColor = "#50b10c";
  btnCopiar.style.color = "white";
  btnCopiar.style.fontSize = "25px";

  // Agendar a mudança de volta para o texto original após 5 segundos
  setTimeout(function() {
    btnCopiar.innerText = "Copiar";
    btnCopiar.style.backgroundColor = "var(--cor--quintenaria)";
    btnCopiar.style.color = "white";
  }, 3000);
}

// Adicionar um ouvinte de evento de clique ao botão
btnCopiar.addEventListener("click", copy);
btnCopiar.style.display = "none";

function mostrarBotao() {
  btnCopiar.style.display = "flex";
  digitar2.style.display = "flex";
}

