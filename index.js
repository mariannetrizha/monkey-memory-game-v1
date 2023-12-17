

const form =  document.querySelector("form")
const submitBtn = document.getElementById("submitCardNumbers")
const section = document.querySelector("section")
const cards = []
submitBtn.addEventListener("click", function(e){
    e.preventDefault()
    generateCards()
})

function generateCards() {
    const input = document.querySelector("input")
    const pairs = parseInt(input.value)
    for (let i=1;i <= pairs; i ++) {
    cards.push({content:i, copy: '1st'})
    cards.push({content:i, copy: '2nd'}) 
    }
    shuffle(cards)
    layCards(cards)
}


    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    function layCards(array){
        form.innerHTML = `<button id="restart-game">Restart game</button>`
        const laidCards = array.map((element)=>{
        return (
            `<div class= "card--container" id= "div-${element.copy}-${element.content}" data-copy="${element.copy}" data-content = "${element.content}">

            <p id = "p-${element.copy}-${element.content}">${element.content}</p>
            </div>`)
        }).join("")
    return (
        section.innerHTML = laidCards)
        const restartGame = document.getElementById("restartGame")
        restartGame.addEventListener("click", function(){
    ` <input type=number placeholder="Enter how many pairs of cards you want to see">
            <button id="submitCardNumbers">Submit</button>`
})

    }
    



const cardCopies =[]
const cardContents=[]

section.addEventListener("click", function(e){

const cardContainer = e.target.closest('.card--container')
 if (cardContainer) {
    cardContainer.classList.toggle('flip')
    const cardCopy = e.target.closest('.card--container').dataset.copy
    const cardContent = e.target.closest('.card--container').dataset.content

    cardContents.push(cardContent)
    cardCopies.push(cardCopy)

  if (cardContents.length === 2) {
       let previousCardId = `div-${cardCopies[0]}-${cardContents[0]}`;
        let currentCardId = `div-${cardCopies[1]}-${cardContents[1]}`;
        let previousCard = document.getElementById(previousCardId).querySelector(`#p-${cardCopies[0]}-${cardContents[0]}`);
        let currentCard = document.getElementById(currentCardId).querySelector(`#p-${cardCopies[1]}-${cardContents[1]}`);
        
        if (cardContents[0]===cardContents[1]) {
        previousCard.style.display = "flex"
        currentCard.style.display = "flex"
        cardContents.splice(0,2) 
        cardCopies.splice(0,2)
        } else {
        previousCard.style.display = "none"
        currentCard.style.display = "flex"
        cardContents.splice(0,1)
        cardCopies.splice(0,1)   
        }

        } else if (cardContents.length === 1) {
            let currentCard = document.getElementById(`div-${cardCopies}-${cardContents}`).querySelector(`#p-${cardCopies}-${cardContents}`)
            currentCard.style.display = "block"
            
    }
  }
})
