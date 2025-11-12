function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2) {
    const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2)
    const resultadoDaMediaDeDoisNumeros = resultadoSomaDeDoisValores / 2
    return resultadoDaMediaDeDoisNumeros
}

module.exports = {
    somarDoisNumeros, calcularMediaDeDoisNumeros
}