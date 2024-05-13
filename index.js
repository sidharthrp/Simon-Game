
var level = 0;
var cpuChoice = [];
var userChoice = [];
var start = false;


$(document).keydown(function(){    
    if(start===false){
    start = true;
    $("h1").text("Level "+ level);
    sequence();
    }
})


$(".btn").click(function(){

    var choice = $(this).attr("id");
    userChoice.push(choice);
    $("#"+this.id).fadeOut(100).fadeIn(100);
    var btn_sound = new Audio("./sounds/"+this.id+".mp3");
    btn_sound.play();
    console.log("User = "+choice);
    console.log("UserArray = "+userChoice);
    checkAnswer(userChoice.length-1);
})

function sequence(){
    userChoice = [];
    level++;
    $("h1").text("Level "+ level);
    var colourArray = ["green","red","yellow","blue"];
    var randomNo = Math.floor(Math.random()*4);
    currentBox = colourArray[randomNo];
    console.log(currentBox);

    console.log(document.getElementById(currentBox));
    cpuChoice.push(currentBox);
    $("#"+currentBox).fadeOut(100).fadeIn(100);
    var sound = new Audio("./sounds/"+currentBox+".mp3");
    sound.play();

    console.log("Cpu = "+cpuChoice);
    
}

function checkAnswer(currentLevel){
    if(cpuChoice[currentLevel]===userChoice[currentLevel]){
        console.log("Corect");
        if(cpuChoice.length===userChoice.length){
            setTimeout(function(){
                sequence();
            },1000);
        }
    }
    else {
        console.log("Wrong");
        var wrongSound = new Audio("./sounds/wrong.mp3");
        wrongSound.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        gameRestart();      
    }
}

function gameRestart(){
    level = 0;
    cpuChoice = [];
    start = false;  
}