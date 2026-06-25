let count = 0;

const counterDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");


increaseBtn.addEventListener("click", function () {
    count++;
    counterDisplay.textContent = count;
    
})