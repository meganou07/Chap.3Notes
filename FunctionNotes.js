//Functions Notes
//Step 1 - Define the function
function sayHello(){
    console.log("Hello");
}
//Step 2 - Call (use) the function
sayHello();
sayHello();
sayHello();
sayHello();

function printMax(){
    let x = 6;
    let y = 29;
    if (x>y){
        console.log('the larger number is ${x}');
    } else {
         console.log('the larger number is ${y}');
    }
}

printMax();

function printMax(x, y){
            if (x>y){
                console.log('the larger number is ${x');
            } else {
                console.log('the larger number is ${y}');
            }
}

printMax(x:8,y:21);
printMax(x:7,y:-21);
printMax(x:2,y:2);
printMax(x:-8,y:21);

function sum(number1, number2){

    console.log(`${number1}+${number2}=${number1+number2}`);

}

sum(7, 12);
sum(8, 5);

