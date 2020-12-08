const p1 = {
    score: 0,
    button: document.querySelector("#p1btn"),
    display: document.querySelector("#p1Display")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2btn"),
    display: document.querySelector("#p2Display")
}

const resetBtn = document.querySelector("#reset");
const choiceBtn = document.querySelector("#playTo");
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("win");
            opponent.display.classList.add("lose");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
p1.button.addEventListener("click", function () {
    updateScores(p1, p2);
})

p2.button.addEventListener("click", function () {
    updateScores(p2, p1);
})

choiceBtn.addEventListener("change", function (e) {
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    for (let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.textContent = 0;
        p.display.classList.remove("win", "lose");
        p.button.disabled = false;
    }
}

/* function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.display.classList.remove("win", "lose");
    p2.display.classList.remove("win", "lose");
    p1.button.disabled = false;
    p2.button.disabled = false;
} */