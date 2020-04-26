var randomNumber1= Math.round(Math.random() * 5) +1;

var url = `./images/dice${randomNumber1}.png`

console.log(url)

var img1 = document.getElementById("img1")

console.log(img1)

img1.setAttribute("src", url)

var randomNumber2= Math.round(Math.random() * 5) +1;

var url = `./images/dice${randomNumber2}.png`

console.log(url)

var img2 = document.getElementById("img2")

console.log(img2)

img2.setAttribute("src", url)

var text= document.getElementById("text")

if (randomNumber1 > randomNumber2) {
  text.innerHTML="Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  text.innerHTML="Player 2 Wins!";
}
else if (randomNumber1 == randomNumber2) {
  text.innerHTML="Draw!";
}
