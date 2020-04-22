document.addEventListener('DomContentLoaded',()=>{
    //get elements from the index
    const squares=document.querySelectorAll('.grid div')
    const scoreDisplay=document.querySelector('span')
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

    //Start and restart the game
    function startGame(){
        currentSnake.forEach(index=> squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        clearInterval(interval)
        score=0
        //randomApple()
        direction=1
        scoreDisplay.innerText=score
        intervalTime=1000
        currentSnake=[2,1,0]
        currentIndex=0
        currentSnake.forEach(index=> squares[index].classList.add('snake'))
        interval=setInterval(moveOutComes,intervalTime)
    }
    //All the outcomes of the snake movements
    function moveOutComes(){
        //condition for snake hitting border and hitting self
        if(
            (currentSnake[0] + width >= (width*width) && direction === width)|| //if snake hits bottom border
            (currentSnake[0] % width === width-1 && direction === 1)|| //snake hits right wall
            (currentSnake[0] % width === 0 && direction=== -1)|| //snake hits left wall
            (currentSnake[0] - width < 0 && direction === -width)|| //snake hits top wall
            squares[currentSnake[0] + direction].classList.contains('snake')//if snake hits itself
        ){
            return clearInterval(interval) //clear the interval
        }
    }

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