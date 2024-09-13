let player = {
    name: "Jonathan",
    chips: 100
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let gameOver = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let dealerEl = document.getElementById("dealer-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    if (gameOver) {
        gameOver = false
        player.chips -= 10
        playerEl.textContent = player.name + ": $" + player.chips
        dealerEl.textContent = "Dealer sum:"
        isAlive = true
        hasBlackJack = false
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        gameOver = true
        player.chips += 20
        playerEl.textContent = player.name + ": $" + player.chips
    } else {
        message = "Bust!"
        isAlive = false
        gameOver = true
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

function stand() {
    if (isAlive && !gameOver) {
        let playerTotal = sum
        let dealerTotal = Math.floor( Math.random()*10 ) + 17
        dealerEl.textContent = "Dealer sum: " + dealerTotal
        if (dealerTotal > playerTotal && dealerTotal < 22) {
            message = "You lose"
        } else if (dealerTotal === playerTotal) {
            message = "Draw"
            player.chips += 10
            playerEl.textContent = player.name + ": $" + player.chips
        } else {
            message = "You win!"
            player.chips += 20
            playerEl.textContent = player.name + ": $" + player.chips
        }
        messageEl.textContent = message
        isAlive = false
        gameOver = true
    }
}
