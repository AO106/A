const form = document.getElementById("form");
const input = document.getElementById("input");
let here = document.getElementById("here");
let element = document.getElementById("text");
let num = document.getElementById("num");
let pass = 5;

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(input.value);
    let texttext = input.value;
    if (texttext === "HI") {
        element.innerHTML = '<p>あおさんこんにちは!</p>';
        here.innerHTML = '<p>here</p>'
      } else {
        element.innerHTML = '<p>パスワードが違います</p>';
        pass = pass -1
    }
    if (pass === 1) num.innerHTML = '<p>1</p>';
    if (pass === 2) num.innerHTML = '<p>2</p>';
    if (pass === 3) num.innerHTML = '<p>3</p>';
    if (pass === 4) num.innerHTML = '<p>4</p>';
    if (pass === 5) num.innerHTML = '<p>5</p>';
    if (pass === 0) {
        num.innerHTML = '<p>あおじゃないね</p>'
        if(texttext === "HI"){
          num.innerHTML = '<p></p>'

        }
      } 
});
