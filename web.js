var number1 = 2;

// function are defined for reusability 
// define once and use it a lot of Times 
// inputs we need for a function are called as parameters

function Powerof2(num) {
    var answer = num * num;
    return answer;
}

// what we pass to function is called as argument
// hence number1 and 4 becomes argument

var p2 = Powerof2(number1);
var p4 = Powerof2(4);
document.write(p2);
// document.parseInt(square4);