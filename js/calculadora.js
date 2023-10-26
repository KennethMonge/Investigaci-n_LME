// Función para calcular el IMC
function calcularIMC() {
    // Obtén los valores de peso y altura desde los campos
    const pesoInput = document.getElementById("peso");
    const alturaInput = document.getElementById("altura");

    //los convierte a float (Decimal)
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    // Verifica que los valores sean números válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Ingresa valores validos para peso y altura.");
        return;
    }

    // Verifica que la altura contenga un punto decimal
    if (alturaInput.value.indexOf('.') === -1) {
        alert("La altura debe tener un punto decimal (ejemplo: 1.75).");
        return;
    }

    // Calcula el IMC
    const bmi = peso / (altura * altura);

    // Muestra el resultado en el elemento "resultado"
    document.getElementById("resultado").textContent = bmi.toFixed(2);
}

// Agrega un evento al botón para calcular el IMC
document.getElementById("calcular").addEventListener("click", calcularIMC);
