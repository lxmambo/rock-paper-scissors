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

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    //important use of single and double quotes in the src attribute
    humanDiv.innerHTML = "<img src='" + imagesDataBase[humanImgChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDataBase[botImgChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
