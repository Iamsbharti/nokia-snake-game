document.addEventListener('DomContentLoaded',()=>{
    //get elements from the index
    const squares=document.querySelectorAll('.grid div')
    const score=document.querySelector('span')
    const startBtn=document.querySelector('button')

    //Initialize Game components
    const width=10 //used to move snake head upon key strokes
    let currentIndex=0 //the first div in our grid
    let appleIndex=0 //apple at first div in our grid
    let currentSnake=[2,1,0] //3rd div in our grid 2 as HEAD 0 as TAIL and all 1's being the body
    let direction=1 //direction in which snake will move
    let score=0
    let speed=0.9
    let intervalTime=0
    let interval=0

    //assign functions to the keystrokes
    function controlled(e){
        squares[currentIndex].classList.remove('snake') //remove class snake from all square

        if(e.keyCode===39){
            direction=1 //on right arrow press ,the snake will go right
        }else if(e.keyCode===38){
            direction=-width //on up arrow press,snake will go back ten div,appearing to go up
        }else if(e.keyCode===37){
            direction=1 //on left arrow press ,snake will go left one div
        }else if(e.keyCode===40){
            direction=+width //on down arrow press ,the HEAD will instantly appear in the dic ten divs from the current position
        }
    }
    //event listener for every key press
    document.addEventListener('keyup',controlled)

})