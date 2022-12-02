var botao1 = document.createElement('button'); // Criação do botão
var botao2 = document.createElement('button'); // Criação do segundo botão
var mensagem = document.createElement('p'); // Criação do texto que será inserido
botao1.innerText = "Abrir"; // Palavra que será escrita no botão
botao2.innerText = "Fechar"; // Palavra que será escrita no botão
document.body.appendChild(botao1); // Inserindo o botão no site
document.body.appendChild(botao2); // Inserindo o segundo botão no site
document.body.appendChild(mensagem); // Inserindo o texto que será escrito ao clicar em cada um dos botões
botao1.addEventListener('click', entrar); // Adicionando o evento de click ao botão e declarando uma função
botao2.addEventListener('click', fechar); // Adicionando o evento de click ao segundo botão e declarando uma função
botao1.addEventListener('mouseout', sair) // Adicionando o evento mouseout ao botão e declarando uma função
botao2.addEventListener('mouseout', sair) // Adicionando o evento de mouseout ao segundo botão e declarando uma função

function entrar() {
    document.querySelector('#p');
    mensagem.innerText = ' Estamos aberto'; // Para quando o botão for clicado emitir a mensagem ....
    botao1.style.background = 'green'; // Para quando o botão for clicado alterar a cor para verde
}

function fechar() {
    document.querySelector('#p');
    mensagem.innerText = 'Estamos fechado'; //Para quando o segundo botão for clicado emitir a mensagem ....
    botao2.style.background = 'red'; //Para quando o botão for clicando alterar a cor para vermelho
}

function sair() {
    botao1.style.background = 'white'; //Para quando o mouse sair de cima do botão ele voltar a ter sua cor original
    botao2.style.background = 'white'; // Para quando o mouse sair de cima do segundo botão ele voltar a ter a sua cor original
}
