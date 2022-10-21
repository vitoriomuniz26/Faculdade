// - prompt
// - conversão
// - tipo indefinido 
// - arrays - puss, pop, splice
// - strings 
// - foreach
// - date 
// - objetos
// - funções - declarativas/expressões - contrutoras
//---------------------------------------------------------------------------------//

// var idade = prompt("idade:");
// var final = parseInt(idade)+2;
// // parseInt transforma string em número inteiro.
// alert(final);

//---------------------------------------------------------------------------------//

// var nomes = ["a", "b", "c"];
// alert (nomes.length); //numero de itens(tamanho da string)

// nomes.push("d"); //insere na ultima posição.
// nomes.pop(); // tira a ultima posição.
// nomes.splice(1, 2); // na posição 1, vai tirar um item ("b").

// // Caso não saiba onde esta o "b", para localizar posição do b:

// for( var i = 0; i < nomes.length; i++){ // verificação.
//     if(nomes[i] == "b"){
//         nomes.splice(i, 1);
//     }
// }

// //---------------------------------------------------------------------------------//

// var nome = "UniLasalle";
// nomes.length;
// var i = nomes.indexOf("L"); //indice = posição = 3.
// nomes.lastIndexOf("L"); //indice do L na ultima posição dele = 8.
// nomes[i] = "p";
// nome.replace("L", "B"); // replaceAll muda todos.

// //---------------------------------------------------------------------------------//

// nome[0].toUpperCase(); // Maiúsculo.
// nome[0].toLowerCase(); // Minúsculo.

// //---------------------------------------------------------------------------------//

// var partes[];
// var cidade = "itu,SP";
// partes = cidade.split(',');
// // ou
// var ind = cidade.indexOf(",");
// var cidade = local.substring(0, ind);
// var estado = local.substring(ind + 1);

// //---------------------------------------------------------------------------------//

// var letras = ["a", "b", "c"];
// letras.forEach(Element => {
//     console.log(Element);
//         if(Element == "b"){
//             console.log("oi");
//         }
// });

// //------------------------- OBJETOS E FUNÇÕES -------------------------------------//

// var pizza = {
//     nome: "Calabresa",
//     tamanho: "Grande",
// }
// alert (pizza.nome);

// //---------------------------------------------------------------------------------//

// function Pizza(nome, tamanho){
//     this.nome = nome;
//     this.tamanho = tamanho;
// }
// var p = newPizza("atum","médio");

// //---------------------------------------------------------------------------------//


// let string = "vamos na praia olhar o mar";
// let email = "testema@gmail.com.br";

// email = email.indexOf('');

// var indiceLetra = string.indexOf('o');

// alert(indiceLetra);

// IndexOf mostra a primeira ocorrencia da letra.

// let nome = "Vitório";

// nome = nome.toLocaleUpperCase();
// alert(nome);

// substring:

let string = "vamos, na praia hoje!";

let ind = string.indexOf(",");
let ind2 = string.lastIndexOf(",");
let novaString = string.substring(ind + 1, ind2);

alert(novaString);
