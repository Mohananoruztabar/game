const cards = document.querySelectorAll('.card')
let cardOne, cardTwo
let disableDeck = false
let matchedCard = 0

function flipCard(e) {
    let clickedCard = e.target
    if (clickedCard !== cardOne && !disableDeck) {
        clickedCard.classList.add('flip');
        if (!cardOne) {
            return cardOne = clickedCard
        }
        cardTwo = clickedCard
        disableDeck = true

        let cardOneImg = cardOne.querySelector("img").src,
        cardTwoImg = cardTwo.querySelector("img").src
        matchCards(cardOneImg , cardTwoImg)
    }
}
function matchCards(img1, img2){
    if(img1 === img2){
        matchedCard++ ;
        if(matchedCard == 8){
           setTimeout(() => {
            return shuffleCard()
           }, 1000);
        }
        cardOne.removeEventListener('click' , flipCard)
        cardTwo.removeEventListener('click' , flipCard)
        cardOne = cardTwo = ""
        return disableDeck = false ;
    }

    setTimeout(() => {
        cardOne.classList.add('shake')
        cardTwo.classList.add('shake')
    }, 400);
     setTimeout(() => {
        cardOne.classList.remove('shake' , 'flip')
        cardTwo.classList.remove('shake' , 'flip')
        cardOne = cardTwo = ""
        disableDeck = false ;
    }, 1200);
}

function shuffleCard(){
    matchedCard = 0
    cardOne = cardTwo = ''
    disableDeck = false
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]
    arr.sort(() => Math.random() > 0.5 ? 1 : -1)

    cards.forEach((card , i) => {
    card.classList.remove('flip')
    let imgTag = card.querySelector('img')
    imgTag.src = `assets/img/img-${arr[i]}.png`
    card.addEventListener('click', flipCard)
})
}


shuffleCard();

cards.forEach(card =>{
    card.addEventListener('click', flipCard)
})