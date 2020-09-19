//yourChoice is the object we click
function rpsGame(yourChoice){
    console.log(yourChoice);
    //prints the element we click on the console
    //yourChoice.id -> prints the IDrr
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice, botChoice);
    console.log('you choose',humanChoice);
    alert("you choose " + humanChoice + " and bot choose " + botChoice);
    message = finalMessage(results); //{"message": "you won!","color":"green"}
    //the message will return a dictionary (object in JS), not a string
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
    
}

function randToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return['rock','paper','scissor'][number]
}

function decideWinner(humanChoice, botChoice){
    var rpsDatabase = {
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1, 'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'scissor': 0.5,'rock':0},
    }
    var yourScore = rpsDatabase[humanChoice][botChoice];
    var botScore = rpsDatabase[botChoice][humanChoice];
    return [yourScore,botScore];//<-returns an array
}

function finalMessage([yourScore,botScore]){
    if(yourScore == 0){
        return {'message': 'you lost!', 'color':'red'};
    } else if(yourScore == 0.5){
        return {'message': 'you tied', 'color':'yellow'}
    } else{
        return {'message': 'you won', 'color':'green'}
    }
}

function rpsFrontEnd(humanImgChoice,botImgChoice, finalMessage){
    var imagesDataBase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src,
    }
    //let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
}