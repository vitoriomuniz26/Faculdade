#include <stdio.h>
#include <string.h>

void abertura(){
	printf("****************************************\n");
	printf("*             JOGO DE FORCA            *\n");
	printf("****************************************\n\n");
}

int main() {
	
	char palavrasecreta[20];
	
	sprintf(palavrasecreta, "melancia");
	//	for(int i = 1; i < 10; i++) sabe quando acaba.
	int acertou = 0;
	int enforcou = 0;
	
	char chutes[26];
	int tentativas = 0;
	
	// ABERTURA com FUNÇÃO!
	abertura();
	
	do {
		//começar o jogo!!!
		
		for(int i = 0; i < strlen(palavrasecreta); i++){
			
			int achou = 0;
			
			for(int j = 0; j < tentativas; j++){
				if(chutes[j] == palavrasecreta[i]){
					printf("%c ");
					achou = 1;
					break;
				}
			}
			
			if(achou){
				printf("%c ", palavrasecreta[i]);
			} 
			else{
				printf("_ ");
			}
		}
		printf("\n");
		
		char chute;
		scanf(" c%", &chute);
		
		chutes[tentativas] = chute;
		tentativas++;
		
	} while(!acertou && !enforcou);
	return 0;
}
