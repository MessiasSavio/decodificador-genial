function capturarValor() {
    // Obtém a referência ao elemento de input pelo ID
    var textoDescritogafadoInicalElement = document.getElementById('texto_inicial');

    // Obtém o valor do input
    var textoDescritogafadoInical = textoDescritogafadoInicalElement.value;

    // Exibe o valor criptografado no console
    var textoCriptografado = criptografar(textoDescritogafadoInical);
    console.log("Texto criptografado: " + textoCriptografado);

    // Exibe o valor descriptografado no console
    var textoDescriptografado = descriptografar(textoCriptografado);
    console.log("Texto descriptografado: " + textoDescriptografado);
  }

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