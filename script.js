let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
    return Math.floor(Math.random()*10);  
};

//step 4
const compareGuesses = (human, computer, target) => {
 const humanScr = Math.abs(target - human);
 const computerScr = Math.abs (target - computer);
 return humanScr <= computerScr;
 // if (humanScr <= computerScr;){
 //     console.log('human player wins.')
 //     }
 // else{
 //   console.log('computer wins.')
 // }
}

//step 5
const updateScore = winner=>{
 if(winner === 'human'){
   humanScore ++;
 } else if (winner === 'computer') {
   computerScore ++;
 }
};

//step 6
const advanceRound = () =>{
 return currentRoundNumber++;
}
