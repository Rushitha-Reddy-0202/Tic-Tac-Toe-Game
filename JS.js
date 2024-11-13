let play = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let playagain = document.querySelector(".plays");
let msg1 = document.querySelector(".msgs");
let msg2 = document.querySelector(".msg");
let ab = document.querySelector(".hello");
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let player1 = true;
let moves = 0;
play.forEach((box) => {
    box.addEventListener("click", () => {
        if (moves === 0) {
            first();
        }
        if (player1) {
            box.innerText = "X";
            player1 = false;
        } else {
            box.innerText = "O";
            player1 = true;
        }

        box.disabled = true;
        moves++;
        winner();
    });
});
const first = () => {
    ab.style.display = 'none';
};
const show = (winneris) => {
    msg2.innerText = `Congratulations, Winner is ${winneris}`;
    msg1.classList.remove("hide");
    disableboxes();
};
const show1 = () => {
    msg2.innerText = `It's a Tie Game!`;
    msg1.classList.remove("hide");
    disableboxes();
};
const winner = () => {
    for (let i of win) {
        let a = play[i[0]].innerText;
        let b = play[i[1]].innerText;
        let c = play[i[2]].innerText;
        if (a !== "" && b !== "" && c !== "") {
            if (a === b && b === c) {
                show(a);
                return;
            }
        }
    }
    if (moves === 9) {
        show1();
    }
};

const disableboxes = () => {
    play.forEach((i) => {
        i.disabled = true;
    });
};

const enableboxes = () => {
    play.forEach((i) => {
        i.disabled = false;
        i.innerText = "";
    });
};
const resetgame = () => {
    player1 = true;
    moves = 0;
    enableboxes();
    msg1.classList.add("hide");
    msg2.innerText = "";
    ab.style.display = 'block';
};
playagain.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
