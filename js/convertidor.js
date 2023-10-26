function Librasakg() {

    const librasInput = document.getElementById("librasInput");

    const resultadoKilogramos = document.getElementById("resultadokilitogramos");

    const libras = parseFloat(librasInput.value);

    if (isNaN(libras)) {
        resultadoKilogramos.textContent = "Número inválido, ingrese un número válido de libras por favor.";
    } else if (libras < 0) {
        resultadoKilogramos.textContent = "No se permiten numeros negativos, ingrese un número válido de libras.";
    } else {
        /* 1 libra es igual a 0.45359237 kilogramos */
        const kilogramos = libras * 0.45359237;

        /* Se muestra el resultado */
        resultadoKilogramos.textContent = kilogramos.toFixed(2) + " kg";
    }
}
