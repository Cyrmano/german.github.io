//const miBoton = document.getElementById("miBoton");
//const miTexto = document.getElementById("miTexto");

//miBoton.onclick = function() {
  //miTexto.style.display = "block";}


  function mostrarTexto() {
    var texto = document.getElementById("texto_oculto");
    if (texto.style.display === "none") {
      texto.style.display = "block";
    } else {
      texto.style.display = "none";
    }
  }