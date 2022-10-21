// 1- Faça um programa JavaScript em que o usuário informará a sua idade e o programa
// emitirá uma mensagem dizendo se o usuário é obrigado votar ou não. Para votar o
// usuário deve possuir entre 18 e 70 anos.

let idade = prompt("Digite sua idade:");
idade = parseInt(idade);

if(idade >= 18 && idade <= 70) {
    alert("Vote agora!");
}
else{
    alert("Não será possivel votar com essa idade!");
}

//------------------------------------------------------------------------------------------------------------//

// 2-OK Faça uma função que receba os anos, os meses e dias de vida do usuário e exiba os
// dias de vida dele. Considere cada ano 365 dias e cada mês 30 dias.

var data = prompt("Digite sua data de nascimento: dd/mm/aa");

function dataF(data){
    data = data.split('/');

    var dia = parseInt(data[0]);
    var mes = parseInt(data[1])*30;
    var ano = parseInt(data[2])*365;

    var soma = dia+mes+ano;
}

alert("Você possui "+ dataF(data) +" de vida");

//------------------------------------------------------------------------------------------------------------//

// 3- Crie uma função que receba uma frase e troque todas as ocorrências da letra ‘a’ pela
// letra ‘U’, todas as ocorrências da letra ‘o’ por ‘G’ e que as únicas letras maiúsculas sejam
// as letras ‘U’ e ‘G’.

var frase = prompt("Digite sua frase: ");

function troca(frase){
    frase = frase.toLowerCase();
    frase = frase.replaceAll('a','U');
    frase = frase.replaceAll('o','G');

    return frase;
}

alert(frase);
alert(troca(frase));

//------------------------------------------------------------------------------------------------------------//

// 4- Faça uma calculadora que realize operações com 2 números fornecidos pelo usuário.
// Após obter os números, pergunte ao usuário qual a operação que ele deseja fazer. Crie
// uma função para cada tipo de operação. Mostre o resultado ao usuário.
// 1- Soma, 
// 2- Subtração, 
// 3- Multiplicação, 
// 4- Divisão

var a = prompt("Digite um número:");
a = parseInt(a);

var b = prompt("Digite outro número:");
b = parseInt(b);

var operacao = prompt("Escolha a operação: [1]Soma; [2]Subtração; [3]Multiplicação; [4]Divisão;");

function calcular(a, b, operacao){
    switch(operacao){
        case '1':
            return (a + b);
            break;
        case '2':
            return (a - b);
            break;
        case '3':
            return (a * b);
            break;
        case '4':
            return (a / b);
            break;
    }
}

alert(calcular(a, b, operacao));

//------------------------------------------------------------------------------------------------------------//

// 5- Crie uma função que receba um número e imprima toda a tabuada de 7 enquanto este
// número for maior que o valor calculado da tabuada.

function tabuada(num){

let numero = prompt("Digite um numero");

    for(let i=1;i<=10;i++){
        if((i+1)*7<numero){
        console.log(`7 x ${i} = ${7*i}`);
        }
    }

}

tabuada(50);

//------------------------------------------------------------------------------------------------------------//

// 6- Preencha um vetor com os dados de altura e sexo de 5 pessoas. Crie uma
// função que receba este vetor e imprime na tela quantas pessoas são do sexo
// masculino e quantas pessoas são maiores de 1.70m. Mostre também qual é a
// maior altura e se essa altura é de um homem ou uma mulher. Obs: Utilize
// objetos.

alert("OLÁ!");

function Pessoa(sexo, altura){
    this.sexo = sexo;
    this.altura = altura;
}

var pessoas = [];

for(let i = 0; i < 5; i++){
    var sexoTemporario = prompt("Sexo é M/F: ");
    var alturaTemporario = prompt("Digite sua altura: ");

    var pessoaTemp = new Pessoa(sexoTemporario, alturaTemporario);
    pessoas.push(pessoaTemp) // joga a variavel na ultima posição.
}

function infos(arr){
    let sexoMasc = 0;
    let alturasMaiores = 0;
    var maiorAltura = 0;
    var sexoMaiorAltura = 0;

    arr.array.forEach(element =>{
        if(elemento.sexo == "m"){
            sexoMasc++;
        }
        if(elemento.altura >= 1.70){
            alturasMaiores++;
        }
        if(elemento.altura > maiorAltura){
            maiorAltura = elemento.altura;
            sexoMaiorAltura = elemento.sexo;
        }
    });
}

alert(`A maior altura é ${maiorAltura} e é do sexo ${sexoMaiorAltura} e temos ${alturasMaiores} pessoas maiores que 1.7m, e temos ${sexoMasc} pessoas do sexo masculino;`);

infos(pessoas);

//------------------------------------------------------------------------------------------------------------//

// 7- As Organizações Tabajara resolveram dar um aumento de salário aos seus
// colaboradores e lhe contrataram para desenvolver o programa que calculará os
// reajustes. Faça umque recebe o salário de um colaborador e calcule reajuste segundo o
// seguinte critério, baseado no salário atual:
// a. Salários até R$ 280,00 (incluindo): aumento de 20%
// b. Salários entre R$ 280,00 e R$ 700,00: aumento de 15%
// c. Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%
// d. Salários de R$ 1500,00 em diante: aumento de 5%
// Após o aumento ser calculado, deverá ser informado: o salário antes do reajuste; o
// percentual de aumento aplicado; o valor do aumento; o novo salário, após o aumento.

var salario = prompt("Digite seu salário:");

if(salario <= 280){
    console.log("Salário antes do ajuste: " + salario);
    alert("Seu ajuste será de 20%!");
    
    var valorAumento = (salario * 1.2) - salario;
    alert("o valor de ajuste é: " + valorAumento);

    var salAjustado = (salario * 1.2);
    alert("Seu novo salário é de: " + salAjustado);
}
else if(salario <= 700){
    console.log("Salario antes do ajuste: " + salario);
    alert("Seu ajuste será de 15%!");

    var valorAumento = (salario * 1.15) - salario;
    alert("O valor de ajuste é: " + valorAumento);

    var salAjustado = (salario * 1.15);
    alert("Seu novo salário de é: " + salAjustado);
}
else if(salario <= 1500){
    console.log("Salario antes do ajuste: " + salario);
    alert("Seu ajuste será de 10%!");

    var valorAumento = (salario * 1.1) - salario;
    alert("O valor de ajuste é: " + valorAumento);

    var salAjustado = (salario * 1.1);
    alert("Seu novo salário de é: " + salAjustado);
}
else{
    console.log("Salario antes do ajuste: " + salario);
    alert("Seu ajuste será de 5%!");

    var valorAumento = (salario * 1.05) - salario;
    alert("O valor de ajuste é: " + valorAumento);

    var salAjustado = (salario * 1.05);
    alert("Seu novo salário de é: " + salAjustado);
}

//------------------------------------------------------------------------------------------------------------//

// 8- Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por
// extenso. Exemplo: Para a entrada “22/04/1983” deve ser escrito “22 de abril de 1983”.

var data = prompt("Digite uma data do padrão dd/mm/aaaa: ");

data = data.split('/');

var mes = ['não existe', 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro','Dezembro'];

alert(`${data[0]}, ${mes[data[1]]}, ano ${data[2]}`);

//------------------------------------------------------------------------------------------------------------//

// 9- Crie uma função que retorne a maior string de um array de nome inseridos pelo usuário.

let nomes = [];

for(let i = 0; i<5;i++){
let nomeTemp = prompt(`Digite o ${i+1}º nome: `);
nomes.push(nomeTemp);

function contaNome (nomes){
    let maiorTamanho = 0;
    let maiorString;
    // nomes['nome1', 'nome2','nome3', 'nome4']
    nomes.forEach(element => {
    if(element.length > maiorTamanho){
    maiorTamanho = element.length;
    maiorString = element;
    }
    });
    return maiorString;
    }
    console.log(`O maior nome é: ${contaNome(nomes)}`);
//------------------------------------------------------------------------------------------------------------//

// 10- Crie uma função receba uma frase e conte quantas palavras existem nela.

function contaPalavras (frase){
    //split para separar no espaço vazio e retornar cada palava em uma
    posição do array em 'novaFrase'
    let novaFrase = frase.split(" ");
    return novaFrase.length
    }
    let frase = "C é uma merda e JS é o mundo."
    console.log(contaPalavras(frase));

//------------------------------------------------------------------------------------------------------------//

// 11- Faça uma função que receba o nome do usuário, inverta este nome e apresente ao
// usuário o resultado invertido.

var nome = prompt("Digite seu nome: ");

function reverse(s){
    return s.split("").reverse().join("");
}

var nomeInvertido = reverse(nome);
alert("Nome invertido é: " + nomeInvertido);

//------------------------------------------------------------------------------------------------------------//

// 12- Obtenha a data atual do momento da abertura do navegador e exiba de forma separada
// o dia da semana, o dia do mês, o mês e o ano.
// Ex: Dia da semana: Quarta-feira, dia do mês: 19, mês: setembro, ano: 2022.

let data = new Date;

let dataDiaMes = data.getDate(); 
let dataSemana = data.getDay();
let dataMes = data.getMonth();
let dataAno = data.getFullYear();

let mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro','Dezembro'];

let semana = ['domingo', 'segunda', 'terça', 'querta', 'quinta', 'sexta', 'sabado'];

alert(`O dia da semana é: ${semana[dataSemana]}, dia do mes: ${dataDiaMes}, mes: ${mes[dataMes]}, ano: ${dataAno}`);

//------------------------------------------------------------------------------------------------------------//

// 13-OK Faça um programa, com uma função que necessite de três argumentos, e que forneça a
// soma desses três argumentos através de uma função. Seu script também deve fornecer
// a média dos três números, através de uma segunda função que chama a primeira.

var a = prompt("Digite um valor a: ");
a = parseInt(a);

var b = prompt("Digite um valor b: ");
b = parseInt(b);

var c = prompt("Digite um valor c: ");
c = parseInt(c);

function soma(a, b, c){
    return (a+b+c);
}

function media(a, b, c){
    return ((a+b+c)/3);
}

alert("Seu resultado da soma é:" + soma(a, b, c) + " e :" + media(a, b, c));

//------------------------------------------------------------------------------------------------------------//

// 14- Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente.
// Crie sua própria função para isso. Mostre o resultado em ordem crescente.

let numeros =[58,15,18];

for(let i = 0; i<numeros.length; i++){
    if(numeros[i] > numeros[i+1]){
        let aux = numeros[i];
            numeros[i] = numeros[i+1];
            numeros[i+1] = aux;
            i-=2;
    }
}

alert(numeros);

//------------------------------------------------------------------------------------------------------------//

// 15- Crie uma função que recebe um vetor e um número. Ela deve mostrar todos os números
// do vetor que são maiores que o número recebido.

let numeros = [15,30,42,50,180,73];
console.log(numeros);
let valorAnalise = 42;
let numerosMaiores = []
numeros.forEach(element=>{
if(element > valorAnalise){
numerosMaiores.push(element);
}
});
console.log(`Os numeros Maiores que ${valorAnalise} são: `);
console.log(numerosMaiores);

//------------------------------------------------------------------------------------------------------------//

// 16- Pergunte ao usuário para inserir 3 nomes e adicione eles à um vetor. Pergunte
// novamente 3 nomes e insira em um outro vetor. Crie uma função que receba ambos os
// vetores e retorne a junção de ambos. Escreva o conteúdo do vetor unificado.

let vetor1 = [];
let vetor2 = [];
for(let i = 0; i<3;i++){
vetor1[i] = prompt("Digite um nome ");
}
for(let i = 0; i<3;i++){
vetor2[i] = prompt("Digite um nome ");
}
function juncaoArr(vetor1, vetor2){
let vetor3 = vetor1.concat(vetor2);
return vetor3;
}
console.log(juncaoArr(vetor1,vetor2));

//------------------------------------------------------------------------------------------------------------//

// 17- Pergunte ao usuário seu nome, idade, e-mail e sexo. Crie um objeto chamado Pessoa
// que tenha essas propriedades e defina o valor das propriedades conforme os valores
// digitados pelo usuário.

function Pessoa(nome, idade,email,sexo){
    this.nome = nome
    this.idade = idade
    this.email = email
    this.sexo = sexo
    }
    let muniz = new Pessoa('Vitório Muniz', 18, "muniz@gmail.com",
    "Masculino");
    console.log(muniz);

//------------------------------------------------------------------------------------------------------------//

// 18- Dado a frase:
// “As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do
// banho, por isso recomenda-se diariamente.”
// Consiga retirar a frase “motivação não dura sempre” e concatene com “...”. Exiba o
// resultado

let frase = 'As pessoas costumam dizer que a motivação não dura para
sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.'
let indicePonto = frase.indexOf(".");
let fraseCortada = frase.substring(0,indicePonto);
fraseCortada = fraseCortada.concat('...')
console.log(fraseCortada);

//------------------------------------------------------------------------------------------------------------//

// 19- Crie uma função que receba um número (Ex: 9.2) e retorne uma string no seguinte
// formato: R$ 9,9

let numero = 9.20;
numero = parseFloat(numero)
numero = numero.toFixed(2)
function formataNumero(numero){
let escrita = numero.toString()
let cifrao = 'R$'
escrita = escrita.replace('.', ',');
cifrao = cifrao.concat(escrita)
console.log(cifrao);
}
formataNumero(numero);

//------------------------------------------------------------------------------------------------------------//


// 20- Pergunte ao usuário o nome do seu país, continente e sua capital. Através de uma
// função construtora crie um objeto chamado Pais que tenha essas propriedades e defina
// o valor das propriedades conforme os valores digitados pelo usuário.

let infos = prompt("Digite seu País, continente, capital");
infos = infos.split(",");
function Pais(pais, continente, capital){
this.pais = pais
this.continente = continente
this.capital = capital
}
let novoPais = new Pais(infos[0], infos[1], infos[2]);
console.log(novoPais);
