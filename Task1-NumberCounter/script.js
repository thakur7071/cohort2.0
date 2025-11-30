
var count = document.querySelector('.count');

var increaseBtn = document.querySelector('.increase');
var decreaseBtn = document.querySelector('.decrease');
var resetBtn = document.querySelector('.reset');

var countValue = 0;

increaseBtn.addEventListener('click',function(){
    countValue++;
    count.textContent = countValue;
})

decreaseBtn.addEventListener('click',function(){
    countValue--;
    count.textContent = countValue;
})

resetBtn.addEventListener('click',function(){
    countValue = 0;
    count.textContent = countValue;
})