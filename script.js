let box = document.querySelectorAll('.box')
let turnDisplay = document.querySelector('h2')
let resetBtn = document.getElementById('resetBtn')
let winner = document.querySelector('.winner')

let turn = 'X'

// change turn after each click
function changeTurn(){
    if(turn == 'X') turn = 'O'
    else turn = 'X'
    turnDisplay.textContent = 'Turn of - '+turn
}

// reset all
function resetAll(){
    gotWinner = null

    // reseting all boxes
    let boxes = document.querySelectorAll('.box')
    boxes.forEach(function(box){
        box.innerHTML = ''
        box.style.animation = 'none'
        box.style.pointerEvents = 'auto';
        winner.style.display = 'none'
    })
}

// check winner
let checkWinner = () =>{
    let boxes = document.querySelectorAll('.box')

    if(boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML && boxes[0].innerHTML != ''){ 
        boxes[0].style.animation = 'winnerColorChange 1s linear 1'
        boxes[1].style.animation = 'winnerColorChange 1s linear 1'
        boxes[2].style.animation = 'winnerColorChange 1s linear 1'
        winner.style.display = 'block'
        winner.childNodes[1].textContent = 'Winner is '+boxes[0].innerHTML
        return boxes[0].innerHTML
    }
    else if(boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML == boxes[5].innerHTML && boxes[3].innerHTML != ''){
        boxes[3].style.animation = 'winnerColorChange 1s linear 1'
        boxes[4].style.animation = 'winnerColorChange 1s linear 1'
        boxes[5].style.animation = 'winnerColorChange 1s linear 1'
        winner.style.display = 'block'
        winner.childNodes[1].textContent = 'Winner is '+boxes[3].innerHTML
        return boxes[3].innerHTML
    }
    else if(boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML && boxes[6].innerHTML != ''){
        boxes[6].style.animation = 'winnerColorChange 1s linear 1'
        boxes[7].style.animation = 'winnerColorChange 1s linear 1'
        boxes[8].style.animation = 'winnerColorChange 1s linear 1'
        winner.style.display = 'block'
        winner.childNodes[1].textContent = 'Winner is '+boxes[6].innerHTML
        return boxes[6].innerHTML
    }
    else if(boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML && boxes[0].innerHTML != ''){
        boxes[0].style.animation = 'winnerColorChange 1s linear 1'
        boxes[3].style.animation = 'winnerColorChange 1s linear 1'
        boxes[6].style.animation = 'winnerColorChange 1s linear 1'
        winner.style.display = 'block'
        winner.childNodes[1].textContent = 'Winner is '+boxes[0].innerHTML
        return boxes[0].innerHTML
    }
    else if(boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML && boxes[1].innerHTML != ''){
        boxes[1].style.animation = 'winnerColorChange 1s linear 1'
        boxes[4].style.animation = 'winnerColorChange 1s linear 1'
        boxes[7].style.animation = 'winnerColorChange 1s linear 1'
        winner.style.display = 'block'
        winner.childNodes[1].textContent = 'Winner is '+boxes[1].innerHTML
        return boxes[1].innerHTML
    }
    else if(boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML && boxes[2].innerHTML != ''){
        boxes[2].style.animation = 'winnerColorChange 1s linear 1'
        boxes[5].style.animation = 'winnerColorChange 1s linear 1'
        boxes[8].style.animation = 'winnerColorChange 1s linear 1'
        winner.style.display = 'block'
        winner.childNodes[1].textContent = 'Winner is '+boxes[2].innerHTML
        return boxes[2].innerHTML
    }
    else if(boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML && boxes[2].innerHTML != ''){
        boxes[2].style.animation = 'winnerColorChange 1s linear 1'
        boxes[4].style.animation = 'winnerColorChange 1s linear 1'
        boxes[6].style.animation = 'winnerColorChange 1s linear 1'
        winner.style.display = 'block'
        winner.childNodes[1].textContent = 'Winner is '+boxes[2].innerHTML
        return boxes[2].innerHTML
    }
    else if(boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML && boxes[0].innerHTML != ''){
        boxes[0].style.animation = 'winnerColorChange 1s linear 1'
        boxes[4].style.animation = 'winnerColorChange 1s linear 1'
        boxes[8].style.animation = 'winnerColorChange 1s linear 1'
        winner.style.display = 'block'
        winner.childNodes[1].textContent = 'Winner is '+boxes[0].innerHTML
        return boxes[0].innerHTML
    }
}

// main logic
let gotWinner = null
box.forEach(function(eachBox){   
    eachBox.addEventListener('click',function(){
        
        // restricting for click if winner got
        if(gotWinner == null){
            eachBox.innerHTML = turn
            gotWinner = checkWinner()
            changeTurn()
            eachBox.style.pointerEvents = 'none';
        }
    })
})

//  reset all
resetBtn.addEventListener('click',() =>{
    resetAll()
})