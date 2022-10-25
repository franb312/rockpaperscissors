function getComputerChoice(){
    let select = Math.floor(Math.random()*3)
    getComputerChoice=select
    if (select === 0){
        console.log('ROCK')
    } else if (select === 1){
        console.log('PAPER')
    } else if (select === 2){
        console.log('SCISSORS')
            }
        return select
    
}
getComputerChoice()

function playerChoice(){
    
    //let select = Math.floor(Math.random ()*3)
    let select=prompt('Rock, Paper or Scissors?').toUpperCase()
    playerChoice=select
    console.log(select)}
playerChoice()
   
function round(){
        if ( getComputerChoice === 2 && playerChoice=== 'ROCK'){
        console.log('Player wins!')

    } else if (getComputerChoice === 2 && playerChoice === 'PAPER')
    {console.log('Computer wins!')

    } else if (getComputerChoice === 2 && playerChoice === 'SCISSORS')
    {console.log('It\'s a draw!')
    } else if (getComputerChoice === 0 && playerChoice === 'ROCK'){
        console.log('It\'s a draw!')
    } else if (getComputerChoice === 0 && playerChoice === 'PAPER'){
        console.log('Player wins!')
    } else if (getComputerChoice === 0 && playerChoice === 'SCISSORS'){
        console.log('Computer wins!')
    } else if (getComputerChoice === 1 && playerChoice === 'ROCK'){
        console.log('Computer wins!')
    } else if (getComputerChoice === 1 && playerChoice === 'PAPER'){
        console.log('It\'s a draw!')
    } else if (getComputerChoice === 1 && playerChoice === 'SCISSORS'){
        console.log('Player wins!')
    } else {
        console.log('That\'s not an option! Choose Rock, Paper or Scissors!')
    }

}
round()