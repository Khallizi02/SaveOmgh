/*
Modifiquei o codigo usando o case para incluir a opção do primeiro caso, o jogo ser de um jogador
e no segundocaso o jogo ser de 2 jogadores, no de um jogador o codigo continua, so alterando o fato
de estar dentro de um case, e no de 2 jogadores tem if else para fazer conque tenha um revezamento entre
os jogadores, dai foram alterados tambem, um int para o segundo jogador um alvo para o jogador 2 e um 
metodo para o jogador 2 e um valor boleano para tambem para verificar se o alvo foi acertado ou não.
E no quando o programa inicia ele pergunta se quer jogar com um ou dois jogadores para começar o jogo.
*/

import 'dart:io';
import 'dart:math';

class JogoTiro {
  final int largura = 20; // Quantidade de espaços pro alvo estar e trava em 20 o espaço
  late int alvo; // Faz com que o alvo possa se mover dentro da largura já definida
  late int alvo2; // Alvo do segundo jogador
  int jogador = 10; // Posição inicial do jogador

  JogoTiro() {
    alvo = Random().nextInt(largura); // Cria o alvo do jogador 1 em um lugar aleatório
    alvo2 = Random().nextInt(largura); // Cria o alvo do jogador 2 em um lugar aleatório
  }

    //metodo pro jogador 1 jogar
  void exibirJogo() {
    for (int i = 0; i < largura; i++) {
      if (i == jogador) {
        stdout.write('🔫');
      } else if (i == alvo) {
        stdout.write('🎯');
      } else {
        stdout.write('-');
      }
    }
    print('');
  }

//metodo pro jogador 2 jogar
  void exibirJogo2() {
    for (int i = 0; i < largura; i++) {
      if (i == jogador) {
        stdout.write('🔫');
      } else if (i == alvo2) {
        stdout.write('🎯');
      } else {
        stdout.write('-');
      }
    }
    print('');
  }

  void moverJogador(String direcao) {
    if (direcao == 'a' && jogador > 0) {
      jogador--;
    } else if (direcao == 'd' && jogador < largura - 1) {
      jogador++;
    }
  }

//verifiocar se o alvo foi acertado
  bool atirar() {
    return jogador == alvo;
  }

  bool atirarJogador2() {
    return jogador == alvo2;
  }
}

void main() {
  JogoTiro jogo = JogoTiro();
  String? comando;
  int opcao;

  print("\n=== JOGO DE TIRO ===");
  print("Use 'a' para esquerda, 'd' para direita e 'f' para atirar!\n");
  print("Quantos jogadores vão jogar?\n");
  print("Escreva 1 ou 2 para selecionar\n");
  opcao = int.parse(stdin.readLineSync()!);

  switch (opcao) {
    case 1:

    //modo para um jogador usando case 
      while (true) {
        jogo.exibirJogo();
        stdout.write("Comando: ");
        comando = stdin.readLineSync();

        if (comando == 'a' || comando == 'd') {
          jogo.moverJogador(comando!);
        } else if (comando == 'f') {
          if (jogo.atirar()) {
            print("\n🎯 Você acertou o alvo! Parabéns! 🎯\n");
            break; // Jogo termina quando o jogador 1 acerta
          } else {
            print("\n💥 Errou! Tente novamente.\n");
          }
        } else {
          print("\nComando inválido! Use 'a', 'd' ou 'f'.\n");
        }
      }
      break;

    case 2:
      
      //modo para dois jogadores 
      bool jogador1Venceu = false;
      bool jogador2Venceu = false;

      while (!jogador1Venceu && !jogador2Venceu) {
        print("\nVez do Jogador 1:");
        jogo.exibirJogo();
        stdout.write("Comando: ");
        comando = stdin.readLineSync();

        if (comando == 'a' || comando == 'd') {
          jogo.moverJogador(comando!);
        } else if (comando == 'f') {
          if (jogo.atirar()) {
            print("\n🎯 Jogador 1 acertou o alvo! Parabéns, Jogador 1! 🎯");
            jogador1Venceu = true;
            break; // Jogo termina quando o jogador 1 acerta
          } else {
            print("\n💥 Jogador 1 errou! Tente novamente.\n");
          }
        } else {
          print("\nComando inválido! Use 'a', 'd' ou 'f'.\n");
        }

        //se o jogador 1 nao venceu, agora e vez do jogador 2 
        if (!jogador1Venceu) {
          print("\nVez do Jogador 2:");
          jogo.exibirJogo2();
          stdout.write("Comando: ");
          comando = stdin.readLineSync();

          if (comando == 'a' || comando == 'd') {
            jogo.moverJogador(comando!);
          } else if (comando == 'f') {
            if (jogo.atirarJogador2()) {
              print("\n🎯 Jogador 2 acertou o alvo! Parabéns, Jogador 2! 🎯");
              jogador2Venceu = true;
              break; // Jogo termina quando o jogador 2 acerta
            } else {
              print("\n💥 Jogador 2 errou! Tente novamente.\n");
            }
          } else {
            print("\nComando inválido! Use 'a', 'd' ou 'f'.\n");
          }
        }
      }

      // Exibir o vencedor após o jogo terminar
      if (jogador1Venceu) {
        print("\nJogador 1 venceu o jogo!");
      } else if (jogador2Venceu) {
        print("\nJogador 2 venceu o jogo!");
      }
      break;
  }
}
