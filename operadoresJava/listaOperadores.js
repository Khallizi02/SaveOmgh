
{
let x = 10; //declarando a variavel

console.log("Exercício 1:");
console.log(x); //exibição da variavel 
console.log();
}

{
let a = 20; //declarando as variaveis
let b = 5;

console.log("Exercício 2:");
console.log(a + b); //formulas pedidas
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log();
}

{

let num = -15;

console.log("Exercício 3:");
console.log(-num); //O operador - e para inverter o valor da variavel
console.log();

}

{

let count = 5;

console.log("Exercício 4:");
console.log(++count); //aumenta um no valor
console.log(--count); //diminui um no valor
console.log();

}

{

let x = 10; 

console.log("Exercício 5")

x += 5;
console.log(x);

x -= 3;
console.log(x);

x *= 2;
console.log(x);

x /= 4;
console.log(x);

x %= 3;
console.log(x);
console.log();

}

{

let p = true;
let q = false;

console.log( p && q);
console.log( p || q);
console.log(!p);
console.log(!q);
console.log();

}

{

    console.log("Exercício 7")
console.log(0 || "Hello"); //Exibira q é verdadeiro
console.log("" && "World"); //Não exibira nada, pq a primeira afirmação pode ser verdadeira, e a afirmação é verdadeira
console.log(null ?? "Default Value");//Exibe a mensagem de valor indefinido, que ja estava escrita
console.log(undefined ?? 42);//Exibe o numero 42 ja q o outro é indefinido
console.log();

}

{

console.log("Exercício 8");
    let resultado = 10 + 5 * 2 > 20 && !false;
console.log(resultado); /*o valor é igual a 20, e a afirmação seria verdadeira, mas tem uma esclamação na frente do false, 
que faz com q inverta de verdadeiro para falso*/8
console.log();

}

{

console.log("Exercício 9:");
console.log("5" - 2); //transformou o valor de string para int e subtraiu 2 dando 3
console.log("5" + 2); // adicinou o numero 2 como se fosse uma string junto ao 5 dando 52
console.log(true + 1); //o valor e verdadeiro entao é 1, somado com mais 1 fica 2
console.log(false + 10);//o resultado e falso ent é igual e 0 e somando com 10 fica 10 
console.log();

}

{
let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);

console.log("Exercício 10:")
console.log(z) /* o x++ faz com q seja adicionado +  ao  mas so na proxima vez q ele for chamado ja q veio depois do x, então  o resultado
fica 45, e o 45 dividido por 2 fica 22.5, e como a partir do inicio da conta o y passou a ser 9 e 9/3 da 0 de sobra q é oq a porcentagem
ia exibir, mas como é 0 so vai ser 22.5. */
}