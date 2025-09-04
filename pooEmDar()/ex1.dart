class Produto { //Esse é o exercicio 1, está invertido 
  String? _nome;
  int? _preco;

  // Construtor padrão
  Produto() {
    _nome = "";
    _preco = 0;
  }

  // Construtor nomeado
  Produto.comNome(this._nome, this._preco);

  // Getter para nome
  String get nome => _nome!;

  // Setter para nome
  set nome(String value) {
    _nome = value;
  }

  // Getter para idade
  int get preco => _preco!;

  // Setter para idade
  set preco(int value) {
    _preco = value;
  }
}

void ex1() {
  // Testando Pessoa
  Produto produto1 = Produto(); //instanciamento da primeira pessoa 
  produto1.nome = "Сенай очень плохой";
  produto1.preco = 45;

  Produto produto2 = Produto.comNome("Pitufina", 40);

  print("\n Produto 1: Nome ${produto1.nome}, Preco: ${produto1.preco}");
  print("\n Produto 1: Nome ${produto2.nome}, Preco: ${produto2.preco}");
}