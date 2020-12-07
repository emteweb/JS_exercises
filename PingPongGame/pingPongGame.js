const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const p1btn = document.querySelector("#p1btn");
const p2btn = document.querySelector("#p2btn");
const resetBtn = document.querySelector("#reset");
const choiceBtn = document.querySelector("#playTo");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1btn.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("win");
            p2Display.classList.add("lose");
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2btn.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add("win");
            p1Display.classList.add("lose");
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})

choiceBtn.addEventListener("change", function (e) {
    winningScore = parseInt(this.value);
    reset();
})


resetBtn.addEventListener("click", reset)

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    isGameOver = false;
    p1Display.classList.remove("win", "lose");
    p2Display.classList.remove("win", "lose");
    p1btn.disabled = false;
    p2btn.disabled = false;
}