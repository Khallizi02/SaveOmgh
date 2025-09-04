
//classe com encapsulamento
class ContaBancaria {
  String _titular = '';
  double _saldo = 0.0;

  String get titular => _titular;

  set titular(String nome) {
    _titular = nome;
  }

  double get saldo => _saldo;

  // Setter para o saldo com validação, para impedir o valor negativo
  set saldo(double valor) {
    if (valor >= 0) {
      _saldo = valor;
    } else {
      print('O saldo não pode ser negativo.');
    }
  }

  // Método para exibir informações da conta
  void exibirDados() {
    print('Titular: $_titular');
    print('Saldo: $_saldo reias de saldo');
  }
}

void ex2() {
  // Criando uma instância da ContaBancaria
  ContaBancaria conta = ContaBancaria();
  conta.titular = 'João Silva';
  conta.saldo = 1500.00;
  conta.exibirDados();
}

