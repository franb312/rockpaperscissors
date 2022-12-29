function playerChoice(){
     document.querySelector('#rock');
    rock.addEventListener('click', function (e) {
        
        document.getElementById('rock').style.border ='solid #BB4A4C 5px';
        document.getElementById('rock').style.padding='5px'; playerChoice= 'ROCK';
      });
     document.querySelector('#paper');
    paper.addEventListener('click', function (e) {
        
        document.getElementById('paper').style.border ='solid #f1c40f 5px'
        document.getElementById('paper').style.padding='5px'; playerChoice= "PAPER"
      });
     document.querySelector('#scissors');
      scissors.addEventListener('click', function (e) {
        
        document.getElementById('scissors').style.border ='solid #54a2d3 5px'
        document.getElementById('scissors').style.padding='5px'; playerChoice= "SCISSORS"
        });
        
    }  
playerChoice()

function getComputerChoice(){
    
    document.querySelector('#play')
    play.addEventListener('click', function (e){
    
        let select = Math.floor(Math.random()*3)
        getComputerChoice=select
        if (select === 0){
            document.getElementById('one').style.border='solid #BB4A4C 5px'; return 'ROCK';
           
        } else if (select === 1){
            document.getElementById('two').style.border='solid #f1c40f 5px'; return 'PAPER'
        } else if (select === 2){
            document.getElementById('three').style.border='solid #54a2d3 5px';  return 'SCISSORS'
                }
          return select     
        
    
})}
getComputerChoice()

function round(){
document.querySelector('#play')
play.addEventListener('click', function (e){

   if ( getComputerChoice === 2 && playerChoice=== 'ROCK'){
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", 'result')
    var newContent = document.createElement("div");
    newContent.setAttribute('id','result-text')
    newContent.setAttribute('text','Player wins!')
    newDiv.appendChild(newContent); 
    var newContent2 = document.createElement("button")
    newContent2.setAttribute("id", "clos")
    newDiv.appendChild(newContent2)
    var currentDiv = document.getElementById("result");
    document.body.insertBefore(newDiv, currentDiv);
    document.querySelector('#clos');
    clos.addEventListener('click', function (e){
      const element= document.getElementById('result')
      element.remove()
      document.getElementById('rock').style.removeProperty('border')
      document.getElementById('three').style.removeProperty('border')
      playerChoice=null
    }) 
      document.querySelector('#playerScore').innerHTML ++; 
    

      
    
    
  

    
} else if (getComputerChoice === 2 && playerChoice === 'PAPER'){
  var newDiv = document.createElement("div");
newDiv.setAttribute("id", 'result')
var newContent = document.createTextNode("COMPUTER WINS!");
newDiv.appendChild(newContent); 
var newContent2 = document.createElement("button")
newContent2.setAttribute("id", "clos")
newDiv.appendChild(newContent2)
var currentDiv = document.getElementById("result");
document.body.insertBefore(newDiv, currentDiv);
document.querySelector('#close');
clos.addEventListener('click', function (e){
  const element= document.getElementById('result')
  element.remove()
  document.getElementById('paper').style.removeProperty('border')
  document.getElementById('three').style.removeProperty('border')
  playerChoice=null


}); document.querySelector('#computerScore').innerHTML ++ 

} else if (getComputerChoice === 2 && playerChoice === 'SCISSORS'){
  var newDiv = document.createElement("div");
newDiv.setAttribute("id", 'result')
var newContent = document.createTextNode("IT'S A DRAW!");
newDiv.appendChild(newContent); 
var newContent2 = document.createElement("button")
newContent2.setAttribute("id", "clos")
newDiv.appendChild(newContent2)
var currentDiv = document.getElementById("result");
document.body.insertBefore(newDiv, currentDiv);

document.querySelector('#close');
clos.addEventListener('click', function (e){
  const element= document.getElementById('result')
  element.remove()
  document.getElementById('scissors').style.removeProperty('border')
  document.getElementById('three').style.removeProperty('border')
  playerChoice=null

})


} else if (getComputerChoice === 0 && playerChoice === 'ROCK'){
  var newDiv = document.createElement("div");
newDiv.setAttribute("id", 'result')
var newContent = document.createTextNode("IT'S A DRAW!");
newDiv.appendChild(newContent); 
var newContent2 = document.createElement("button")
newContent2.setAttribute("id", "clos")
newDiv.appendChild(newContent2)
var currentDiv = document.getElementById("result");
document.body.insertBefore(newDiv, currentDiv);
document.querySelector('#close');
clos.addEventListener('click', function (e){
  const element= document.getElementById('result')
  element.remove()
  document.getElementById('rock').style.removeProperty('border')
  document.getElementById('one').style.removeProperty('border')
  playerChoice=null
})

} else if (getComputerChoice === 0 && playerChoice === 'PAPER'){
  var newDiv = document.createElement("div");
    newDiv.setAttribute("id", 'result')
  var newContent = document.createTextNode("PLAYER WINS!");
    newDiv.appendChild(newContent); 
  var newContent2 = document.createElement("button")
    newContent2.setAttribute("id", "clos")
    newDiv.appendChild(newContent2)
  var currentDiv = document.getElementById("result");
    document.body.insertBefore(newDiv, currentDiv);
    document.querySelector('#close');
    clos.addEventListener('click', function (e){
    const element= document.getElementById('result')
  element.remove()
  document.getElementById('paper').style.removeProperty('border')
  document.getElementById('one').style.removeProperty('border')
  playerChoice=null
}); document.querySelector('#playerScore').innerHTML ++

} else if (getComputerChoice === 0 && playerChoice === 'SCISSORS'){
  var newDiv = document.createElement("div");
newDiv.setAttribute("id", 'result')
var newContent = document.createTextNode("COMPUTER WINS!");
newDiv.appendChild(newContent); 
var newContent2 = document.createElement("button")
newContent2.setAttribute("id", "clos")
newDiv.appendChild(newContent2)
var currentDiv = document.getElementById("result");
document.body.insertBefore(newDiv, currentDiv);
document.querySelector('#close');
clos.addEventListener('click', function (e){
  const element= document.getElementById('result')
  element.remove()
  document.getElementById('scissors').style.removeProperty('border')
  document.getElementById('one').style.removeProperty('border')
  playerChoice=null
}); document.querySelector('#computerScore').innerHTML ++ 

} else if (getComputerChoice === 1 && playerChoice === 'ROCK'){
  var newDiv = document.createElement("div");
newDiv.setAttribute("id", 'result')
var newContent = document.createTextNode("COMPUTER WINS!");
newDiv.appendChild(newContent); 
var newContent2 = document.createElement("button")
newContent2.setAttribute("id", "clos")
newDiv.appendChild(newContent2)
var currentDiv = document.getElementById("result");
document.body.insertBefore(newDiv, currentDiv);
document.querySelector('#close');
clos.addEventListener('click', function (e){
  const element= document.getElementById('result')
  element.remove()
  document.getElementById('rock').style.removeProperty('border')
  document.getElementById('two').style.removeProperty('border')
  playerChoice=null
}); document.querySelector('#computerScore').innerHTML ++ 

} else if (getComputerChoice === 1 && playerChoice === 'PAPER'){
  var newDiv = document.createElement("div");
newDiv.setAttribute("id", 'result')
var newContent = document.createTextNode("IT'S A DRAW!");
newDiv.appendChild(newContent); 
var newContent2 = document.createElement("button")
newContent2.setAttribute("id", "clos")
newDiv.appendChild(newContent2)
var currentDiv = document.getElementById("result");
document.body.insertBefore(newDiv, currentDiv);
document.querySelector('#close');
clos.addEventListener('click', function (e){
  const element= document.getElementById('result')
  element.remove()
  document.getElementById('paper').style.removeProperty('border')
  document.getElementById('two').style.removeProperty('border')
  playerChoice=null
})

} else if (getComputerChoice === 1 && playerChoice === 'SCISSORS'){
  var newDiv = document.createElement("div");
newDiv.setAttribute("id", 'result')
var newContent = document.createTextNode("PLAYER WINS!");
newDiv.appendChild(newContent); 
var newContent2 = document.createElement("button")
newContent2.setAttribute("id", "clos")
newDiv.appendChild(newContent2)
var currentDiv = document.getElementById("result");
document.body.insertBefore(newDiv, currentDiv);
document.querySelector('#close');
clos.addEventListener('click', function (e){
  const element= document.getElementById('result')
  element.remove()
  document.getElementById('scissors').style.removeProperty('border')
  document.getElementById('two').style.removeProperty('border')
  playerChoice=null
}); document.querySelector('#playerScore').innerHTML ++

} else {var newDiv = document.createElement("div");
newDiv.setAttribute("id", 'result')
var newContent = document.createTextNode("Choose Rock, Paper or Scissors!");
newDiv.appendChild(newContent); 
var newContent2 = document.createElement("button")
newContent2.setAttribute("id", "clos")
newDiv.appendChild(newContent2)
var currentDiv = document.getElementById("result");
document.body.insertBefore(newDiv, currentDiv);
document.querySelector('#close');
clos.addEventListener('click', function (e){
  const element= document.getElementById('result')
  element.remove()
  document.getElementById('one').style.removeProperty('border')
  document.getElementById('two').style.removeProperty('border')
  document.getElementById('three').style.removeProperty('border')
  playerChoice=null
})
}
})}

round()

function reload(){
    document.querySelector('#rematch')
    rematch.addEventListener('click', function (e){
        window.location = window.location
    })}
reload()


  





