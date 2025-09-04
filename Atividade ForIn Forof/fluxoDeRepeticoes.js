
function ex1() {

    let nomes = ["Rayane", "Saori", "Vaninha"];
for (let nome of nomes) {
  console.log(nome);
}

}

function ex2() {

    let numeros = [10, 3, 200, 77, 51];
let valorSoma = 0;
for (let i = 0; i < 5; i++) {
    valorSoma += numeros[i];
}
console.log(valorSoma); 

}

function ex3(){

    let pessoa = { 
        nome: "Rayane", 
        idade: 24, 
        cidade: "Vinhosa"
 };
for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

}
 
function ex4(){

    let newFx = {
        integrante1: "Saori",
        integrante2: "Vaninha",
        integrante3: "Diana"
    };

    let quantia = 0;

    for (let chave in newFx){
        quantia++;
    };

console.log(`O objeteo tem ${quantia} de integrantes`)

}

function ex5(){
    let nomes = ["خالي","غابي","رافائيلا"]; 
    for(let array of nomes){
        console.log(nomes[0], " " ,nomes[1], " " ,nomes[5] );
    }
}

function ex6(){
    let frutas = [7, "pitaya", true, 4, false, "tamarindo"];
    for (let objeto of frutas) {
        console.log(typeof objeto);
    }
}