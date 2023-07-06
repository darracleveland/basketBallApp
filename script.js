let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

let freeShot = document.getElementById("free-shot")
let basketBall = document.getElementById("basket-ball")
let travel = 0

function trash() {
    travel += 1
    basketBall.textContent = travel
}

function airball() {
    let totalPoints = travel + " - "
    freeShot.textContent += totalPoints
    basketBall.textContent = 0
    travel = 0
}


