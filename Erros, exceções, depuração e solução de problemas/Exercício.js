function definicoesBasicas(){

//Exercicio 1

console.log('Explique brevemente o que é erro, exceções e a diferença entre eles');
console.log('Erros são situações onde os codigos não sairam como o esperado, são qual quer falhas');
console.log('Exceção e é expecifica de erro que so para o fluxo do programa')
console.log('A principal diferença é que a exceção para o codigo o erro so resulta em um valor que nao é esperado')

};

function errosSemExcecoes(){

    //Exercicio 2

    //Um codigo q concatena as informações e nao soma elas, como por ex:
    let x = 5;
    let y = 'sete';
    console.log(x+y);
};


    //Exercicio 3

    //Em que cenários seu programa deve assumir que não pode confiar plenamente em dados de entrada do usuário? Escreva um pequeno comentário indicando como você trataria validações simples (tipo “número esperado, string recebida”).

    //para uma melhor confiabilidade, use typeof para validar se o dado que esta sendo entreguepelo usuario, é aquele que você deseja e um limite de como por exemplo um numero para idade de tipo 10 a 50 
    //e caso os dados nao sejam validos devem voltar um resultado nullo ou 0, e apenas ignorar o acontecido dando um erro


    //Exercicio 4

    //ReferenceeError -> acontece se voce usar uma variavel ou função que não existe no contexto atual como por exemplo uma let q é variavel dentro de uma função e depois e chamada fora dela 
    //TypeError -> Quando vc coloca um valor a alguma varivael como uma string, e usa o typeof eseprando uma string e o valor que vem é um int por exemplo, ou quando voce chama um metodo que tem o valor nulo ou indefinido
    //SyntaxError -> Acontece quando o JavaScript não consegue interpretar o codigo devido a um erro de sintaxe

    //Exercicio 5

    function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    console.log("Ocorreu um erro ao converter JSON:", err.message);
    return null;
  }
}

console.log(safeParse('{"nome": "Rayane"}'));
console.log(safeParse('texto invalido'));     

    //Exercicio 6

    function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    if (err instanceof SyntaxError) {
      return null;
    } else {
      throw err;
    }
  }
}

    //Exercicios 7 

    function safeParseWithFinally(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    console.warn("Erro de sintaxe no JSON:", err.message);
    return null;
  } finally {
    console.log("Tentativa de parse finalizada.");
  }
}

safeParseWithFinally('{"nome": "Vinhosa"}');

safeParseWithFinally('Erro');

    //Exercicio 8

    class InvalidAgeError extends Error {
  constructor(message) {
    super(message);   
    this.name = "InvalidAgeError";
  }
}

function checkAge(age) {
  if (typeof age !== "number") {
    throw new TypeError("Tipo de idade inválido");
  }
  if (age < 10 || age > 50) {
    throw new InvalidAgeError("Idade fora do intervalo (0–120)");
  }
  return "Idade válida";
}
    // Testes
try {
  console.log(checkAge(30));  
  console.log(checkAge(-5));  
} catch (err) {
  if (err instanceof InvalidAgeError) {
    console.error("Erro ao inserir a idade", err.message);
  } else {
    console.error("Idade invalida", err);
  }
}

    //Exercicios 9

function soma(a, b) {
  return a + b;
}
console.log(soma(2, undefined));
// Os valores são definidos dentro do console.log para fazer a soma, e quando dar um console.log antes nao foram definidos valores numericos para somar entao ele diz q não são numeros

    //Exercicio 10 

    // 1) entre em algum navegador
    // 2) Aperte f12 para abrir o menu de inspecionar
    // 3) Navegue até a aba Sources 
    // 4) Ache o arquivo js que voce deseja
    // 5) Marque breakpoints clicando no número da linha à esquerda do código-fonte.

    //Exercicio 11

function testeDebug(a) {
  const b = a * 8;
  debugger;
  return b;
}
testeDebug(5);

//ELe da um erro

    //Exercicio 12

function interno(m) {
  return m * 3;
}

function externo(n) {
  return interno(n) + 1;
}

externo(4);

    //Exercicio 13

    //Ele empilha as funções cada vez que uma delas e chamada, e ao retornar ele sai dessa pilha
    //Essas funções são chamadas dentro de uma da outra


    //Exercicio 14

    //