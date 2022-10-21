#include <stdio.h>

int main(void) {

//     questao 1 - lista 3
  float alturas[5];
  float media = 0;
  float soma = 0;
  float altura = 0;
  
  for(int  i = 0; i < 5; i++){
    printf("Digite sua altura:");
    scanf("%f", &altura);
    alturas[i] = altura;
    soma = soma + altura;
  }
  
  media = soma / 5;
  printf("Sua média é: %.2f", media);

//   questao 2 - lista 3
  float salarios[4];
  float soma = 0;
  float media = 0;

  for(int i = 0; i < 4; i++){
    printf("Digite seu salário:");
    scanf("%f", &salarios[i]);
    soma = soma + salarios[i];
  }
  media = soma / 5;
  printf("\nSua média é:%.2f",media);

  for(int i = 0; i < 4; i++){
    if(salarios[i] < media){
      printf("\n Seu salário abaixo da média: %.2f", salarios[i]);
    }
  }

//     questao 3 - lista 3
  float altura = 0;
  float idade = 0;
  float alturas[5];
  float idades[5];
  float maiorAltura = 0;
  float idadeMaioraltura;
  
  for(int i=0; i<5; i++){
    printf("Digite sua altura:\n");
    scanf(" %f", &altura);
    printf("Digite sua idade:\n");
    scanf("%f", &idade);
    alturas[i] = altura;
    idades[i] = idade;

    if(altura > maiorAltura){
      maiorAltura = altura;
      idadeMaioraltura = idade;
    }
  }
  
  printf("%.2f %.2f", maiorAltura, idadeMaioraltura);

  char nomes[4][6];
  float alturas[4];
.....
    for(int i=0; i<4; i++){
      printf("Digite um nome:");
      scanf("%s", nomes[i]);
      printf("Digite sua altura:");
      scanf("%f", &alturas[i]);
    }
  
  strcpy
  strlen
  strcmp
  strcat

//   questao 4 - lista 3 
  char nomes[5][30];
  int numCaracteres = 0;
  int maiorNumCaracteres = 0;

  for(int i = 0; i < 5; i++){
    printf("\nDigite um nome:");
    scanf("%s", nomes[i]);
  }
  for(int i=0; i<5; i++){
    numCaracteres = strlen(nomes[i]);
    if(numCaracteres > maiorNumCaracteres){
      maiorNumCaracteres = numCaracteres;
    }
  }
  printf("Maior número de caracteres e nome da pessoa: %d" , maiorNumCaracteres);

//   questao 5 - lista 3 
  char cargos[5][30];
  int comp = 0;
  int existe = 0;
  for(int i = 0; i < 5; i++){
    printf("Digite seu cargo:");
    scanf("%s", cargos[i]);
  }
for(int i = 0; i < 5; i++){
  comp = strcmp(cargos[i], "diretor");
  if(comp == 0){
    existe = 1;
  }
}
  if(existe == 1){
    printf("\n Existe um diretor.");
  }
  else{
    printf("Não existe diretor.");
  }

//   Pergunte o cargo de uma empresa para 5 pessoas, salve em uma matriz (vetor de palavras) e depois percorra novamente essa matriz para saber se o cargo “diretor” foi informado.
//   Questão 5-lista 3

  char cargos[5][30];
  int comp = 0;
  int existe = 0;

  for(int i = 0; i < 5; i++){
    printf("seu cargo:\n");
    scanf("%s", cargos[i]);

  comp = strcmp(cargos[i],"diretor");
    if(comp==0){
      existe = 1;
    }
  }
  if(existe == 1){
    printf("sspossui.");
  }
  else{
    printf("npossui");
  }
  return 0;
}
