
class Aluno {
  String nome;
  double nota1;
  double nota2;

  Aluno(this.nome, this.nota1, this.nota2);

  double calcularMedia() => (nota1 + nota2) / 2;
} 
//Definição da classe de alunos com as variaveis, para calcular a media e ver qual foi a sua nota 

void ex4() {
  List<Aluno> alunos = [
    Aluno('Eszuizo', 7.5, 8.0),
    Aluno('Frenia', 5.0, 4.5),
    Aluno('Pitufina', 6.0, 6.0),
  ];
//lista com os alunos 
  for (var aluno in alunos) {
    double media = aluno.calcularMedia();
    String status = media >= 6.0 ? 'Aprovado' : 'Reprovado';
    print('${aluno.nome} - Média: $media - $status');
  }
  // Conferencia para ser o aluno foi aprovado ou reprovado
}
