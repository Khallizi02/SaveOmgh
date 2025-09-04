//Exercicio 1

function validateNumber(n) {
    if (typeof n !== 'number') {
      throw new Error("O valor deve ser do tipo 'number'"); // Lança um erro caso seja um número
    } else {
      return true; // Retorna true se não for um número5
    }
  }

//Exercicio 2
  function validateUser(name,age){
    if (name != '' && age >= 0){
        return true;
    } else{
        throw new Error("Deve ter um nome e uma idade valida")
    }
  }

//Exercicio 3

function factorial(n){
  
  if( n == 0 && n == 1){
    return 1;
}else{
    return n * factorial(n-1);
}
}

//Exercicio 4

function countDown(n) {
    if (n <= 0) {
      return;
    }
    console.log(n);
    countDown(n - 1);
  }
  
  countDown(5);

//Exercicio 5

function applyFunction(fn, value) {
    return fn(value);
  }
  const fn = (x) => x * x;
  const result = applyFunction(fn, 5); // Retorna 25
  console.log(result);

//Exercicio 6

const operations = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b
];

const a = 4;
const b = 2;

for (const operation of operations) {
    const result = operation(a, b);
    console.log(result);
}

//Exercicio 7

const greet = function(name){
  return 'Olá, ' + name;
};
console.log(greet('agarra'));

//Exercicio 8

//Exercicio 9

function calculate(a, b, callback) {
    if (typeof callback === 'function') {
      return callback(a, b);
    } else {
      // Retorna um erro ou um valor padrão se o callback não for uma função
      return "O callback deve ser uma função.";
    }
  }
  const soma = (x, y) => x + y;
  const subtracao = (x, y) => x - y;
  
  console.log(calculate(5, 3, soma)); 
  console.log(calculate(10, 2, subtracao)); 

  console.log(calculate(5, 3, "não é uma função")); 

  //Exercicio 10

  function formatMessage(msg,formatter){
    return formatter(msg);
  }

  function toUpper(text){
    return text.touppercase();
  }
  console.log(formatMessage('teste', toUpper));

  //Exercicio 11 

  function fakeRequest(url,callback){
    setTimeout(()=> {
      callback(null, 'OK');
    }, 1000);

    fakeRequest('/api', (err,res) => {
      console.log(res);
    })
  };

  //Exercicio 12

  fakeRequest('/step1', (e, r1) => {
    console.log(r1);})
  fakeRequest('/step2', (e, r2) => {
    console.log(r2);})
    akeRequest('/step3', (e, r3) => {
      console.log(r3);})
  
  //Exercicios 13

  //Exercicio 14

  function conuntertoFive(){
    let count = 1;
    const intervalid = setinterval(() =>{
      console.log(count);
      if(count === 5){
        clearInterval(intervalid);
      }
      count++;
    }, 1000);
  }
  conuntertoFive();

  //Exercicio 15 

  const sum = (a,b) => a+b;
  console.log(sum(a,b));

  //Exercicio 16

  const obj = {
    value: 10,
    saythisArrow: () => {
      console.log(this.value)
    },
    sayThisRegular: function() {
      console.log(this.value);
    }
  };

  obj.saythisArrow();
  obj.sayThisRegular();