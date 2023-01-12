const ratingCard = document.querySelector('.rating-container'); 
const ratingNum = document.querySelectorAll('.number'); 
const submitBtn = document.querySelector('.submit-btn'); 
const thanksCard = document.querySelector('.thanks-container'); 

for (let i = 0; i < ratingNum.length; i++) {
  ratingNum[i].onclick = function() {
    ratingNum.forEach((num) => {
      num.style.backgroundColor = ''; 
      num.style.color = ''; 
    })
    this.style.backgroundColor = 'var(--orange)'; 
    this.style.color = 'var(--white)'; 

    const ratingValue = this.innerHTML; 

    console.log(ratingValue); 

  submitBtn.addEventListener('click', () => {
    document.getElementById('selected-rating').innerHTML = ratingValue; 
    ratingCard.style.zIndex = '0'; 
    thanksCard.style.zIndex = '1'; 
  })
  }
}


 