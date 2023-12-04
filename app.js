//iteration-1 declare all the variables 

const boxElments = document.querySelectorAll(".box")
let winningCombination = 
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
]

const finalresult = document.getElementById("message")
const playAgain = document.getElementById("button")
const Result = document.getElementById("result")

var click = 0
let X_chance = []
let O_chance = []
let wonTheGame = 0

//iteration-2 onclick function
boxElments.forEach((el)=>{
    el.addEventListener("click",()=>{
        handleClick(event)
    })
})

function handleClick(e){
    let i = e.target.id
    
    
    let p = document.createElement("p")

    p.setAttribute("id", "text")
    p.style.color = "black"
    boxElments[i-1].append(p)

    if((click)%2===0){
        p.innerHTML = "X"
        X_chance.push(parseInt(i-1))
        Checkresult(winningCombination,X_chance,"X")
    }
    else if((click)%2!==0){
        p.innerHTML = "O"
        O_chance.push(parseInt(i-1))
        Checkresult(winningCombination,O_chance,"O")
    }
    click++

    if(click==9 && wonTheGame==0){
        Result.style.visibility = "visible"
        finalresult.innerHTML = "It's a tie"
    }
}

//iteration-3 result
function Checkresult(winningCombination,attempts,player){
    let count = 0
    let checker = []
    
    for(let i=0;i<winningCombination.length;i++){
        if(Array.isArray(winningCombination[i])){
            Checkresult(winningCombination[i],attempts,player) //recursive function
        }
        else{
            if(attempts.includes(winningCombination[i])){
                checker.push(true)
                count++
            }
            else{
                checker.push(false)
            }
        }
    }

    if(checker.every(el=>el===true)&& count>2){
        Result.style.visibility = "visible"
        finalresult.innerHTML = "The Winner is "+player+"!"
        wonTheGame = 1
    }
}

//iteration-4 restart function
playAgain.onclick=()=>{
    window.location.reload()
}