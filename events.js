// option 1 - directly set on the html element
/* <button onclick="console.log(69);">Another Click</button> */

console.log("This is separate JS file");

// add onclick function option 2
// IMPORTANT WE WILL USE THIS
{
  /* <button onclick="makeRed()">Make Red</button> */
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option 3 another  [use sometime]
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.onclick = function makeGreen() {
  document.body.style.backgroundColor = "green";
};

// option 4
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option 4 another
const blackButton = document.getElementById("make-black");
blackButton.addEventListener("click", function makeBlack() {
  document.body.style.backgroundColor = "black";
});

// option 4 final
// IMPORTANT ; WE WILL USE THIS
// document.getElementById('make-goldenRod').addEventListener('click', function(){})
document.getElementById("make-goldenRod").addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenRod";
  });
