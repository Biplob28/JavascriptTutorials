let runagain = true;

const candrive = (age) => {
  return age >= 18 ? true : false;
};

while (runagain) {
  let age = prompt("Enter your age");
  age = Number.parseInt(age);

  if (age < 0) {
    console.error("Please enter the valid age.");
    break;
  }

  if (candrive(age)) {
    alert("you can drive");
  } else {
    alert("you cannot drive");
  }
  runagain = confirm("Do you want to play again?");
}
