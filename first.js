let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg= document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

let turnO= true;
const winPatterns = 
[
 [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8],
];

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled =true;
    }
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
}

const resetGame= ()=>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO){
            box.innerText ="O";
            box.style.color="#b04190";
            turnO =false;
        }
        else{
            box.innerText ="X";
            box.style.color="#b0413e";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
     });
    });
    
   
    const showWinner= (winner)=>{
    msg.innerText= `Congrats, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    }
    const checkWinner=()=>{
        for(let val of winPatterns){
            let pos1=   boxes[val[0]].innerText;
            let pos2=   boxes[val[1]].innerText;
            let pos3=   boxes[val[2]].innerText;
        
            if(pos1!=="" && pos2!== "" && pos3!==""){
                if(pos1===pos2 && pos2=== pos3){
                    console.log("winner");
                    showWinner(pos1);
                }
            }
        }
    };

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);