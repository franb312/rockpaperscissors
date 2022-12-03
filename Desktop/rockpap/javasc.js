function playerChoice(){
     document.querySelector('#rock');
    rock.addEventListener('click', function (e) {
        e.target.style.border='solid blue'; playerChoice= 'ROCK'
      });
     document.querySelector('#paper');
    paper.addEventListener('click', function (e) {
        e.target.style.border='solid blue'; playerChoice= "PAPER"
      });
     document.querySelector('#scissors');
      scissors.addEventListener('click', function (e) {
          e.target.style.border='solid blue'; playerChoice= "SCISSORS"
        });
        
    }  
playerChoice()

function getComputerChoice(){
    
    document.querySelector('#play')
    play.addEventListener('click', function (e){
    
        let select = Math.floor(Math.random()*3)
        getComputerChoice=select
        if (select === 0){
            document.getElementById('one').style.borderRadius='100px'; return 'ROCK'
        } else if (select === 1){
            document.getElementById('two').style.borderRadius='100px'; return 'PAPER'
        } else if (select === 2){
            document.getElementById('three').style.borderRadius='100px';  return 'SCISSORS'
                }
          return select     
        
    
})}
getComputerChoice()

function round(){
document.querySelector('#play')
play.addEventListener('click', function (e){

   if ( getComputerChoice === 2 && playerChoice=== 'ROCK'){
   console.log('Player wins!'); document.querySelector('#playerScore').innerHTML ++

} else if (getComputerChoice === 2 && playerChoice === 'PAPER')
{console.log('Computer wins!'); document.querySelector('#computerScore').innerHTML ++  

} else if (getComputerChoice === 2 && playerChoice === 'SCISSORS')
{console.log('It\'s a draw!')
} else if (getComputerChoice === 0 && playerChoice === 'ROCK'){
   console.log('It\'s a draw!')
} else if (getComputerChoice === 0 && playerChoice === 'PAPER'){
    console.log('Player wins!'); document.querySelector('#playerScore').innerHTML ++
} else if (getComputerChoice === 0 && playerChoice === 'SCISSORS'){
   console.log('Computer wins!'); document.querySelector('#computerScore').innerHTML ++ 
} else if (getComputerChoice === 1 && playerChoice === 'ROCK'){
  console.log('Computer wins!'); document.querySelector('#computerScore').innerHTML ++ 
} else if (getComputerChoice === 1 && playerChoice === 'PAPER'){
  console.log('It\'s a draw!')
} else if (getComputerChoice === 1 && playerChoice === 'SCISSORS'){
   console.log('Player wins!'); document.querySelector('#playerScore').innerHTML ++
} else {
   console.log('That\'s not an option! Choose Rock, Paper or Scissors!')
}}
)}
round()



