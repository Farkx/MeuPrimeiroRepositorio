// exemplo de manipulaçao do html

/*selecionamos o botao de mensagem e adicionamos um evento de clique*/

document.getElementById("botaoMensagem").addEventListener("click", function() {
    document.getElementById("mensagem").textContent = "vc clicou";
});

/*
a funçao somar() serve para:

- pegar os valores digitados pelo usuario em dois campos de input
- verificar se os valores sao validos (numeros)
- somar os dois valores, se forem validos
- exibir o resultado na tela
*/

function somar(){



/*
    document.getElementById("valor1"): acessa o input com ID valor1
    .value: pega o valor que o usuario digitou (vem como texto, mesmo que o usuario digite um numero)
    parseFloat(...): converte o texto e mnumero com casas decimais (float)
    let v1: cria uma variavel chamada v1 para armazenar esse numero
*/

// pegamos os valores dos inputs como texto e convertemos para numero
let v1 = parseFloat(document.getElementById("valor1").value);
let v2 = parseFloat(document.getElementById("valor2").value);




/*
aqui fazemos uma verificaçao

isNaN(v1): verifica se v1 nao é um numero (NaN = not an number)
||: operador "OU" a condiçao sera verdadeira se pelo menos um dos dois valores for valido
se for verdadeiro, significa que o usuario digitou algo errado (como texto ou campo vazio)
*/

if (isNaN(v1) || isNaN(v2)){
    document.getElementById("resultado").textContent = "digite dois numeros";
    }
    else{
        let resultado = v1 + v2; //soma
        document.getElementById("resultado").textContent = "resultado: " + resultado;
    }
}
