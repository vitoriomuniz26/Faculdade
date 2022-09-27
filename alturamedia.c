#include <stdio.h>

int main(void) {

   
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
  
  return 0;
}
