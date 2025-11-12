# Documentação do Projeto: Lógica de Programação

## Descrição
Este é um projeto de estudos para aprender e praticar conceitos fundamentais de lógica de programação com JavaScript. O projeto inclui funções básicas de cálculo, testes unitários e boas práticas de desenvolvimento.

## Objetivo
Este projeto faz parte da minha jornada de aprendizado em programação, onde estou explorando os conceitos básicos de:
- Criação e utilização de funções
- Exportação e importação de módulos
- Configuração de ambiente de testes
- Implementação de testes unitários

## Funcionalidades

### Funções Implementadas

#### 1. `somarDoisNumeros(valor1, valor2)`
- Realiza a soma de dois números
- Trabalha com números positivos e negativos
- Retorna o resultado da soma

#### 2. `calcularMediaDeDoisNumeros(valor1, valor2)`
- Calcula a média entre dois números
- Utiliza a função `somarDoisNumeros` internamente
- Retorna o resultado da média

## Estrutura do Projeto

```
├── src/
│   └── calculadora.js          # Implementação das funções
├── test/
│   └── calculadora.test.js     # Testes unitários
├── package.json                # Dependências e scripts
├── package-lock.json           # Versões exatas das dependências
├── .gitignore                  # Arquivos ignorados pelo Git
└── README.md                   # Documentação do projeto
```

## Tecnologias Utilizadas

- **JavaScript**: Linguagem principal do projeto
- **Mocha**: Framework de testes
- **Chai**: Biblioteca de asserções para testes
- **Node.js**: Ambiente de execução

## Configuração do Projeto

### Dependências
Foram instaladas duas bibliotecas de teste:
- `mocha`: Framework para execução de testes
- `chai`: Biblioteca para fazer asserções nos testes

### Configuração do Git
- Arquivo `.gitignore` configurado para ignorar a pasta `node_modules`
- Isso evita que dependências instaladas localmente sejam commitadas

## Testes Implementados

Foram criados testes abrangentes para validar o comportamento das funções:

### Testes para `somarDoisNumeros`
- Soma de dois números positivos
- Soma de um número positivo e um negativo
- Soma de dois números negativos

### Testes para `calcularMediaDeDoisNumeros`
- Cálculo da média de dois números positivos
- Cálculo da média de um número positivo e um negativo
- Cálculo da média de dois números negativos

## Aprendizados

Durante o desenvolvimento deste projeto, adquiri conhecimento sobre:

1. **Modularização de Código**
   - Criação de funções reutilizáveis
   - Exportação de funções usando `module.exports`
   - Importação de funções usando `require`

2. **Testes Unitários**
   - Configuração de ambiente de testes com Mocha e Chai
   - Escrita de casos de teste para diferentes cenários
   - Validação de comportamentos esperados

3. **Boas Práticas de Desenvolvimento**
   - Uso de `.gitignore` para arquivos temporários e dependências
   - Organização do código em pastas específicas (src e test)
   - Documentação do projeto

4. **Git e Controle de Versão**
   - Configuração correta de arquivos que devem ser ignorados
   - Estruturação de projeto para versionamento

## Execução dos Testes

Para executar os testes, utilize o comando:

```bash
npm test
```

## Conclusão

Este projeto representou um importante passo no meu aprendizado de lógica de programação. Através da criação de funções básicas e da implementação de testes, pude compreender conceitos fundamentais como modularização, validação de comportamentos e boas práticas de desenvolvimento.

A experiência de exportar e importar funções, configurar bibliotecas de teste e validar diferentes cenários de uso foi extremamente valiosa para consolidar meus conhecimentos em JavaScript.