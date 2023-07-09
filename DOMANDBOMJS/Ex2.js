let number = prompt("enter the number");
number = Number.parseInt(number);

if (number > 4) {
  location.href = "https://google.com";
}

let color = prompt("enter the background color");
document.body.style.background = color;
