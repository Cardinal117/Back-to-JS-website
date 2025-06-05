let count = 0;
let pressed = false;

$(document).ready(function () {
  dropDownAnimation();

  document.querySelectorAll(".code-block").forEach((codeEl) => {
    const rawCode = codeEl.textContent;
    const highlighted = highlightJS(rawCode);
    codeEl.innerHTML = highlighted;
  });
});

// Allows a specified element to show and hide it's list/items when hovered over.
function dropDownAnimation() {
  jQuery(".drop-down").hover(
    function () {
      // Slides the list items down when .drop-down is hovered over.
      $(this).children(".drop").stop(true, true).slideDown(500);
    },
    function () {
      // Slides the list items back up when .drop-down is hovered over.
      $(this).children(".drop").stop(true, false).slideUp(500);
    }
  );
}

function displayUserName() {
  // Get the value from the input field
  const name = document.getElementById("username").value;

  // Select the first element with the class "interaction" and set its text
  document.querySelector(".interaction").textContent = `Hello, ${name}!`;
}

// Runs a conditional and prints out the result depending on the variable values.
function runConditional() {
  const name = document.getElementById("username").value;
  const funnyNumber = parseInt(document.getElementById("favNum").value);
  const enjoysPizza = document.getElementById("pizzaCheckbox").checked;

  let message = "";

  // Runs checks on the variables.
  if ((name === "REDACTED" && funnyNumber >= 69) || enjoysPizza) {
    message = "Ahh welcome pizza enjoyer!";
  } else if (name === "Master-Chief" || funnyNumber === 117) {
    message = "ATTENTION!";
  } else {
    message = "Non pizza enjoyers will be prosecuted!";
  }

  // Displays the message through an element with the interaction class.
  document.querySelector(".interaction").textContent = message;
}

// Fetches values from an input elements, then adds them to an 
// array and displays said values on the page.
function runLoop() {
  const name1 = document.getElementById("input1").value;
  const name2 = document.getElementById("input2").value;
  const name3 = document.getElementById("input3").value;

  const nameArray = [name1, name2, name3];
  let output = "";

  for (let i = 0; i < nameArray.length; i++) {
    output += nameArray[i] + "<br>";
  }

  // Displays the values through an element with the interaction class.
  document.querySelector(".interaction").innerHTML = output;
}

// Changes the background colour of the nearest code-container element 
// by fetching the value from an input element.
function changeCodeContainerBackground(button) {
  const container = button.closest(".code-container");
  const input = container.querySelector("#colorInput");
  const chosenColor = input.value;

  container.style.backgroundColor = chosenColor;

  container.querySelector(".interaction").innerHTML =
    "Container background set to: " + chosenColor;
}

// Toggles the chainAnimation() class.
function buttonPress() {
  pressed = !pressed;
  console.log("Animation started: ", pressed);

  // Calls the chainAnimation class to start the animation
  // when pressed is true.
  if (pressed) {
    chainAnimation();
  }
}

function chainAnimation() {
  let chainLeft = $(".chainLeft");
  let chainRight = $(".chainRight");
  // Resets the elements back to their original position
  // and changes the background color back if pressed is false.
  if (!pressed) {
    chainRight.css("transform", "translateX(0px)");
    chainLeft.css("transform", "translateX(0px)");
    $("body").css("background-color", "rgb(81, 81, 81)");
    return;
  } else {
    // Loops the animation as long as pressed is true.
    setTimeout(chainAnimation, 200);
  }

  count++;

  // Loops through each count changing the position of each element as well as the background
  // color with the class names .chainLeft and .chainRight every 200 milliseconds.
  switch (count) {
    case 1:
      chainRight.css("transform", "translateX(-10px)");
      chainLeft.css("transform", "translateX(10px)");
      break;
    case 2:
      chainRight.css("transform", "translateX(-20px)");
      chainLeft.css("transform", "translateX(20px)");
      break;
    case 3:
      chainRight.css("transform", "translateX(-30px)");
      chainLeft.css("transform", "translateX(30px)");
      $("body").css("background-color", "red");
      break;
    case 4:
      chainRight.css("transform", "translateX(-40px)");
      chainLeft.css("transform", "translateX(40px)");
      break;
    case 5:
      chainRight.css("transform", "translateX(-30px)");
      chainLeft.css("transform", "translateX(30px)");
      break;
    case 6:
      chainRight.css("transform", "translateX(-20px)");
      chainLeft.css("transform", "translateX(20px)");
      break;
    case 7:
      chainRight.css("transform", "translateX(-10px)");
      chainLeft.css("transform", "translateX(10px)");
      break;
    case 8:
      chainRight.css("transform", "translateX(0px)");
      chainLeft.css("transform", "translateX(0px)");
      $("body").css("background-color", "green");
      break;
    case 9:
      chainLeft.css("transform", "translateX(-10px)");
      chainRight.css("transform", "translateX(10px)");
      break;
    case 10:
      chainLeft.css("transform", "translateX(-20px)");
      chainRight.css("transform", "translateX(20px)");
      break;
    case 11:
      chainLeft.css("transform", "translateX(-30px)");
      chainRight.css("transform", "translateX(30px)");
      break;
    case 12:
      chainLeft.css("transform", "translateX(-40px)");
      chainRight.css("transform", "translateX(40px)");
      break;
    case 13:
      chainLeft.css("transform", "translateX(-30px)");
      chainRight.css("transform", "translateX(30px)");
      break;
    case 14:
      chainLeft.css("transform", "translateX(-20px)");
      chainRight.css("transform", "translateX(20px)");
      $("body").css("background-color", "blue");
      break;
    case 15:
      chainLeft.css("transform", "translateX(-10px)");
      chainRight.css("transform", "translateX(10px)");
      break;
    case 16:
      chainLeft.css("transform", "translateX(0px)");
      chainRight.css("transform", "translateX(0px)");
      count = 0;
      break;
  }
}
