const { somarDoisNumeros, calcularMediaDeDoisNumeros } = require('../src/calculadora.js');
const { expect } = require('chai');

describe('teste da função de soma', () => {

    it('A função deve ser capaz de somar dois numeros positivos', () => {
        //Coleta o resultado da função 
        const resultadoDaSoma = somarDoisNumeros(5, 3);

        //Compara a função
        expect(resultadoDaSoma).to.equal(8);
    });

    it('Afunção deve ser capaz de somar um número positivo e um negativo', () => {

        //Coleta o resultado da função 
        const resultadoDaSoma = somarDoisNumeros(5, -3);

        //Compara a função
        expect(resultadoDaSoma).to.equal(2);

    });

    it('Afunção deve ser capaz de somar um números negativos', () => {

        //Coleta o resultado da função 
        const resultadoDaSoma = somarDoisNumeros(-5, -3);

        //Compara a função
        expect(resultadoDaSoma).to.equal(-8);

    });


});

describe('Teste da função que calcula a média de 2 numeros', () => {

    it('A função deve ser capaz de calcular a média de dois numeros positivos', () => {
        //Coleta o resultado da função 
        const calculoMedia = calcularMediaDeDoisNumeros(5, 3);

        //Compara a função
        expect(calculoMedia).to.equal(4);
    });

    it('Afunção deve ser capaz de calcular a média de um número positivo e um negativo', () => {

        //Coleta o resultado da função 
        const calculoMedia = calcularMediaDeDoisNumeros(5, -3);

        //Compara a função
        expect(calculoMedia).to.equal(1);

    });

    it('Afunção deve ser capaz de calcular a média de dois números negativos', () => {

        //Coleta o resultado da função 
        const calculoMedia = calcularMediaDeDoisNumeros(-5, -3);

        //Compara a função
        expect(calculoMedia).to.equal(-4);

    });

});