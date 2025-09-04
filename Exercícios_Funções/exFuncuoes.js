//Exercicio 1
function helloWorld(){

    function sayHello(){
    console.log("Hello, Word!")
}
sayHello();

}
helloWorld();

//Exercicio 2
function somaSimples(){
function sum(a,b){
    return a + b;
}

let resultado = sum(5,7)
console.log(resultado);
sum();
}

//Exercicio 3
function variavelLocal(){
function localExample(){
    let message = "Variavel local"
}
console.log(message); //A variavel está indefinida pois foi declarada como local dentro da função
}

//Exercicio 4
function saudacaoPorNome(){
function greet(name, asd){
  return name[asd];
}

let pessoas = ["Gabriella", "Rafaela", "Khalli", "Max"]
let nomes = greet(pessoas, 2)
console.log("Hello, ",nomes ,"!")
}

//Exercicio 5
function areaDoCirculo(){
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
console.log("Área do círculo:", calculateArea(2));
}
//Exercicio 6
function dataAtual(){
function currentDate(){
    let today = new Date(); //é para criar uma variável local que se chama 'today' com a data atual
    console.log(today); //imprime a data atual no console
}
currentDate();
}

//Exercicio 7
function shadowingBasico(){
    var x = 10;
    function shadowExemple(x){
        return x;
    }
    shadowExemple(20)
    }

//Exercicios 8
function primoSimples(){
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    
    console.log("Primos:");
    console.log("2:", isPrime(2));    // true
    console.log("3:", isPrime(3));    // true
    console.log("4:", isPrime(4));    // false
    console.log("17:", isPrime(17));  // true
    console.log("20:", isPrime(20));  // false
}

//Exercicio 9
function ConversãoDeTemperatura(){
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
    }
    
    //Converter Fahrenheit em Celsius
    function toCelsius(fahrenheit) {
    return (fahrenheit)
    (32) * 5 / 9;
    }
    // Testando as funções
    console.log("25°C em Fahrenheit é:", toFahrenheit(25)); // Deve retornar 77
    console.log("77°F em Celsius é:", toCelsius(77)); // Deve retornar 25
}

//Exercicio 10

function MáximoEmArray(){
// Função para encontrar o maior valor em um array
function getMax(arr) {
    let max = -Infinity; // Valor inicial para o máximo temporário
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
    max = arr[i]; // Atualiza o máximo se o valor atual for maior
    }
    }
    return max; // Retorna o maior valor encontrado
    }   
    // Testando a função
const numeros = [3, 7, 2, 8, 5];
console.log("O maior valor é:", getMax(numeros)); // Deve retornar 8

}  

//Exercicio 11

function mediaDeNotas(){
function average(scores) {

const soma = scores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0); //acumulador pra guardar o valor da primeira nota da array e a o valor atual pra adicionar a nova 
return soma / scores.length; //length para pegar a quantia de notas para dividir
}
      
const scores = [8, 7.5, 9, 10];
const media = average(scores);
console.log(media);
}

//Exercicio 12

function construcaoNomeCompleto(){
    function fullName(firstName, lastName) {
    
        return "Khallil" + "Senra";
    }
    
        console.log(fullName);
}

//Exercicio 13

function chamadasEncadeadas(){
    const double = n => n * 2;
    const quadruple = n => double(double(n));
    
    // Testando a função
    console.log(quadruple(3)); // Saída esperada: 12
}

//Exercicio 14 
function shadowingMedio(){
    
    let mode = "light";

function toggleMode(mode) {
    let newMode = (mode === "light") ? "dark" : "light";
    console.log(newMode);
    return newMode;
}

console.log("\nexercício 14:")
console.log(mode);
toggleMode(mode);

}