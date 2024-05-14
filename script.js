document.getElementById('validar').addEventListener('click', function() {
    var minimo = parseInt(document.getElementById('minimo').value);
    var maximo = parseInt(document.getElementById('maximo').value);
    var resultado = document.getElementById('resultado');

    // Verifica se os valores são válidos
    if (isNaN(minimo) || isNaN(maximo)) {
        resultado.textContent = "Insira valores válidos.";
        return;
    }

    // Exibe o resultado
    resultado.innerHTML = "<strong>Valores:</strong><br>" +
                          "Válido (mínimo): " + minimo + "<br>" +
                          "Válido (máximo): " + maximo + "<br>" +
                          "Inválido (1 a menos que o mínimo): " + (minimo - 1) + "<br>" +
                          "Inválido (1 a mais que o máximo): " + (maximo + 1);

    // Armazena os valores para verificação posterior
    resultado.dataset.minimo = minimo;
    resultado.dataset.maximo = maximo;
});

document.getElementById('verificar').addEventListener('click', function() {
    var valor = parseInt(document.getElementById('valor').value);
    var resultado = document.getElementById('resultado');

    var minimo = parseInt(resultado.dataset.minimo);
    var maximo = parseInt(resultado.dataset.maximo);

    // Verifica se os valores são válidos
    if (isNaN(minimo) || isNaN(maximo)) {
        resultado.textContent = "Defina valores mínimos e máximos primeiro.";
        return;
    }

    // Verifica se o valor é válido
    if (valor === minimo) {
        resultado.textContent = "O valor " + valor + " é válido.";
    } else if (valor === maximo) {
        resultado.textContent = "O valor " + valor + " é válido.";
    } else if (valor === (minimo - 1) || valor === (maximo + 1)) {
        resultado.textContent = "O valor " + valor + " é inválido.";
    } else {
        resultado.textContent = "O valor " + valor + " está fora dos parâmetros de teste.";
    }
});
