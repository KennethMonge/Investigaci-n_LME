function Librasakg() {
    const libras = parseFloat(document.getElementById("librasInput").value);
    //Realizamos la conversión de libras a kilogramos ya que sabemos que 1 lb es igual a 0.45359237 kg
    const kilogramos = libras * 0.45359237;
    document.getElementById("resultadokilitogramos").textContent = kilogramos.toFixed(2) + " kg";
}

