const ratings = document.querySelectorAll('.card__rating-button');
const submit = document.querySelector('.card__submit');

let clickedRating = 0;

ratings.forEach(rating => {
    rating.addEventListener("click", () => {
        clickedRating = rating.innerText;
        rating.style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating.style.color = 'hsl(0, 0%, 100%)';
        rating.previousElementSibling.style.backgroundColor = 'hsl(217, 12%, 63%)';
        rating.previousElementSibling.style.color = 'hsl(0, 0%, 100%)';
        console.log(clickedRating);
    })
})

submit.addEventListener("click", () => {
    const cardStates = document.querySelectorAll('.card');
    console.log(cardStates);
    cardStates[0].classList.toggle('visibility');
    cardStates[1].classList.toggle('visibility');

    text = document.querySelector('.selected');
    text.textContent = `You selected ${clickedRating} out of 5`;
    
})