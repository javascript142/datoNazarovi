function logIN(){
    let user = document.getElementById('user').value 
    if (user === "green"){
        document.getElementById('result').innerHTML = `welcome ${user}!`;
    }else {
        document.getElementById('result').innerHTML = 'invalid'
    }
}

function typeOne() {
    let mainInput = document.getElementById('mainInput').value;
    document.getElementById('mainInput').value = mainInput + 1;
}
function typeTwo() {
    let mainInput = document.getElementById('mainInput').value;
    document.getElementById('mainInput').value = mainInput + 2;
}

function typeTree() {
    let mainInput = document.getElementById('mainInput').value;
    document.getElementById('mainInput').value = mainInput + 3;
}
function plus() {
    let mainInput = document.getElementById('mainInput').value;
    if (mainInput.length > 0) {
    document.getElementById('mainInput').value = mainInput + "+";
    }
}
function equal(){
    let mainInput = document.getElementById('mainInput').value;
    if (mainInput.includes("+")) {
     let numbers = mainInput.split("+");
     let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + parseInt(numbers[i]);
    }
    document.getElementById("mainInput").value = sum;
}
}


