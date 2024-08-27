//@ts-check  => Ao colocar esse comando no topo de um arquivo typescript alguns erros de tipagem comuns que podem ocorrer com JS puro serão listados para mim, da forma que está descrito abaixo:

const frase = 'Front End';
// Ao definir a variável frase como string o javascript atribui a essa variável as caracteristicas de uma string, sugerindo métodos deste tipo de dado. Exemplo abaixo:
frase.toLowerCase();


const total = 100.05;
(total.toFixed());
// Curiosamente o toFixed retorna uma string, portanto se tentar utilizar seu resultado diretamente em  


const empresas = ['Facebook', 'Apple']
empresas.map(empresa => empresa => empresa.toLowerCase);
// Da mesma forma quando a variável é definida como um array, me são dadas opções deste tipo como sugestão pelo editor de código

const body = document.body;
body.style.background = '#000';
// Neste caso receberei sugestões de estilo ao escrever 'body.style', e é interessante observar que o body é listado como um HTMLElement, diferente dos tipos de dados que temos visto até então.

const button = document.querySelector('button');
// button.click;
if (button) {
    button.click;
}
// Neste caso button pode ser um HTMLElement ou null => Se não for encontrado um button ao procurar com o querySelector ele será null.

const operação = 100 + 1;
// const operação = 100 + true;
// Neste caso é realizada uma soma que eu normalmente não queira fazer. Mais um caso que pode ser corrigido com ts;