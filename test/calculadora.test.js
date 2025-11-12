const { somarDoisNumeros } = require('../src/calculadora.js');
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


});