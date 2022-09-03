const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número: ', num => {
    let num1 = 0;
    let num2 = 1;
    let num3 = 0;
    let input = parseInt(num);

    while(input > num3){
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
 
    if(input === 0 || input === 1){
        console.log('O número faz parte da sequência de Fibonacci.');
    } else if(input === num3) {
        console.log('O número faz parte da sequência de Fibonacci.');
    } else {
        console.log('O número digitado não faz parte da sequência de Fibonacci.');
    }
    readline.close();
  });


