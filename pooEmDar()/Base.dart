// Classe Pessoa (simples)
class Pessoa {
  String? nome;
  int? idade;

  // Construtor padrão
  Pessoa() {
    nome = "";
    idade = 0;
  }

  // Construtor nomeado
  Pessoa.comNome(this.nome, this.idade);
}

// Classe Pessoa2 (com encapsulamento)
class Pessoa2 {
  String? _nome;
  int? _idade;

  // Construtor padrão
  Pessoa2() {
    _nome = "";
    _idade = 0;
  }

  // Construtor nomeado
  Pessoa2.comNome(this._nome, this._idade);

  // Getter para nome
  String get nome => _nome!;

  // Setter para nome
  set nome(String value) {
    _nome = value;
  }

  // Getter para idade
  int get idade => _idade!;

  // Setter para idade
  set idade(int value) {
    _idade = value;
  }
}

void main() {
  // Testando Pessoa
  Pessoa pessoa1 = Pessoa(); //instanciamento da primeira pessoa 
  pessoa1.nome = "Rayane";
  pessoa1.idade = 45;

  Pessoa pessoa2 = Pessoa.comNome("Pitufina", 40);

  print(" ============== Pessoa (classe simples) ==============");
  print("Pessoa 1 -> Nome: ${pessoa1.nome}, Idade: ${pessoa1.idade}");
  print("Pessoa 2 -> Nome: ${pessoa2.nome}, Idade: ${pessoa2.idade}");

  // Testando Pessoa2
  Pessoa2 pessoa3 = Pessoa2();
  pessoa3.nome = "دا د الوتکې غږ دی";
  pessoa3.idade = 60;

  Pessoa2 pessoa4 = Pessoa2.comNome("Saori", 36);

  print("\n ============== Pessoa2 (com encapsulamento) ==============");
  print("Pessoa 3 -> Nome: ${pessoa3.nome}, Idade: ${pessoa3.idade}");
  print("Pessoa 4 -> Nome: ${pessoa4.nome}, Idade: ${pessoa4.idade}");
} 