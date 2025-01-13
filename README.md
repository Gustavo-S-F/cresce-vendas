## Requisitos para Rodar o Projeto

**Versões:**

* **Node.js:** v16.20.2
* **Cypress:** 13.7.2
* **Cypress-Cucumber-Preprocessor:** 4.3.1

## Guia de Instalação do Cypress

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/Gustavo-S-F/cresce-vendas.git](https://github.com/Gustavo-S-F/cresce-vendas.git)

2. **node --version** (para verificar se o node está instalado, e verificar se a versão é compatível)



3. **npm install**





## Aqui está o passo a passo para rodar os testes:



1 - rodar o script "cypress open" em npm scripts(dentro do VSCODE), ou rodar o comando npm run cyopen no terminal.



2 - selecionar o navegador de preferência.



3 - selecionar o menu Specs.



4 - as suítes de testes irão aparecer.



5 - clicar no teste que deseja rodar, e ele será executado.







## Observações sobre o desenvolvimento do projeto:

1. **O site que foi automatizado faz verificações constantes se o usuário é humano, isso pode causar erros durante a execução dos testes (em um projeto real, no ambiente de qa onde irá rodar os testes automatizados não deve ter este tipo de validação para não impactar na automação)**
2. **O site apresenta as vezes Código de status 429 Too Many Requests indica que você enviou muitas solicitações ao servidor em um curto período de tempo e isso também pode impactar os testes (tentei resolver isso com o comando cy.wait(2000) (não é viável em um projeto real colocar muitos cy.wait porém coloquei neste para minimizar as chances de erros) para que a execução dos testes ficasse mais próximo de uma execução humana e isso minimizou este problema porém não resolveu)**
3. **Por conta da limitação do site em questão, caso o teste venha a falhar é só rodar novamente que será possível validar oque foi feito**
4. **Os elementos não eram bem definidos, isso pode acontecer porém pode trazer alguns problemas como por exemplo: se o projeto estiver em desenvolvimento e o qa automatizador pegar o elemento por div caso haja alguma alteração em uma tela que ja foi automatizada pode acontecer de perdermos a instância do elemento que foi inspecionado então o ideal seria pegar os elementos por id neste caso para que mesmo que haja alguma alteração na tela a instancia do elemento não seja perdida**

5. **Foi usado no desenvolvimento do projeto o padrão page objects que divide os elementos e funções referente a cada página da aplicação juntamente com o cucumber que nos permite internalizar os cenários de testes dentro do projeto e utilizar a sintaxe gherkin**

## Os pontos positivos do page objects são: 

1. **Maior Organização e Manutenibilidade**
2. **Melhora a Leiturabilidade**
3. **Facilita a Manutenção**
4. **Melhora a Colaboração**
5. **Facilita a criação de testes de regressão**


## Automação da tela de Administração

**Não foi possível automatizar a tela de administração por conta de uma limitação de permissão de usuário (neste caso em um projeto real eu entraria em alinhamento com o time para resolução do problema)**
**Acredito que o conhecimento mostrado na automação da tela de catalogo de produtos comprova que caso não ocorresse esse problema de permissão eu conseguiria facilmente automatizar a tela de administração também**

## Aqui vai algumas evidências dos erros que foram citados sobre a verificação de humano e o status code 429:

![429](https://github.com/user-attachments/assets/8f302467-ebaf-451c-9690-5926dfca9cb5)
![429-2](https://github.com/user-attachments/assets/e09219a6-b63c-4554-9071-5ed47da8f7a2)
![verificação humana](https://github.com/user-attachments/assets/06ade29a-bcb1-4ac4-a08c-6f87bbfce158)



## Aqui vai algumas evidências dos testes automatizados rodando:


![checkoutValidation](https://github.com/user-attachments/assets/3b18f97a-1365-4212-a79c-3a53a99cbe77)
![login validation](https://github.com/user-attachments/assets/d965c581-c8af-4796-afb4-3b8fe7456402)
![productManipulationValidation](https://github.com/user-attachments/assets/69a65973-5b52-4280-b2b9-a43f1e2a69bf)
![userValidation](https://github.com/user-attachments/assets/d7e01f85-2c23-4007-bb79-234ef3849955)

