import 'dart:io';

class Funcionario {
  String _nome = '';
  double _salario = 0.0;

  // Getters e setters
  String get nome => _nome;

  set nome(String valor) {
    _nome = valor;
  }

  double get salario => _salario;

  set salario(double valor) {
    if (valor > 0) {
      _salario = valor;
    } else {
      print('Salario invalido,o salario tem que ser positivo');
    }
  }
}

void ex3() {
  Funcionario funcionario = Funcionario();

  stdout.write('Informe o nome do funcionario: ');
  funcionario.nome = stdin.readLineSync() ?? '';

  stdout.write('Informe o salario do funcionario: ');
  double? salario = double.tryParse(stdin.readLineSync() ?? '');

  if (salario != null) {
    funcionario.salario = salario;
  } else {
    print('Valor de salario invalido');
  }

  print('\nDados do funcionario:');
  print('Nome: ${funcionario.nome}');
  print('Salario: ${funcionario.salario}');
}
