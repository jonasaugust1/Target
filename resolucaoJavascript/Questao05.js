const revertString = (str) => {

    const stringArray = str.split('');
    stringArray.reverse();
    const reversedString = stringArray.join('');
    return reversedString;
}

console.log(revertString('jonas'));