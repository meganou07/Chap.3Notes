const readLine = require('readline-sync')

let diceRolled = [];
let character = {
//empty for now
}

function rolld6(){
    return Math.ceil(Math.random()*6)
}
console.log(rolld6())

function rollDice(amount, list){
    for(let i=0; i<amount; i++){
        let roll= rolld6();
        console.log(`You rolled a ${roll}!`)
        list.push(roll)

    }

}

function sum(list){
    let sum=0;
    for (let i=0; i<list.length; i++){
        sum += list[i];
    }
    return sum;
}

function createChar(list){
character.name = readLine.question("Enter Character Name: ");
    console.log('Rolling STR')
    character.strength= rollStat(diceRolled);
    console.log('Rolling DEX')
    character.dexterity= rollStat(diceRolled);
    console.log('Rolling CON')
    character.constitution= rollStat(diceRolled);
    console.log('Rolling INT')
    character.intelligence= rollStat(diceRolled);
    console.log('Rolling WIS')
    character.wisdom= rollStat(diceRolled);
    console.log('Rolling CHA')
    character.charisma= rollStat(diceRolled);
    console.log(character)
}``

function displayChar(char){
    console.log(`Name: ${char.name}`);
    console.log(`STR: ${char.strength}`);
    console.log(`DEX: ${char.dexterity}`);
    console.log(`CON: ${char.constitution}`);
    console.log(`INT: ${char.intelligence}`);
    console.log(`WIS: ${char.wisdom}`);
    console.log(`CHA: ${char.charisma}`);
}



