
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

let campoCriptografado = document.getElementById('texto_inicial').value;

campoCriptografado = criptografar(campoCriptografado);

function criptografarTexto() {
  // Captura o valor do campo de digitação
  var textoDigitado = document.getElementById('texto_inicial').value;
  
  // Mostra o valor capturado no campo de criptogrado
  document.getElementById('texto_criptografado').value = criptografar(textoDigitado);
  
  if (textoDigitado.trim() !== '') {
    esconderImagem();
  } else {
    mostrarImagem();
  }

}

function descriptografarTexto() {
  // Captura o valor do campo de digitação
  var textoDigitado = document.getElementById('texto_criptografado').value;
  
  // Mostra o valor capturado no campo de criptogrado
  document.getElementById('texto_inicial').value = descriptografar(textoDigitado);
  
  if (textoDigitado.trim() !== '') {
    esconderImagem();
  } else {
    mostrarImagem();
  }

}

function atualizarCampoMostrar() {
  // Atualiza o campo de mostrar durante a digitação
  let textoMostrado = document.getElementById('texto_criptografado').value;

  // Mostra o valor atualizado no campo de digitar
  document.getElementById('texto_criptografado').value = textoMostrado;
}


function ativarDescriptografiaButao() {
  document.getElementById('acao__criptrografar');
  document.getElementById('texto_criptografado').value = criptografar(textoDigitado);
}

function esconderImagem() {
  var imagem = document.getElementById('img_inicial');
  var mensagem = document.getElementById('mensagem');
  
  imagem.style.display = 'none';
  mensagem.style.display = 'none';
}

function mostrarImagem() {
  var imagem = document.getElementById('img_inicial');
  var mensagem = document.getElementById('mensagem');
  
  imagem.style.display = 'block';
  mensagem.style.display = 'block';
}


