const ratingCard = document.querySelector('.rating-container'); 
const ratingNum = document.querySelectorAll('.number'); 
const submitBtn = document.querySelector('.submit-btn'); 
const thanksCard = document.querySelector('.thanks-container'); 

ratingNum.forEach((num) => {
  num.addEventListener('click', () => {
    num.style.backgroundColor = 'var(--orange)'; 
    num.style.color = 'var(--white)'; 
  })
})

submitBtn.addEventListener('click', () => {
  ratingCard.style.zIndex = '0'; 
  thanksCard.style.zIndex = '1'; 
})
 