let play = document.querySelectorAll(".box");
let reset = document.querySelectorAll(".reset");
let newgame = document.querySelectorAll(".new");
let msg1 = document.querySelectorAll(".msgs");
let msg2 = document.querySelectorAll(".msg");
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let player1=true;
play.forEach((box) => {
    box.addEventListener("click",() => {
        if(player1)
        {
            box.innerText="X";
            player1=false;
        }
        else
        {
            box.innerText="O";
            player1=true;
        }
        box.disabled=true;
        winner();
    });
}
);
const show = (winneris) => {
    msg2.innerText = `Congratulations, Winner is ${winneris}`;
    msg1.classList.remove("hide");
    
};
const winner = () => {
    for(let i of win)
    {
        let a = play[i[0]].innerText;
        let b = play[i[1]].innerText;
        let c = play[i[2]].innerText;
        if(a!="" && b!="" && c!="")
        {
            if(a===b && b===c)
            {
                show(a);
                return;
            }
        }
    }
};
