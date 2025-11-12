// Rock-Paper-Scissors Logic

function rps(user, computer) {
    if(user === computer) return "draw";

    if(user === 'rock' && computer === 'scissors') return "user wins";
    if(user === 'scissors' && computer === 'rock') return "computer wins";
    if(user === 'paper' && computer === 'rock') return "user wins";

    return "computer";
}

console.log(rps("rock", "scissors")); // user wins
console.log(rps("paper", "rock"));    // user wins
console.log(rps("scissors", "rock")); // computer wins
console.log(rps("rock", "rock"));     // draw