var numberOfDrums = document.querySelectorAll(".drum").length;
console.log(numberOfDrums);

for(var i=0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        soundHandle(buttonInnerHTML);
        clickAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keypress", function(event){
    soundHandle(event.key);
    clickAnimation(event.key);
})

function soundHandle(key){
    switch (key) {
        case "w":
            var newAudio1 = new Audio ("/crash.mp3");
            newAudio1.play();
            break;
        case "a": 
            var newAudio2 = new Audio ("/kick-bass.mp3");
            newAudio2.play();
            break;
        case "s":
            var newAudio3 = new Audio ("/snare.mp3");
            newAudio3.play();
            break;
        case "d":
            var newAudio4 = new Audio ("/tom-1.mp3");
            newAudio4.play();
            break;
        case "j":
            var newAudio5 = new Audio ("/tom-2mp3");
            newAudio5.play();
            break;
        case "k":
            var newAudio6 = new Audio ("/tom-3.mp3");
            newAudio6.play();
            break;
        case "l":
            var newAudio7 = new Audio ("/tom-4.mp3");
            newAudio7.play();
            break;
        default:
            console.log(buttonInnerHTML)
            break;
    }
}


function clickAnimation(key){
    var activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}