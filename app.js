let boxes=document.querySelectorAll(".box");
let in1=document.querySelector(".in");
let c=document.querySelector(".in .current-player");
let winner=document.querySelector(".in .winner");
let r=document.querySelector(".reset");
turnx=true;
let count=0;
let p=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
win=false;
let scoreX=0;
let scoreO=0;
let n=document.querySelector(".new-game");

boxes.forEach((box) => {
    box.addEventListener("click", () => {
      in1.classList.remove("in");
      in1.classList.add("a");
      if(turnx===true){
        box.innerHTML="X";
        turnx=false;
        c.innerHTML="O"
        count++;
      }
      else{
        box.innerHTML="O";
        turnx=true;
        c.innerHTML="X"
        count++
      }
      box.disabled =true;
      console.log(box.disabled);
      checkWinner();
    });
  }
);  

function checkWinner(){
  p.forEach((a)=>{
    if(boxes[a[0]].innerHTML!=="" && boxes[a[1]].innerHTML!=="" && boxes[a[2]].innerHTML!==""){
      if(boxes[a[0]].innerHTML===boxes[a[1]].innerHTML && boxes[a[1]].innerHTML===boxes[a[2]].innerHTML){
        winner.innerHTML=boxes[a[0]].innerHTML;
        win=true;
        if (boxes[a[0]].innerHTML === "X") {
          scoreX++;
          document.querySelector(".score-x").innerHTML = scoreX;
        } else if (boxes[a[0]].innerHTML === "O") {
          scoreO++;
          document.querySelector(".score-o").innerHTML = scoreO;
        }
      }

      }  

    });
  if(count===9 && win===false){
    winner.innerHTML="Draw";
    win=true;
  }
  if(win===true){
    boxes.forEach((box) => {
        box.disabled =true;
    });}}

r.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerHTML="";
    box.disabled =false;
  });
  in1.classList.add("in");
  c.innerHTML="";
  winner.innerHTML="";
  win=false;
  count=0;
  turnx=true;}
  );
n.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.innerHTML="";
      box.disabled =false;
    });
    in1.classList.add("in");
    c.innerHTML="";
    winner.innerHTML="";
    win=false;
    count=0;
    turnx=true;
    scoreX = 0;
    scoreO = 0;
    document.querySelector(".score-x").innerHTML = scoreX;
    document.querySelector(".score-o").innerHTML = scoreO;}
    );