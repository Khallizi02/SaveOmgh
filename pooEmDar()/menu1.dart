import 'dart:io';
import 'barrel.dart';

void menu() {

    print('''
    1  Classe simples: Produto
    2  Classe com encapsulamento: ContaBancaria
    3  Validação com encapsulamento: Funcionario
    4  Classe simples + lista: Aluno
    5  Sair...''');
}

void main(){
  int escolha;

do {

    menu();
    print("Escolha uma opção");
    escolha = int.parse(stdin.readLineSync()!);

     switch (escolha){
      case 1: ex1(); break;
      case 2: ex2(); break;
      case 3: ex3(); break;
      case 4: ex4(); break;
      case 5: print("Progarama encerrando"); return;
      default:
      print("Opção invalida, tente denova");

     }
} while (escolha !=0);

}