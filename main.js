const ratingCard = document.querySelector('.rating-container'); 
const ratingNum = document.querySelectorAll('.number'); 
const submitBtn = document.querySelector('.submit-btn'); 
const thanksCard = document.querySelector('.thanks-container'); 

ratingNum.forEach((num) => {
  num.addEventListener('click', () => {
    num.style.backgroundColor = 'var(--orange)'; 
    num.style.color = 'var(--white)'; 

    const ratingValue = num.innerHTML; 

    console.log(ratingValue); 

    submitBtn.addEventListener('click', () => {
      document.getElementById('selected-rating').innerHTML = ratingValue; 
      ratingCard.style.zIndex = '0'; 
      thanksCard.style.zIndex = '1'; 
    })
  })
})


 