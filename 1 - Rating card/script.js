var ratingsbtn = document.querySelectorAll(".ratingbtn")
var submitbtn = document.querySelector(".submitbtn")
var ratedvalue = document.getElementById("ratedvalue")
var responserate = document.querySelector(".response")
var innerbox = document.querySelector(".innerbox")

var lastRatedValue = NaN;

for (var i = 0; i < ratingsbtn.length; i++) {
    ratingsbtn[i].addEventListener("click", function () {
        //rating value is don't click it return NaN
        if (lastRatedValue) ratingsbtn[lastRatedValue - 1].classList.remove("selected")
        
            lastRatedValue = Number(this.textContent);
        this.classList.add("selected")
    })
}

submitbtn.addEventListener("click", function () {
    if (lastRatedValue) ratingsbtn[lastRatedValue - 1]
    {
        //you doesn't select rating value it display nan out 5
        innerbox.style.display = "none"
        responserate.style.display = "block"
    
        //you select rating value it display
        innerbox.style.display = "none"
        responserate.style.display = "block"
        //changing the rating value 
        ratedvalue.textContent = lastRatedValue;
    }

})


