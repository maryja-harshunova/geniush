const sounds = document.querySelectorAll('.sounds');
const pads = document.querySelectorAll('.pads div');
const animationZone = document.querySelector('.animation-zone');
const colors = [
    "#a52a2a",
    "#33b163",
    "#292bbd",
    "#eedf15",
    "#1571eb"
]

console.log(sounds);
console.log(pads);

for ( let i = 0 ; i < pads.length; i += 1 ) {

    pads[i].addEventListener('click',playSound(i));
}

function playSound(item) { 
    return function () {
        if(sounds[item].loop){
            sounds[item].pause()
            sounds[item].currentTime = 0;
            sounds[item].loop = false;
        }else{
        sounds[item].play()
        sounds[item].currentTime = 0;
        sounds[item].loop = true;
        createBubble(item);
    }
    }
}


function createBubble(item){
    let bubble = document.createElement('div');
    animationZone.appendChild(bubble);
    bubble.style.backgroundСolor = colors[item];
    bubble.style.animation = "jump 5s"; 
    bubble.addEventListener('animationend', function(){ animationZone.removeChild(bubble)})
}