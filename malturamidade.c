#include <stdio.h>

int main(void) {

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
  
  return 0;
}
