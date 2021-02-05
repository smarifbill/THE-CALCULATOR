/* 
1. Select all button elements
2. Only select and display input from user (make it read only)
3. Get the value when user clicks on a button (add an event listener)
4. Check if the user 
  a. clicks on equals then compute the input
  b. if display is not empty, display the value
  c. if user clicks on clear button then reset/display nothing
  d. otherwise add the inputs and calculate when user clicks on equals  
*/

// find and select all the HTML button elements by CSS Selectors - querySelectorAll() method
const buttons = document.querySelectorAll("button");
// select the <input type="text" class="display" disabled> element
const display = document.querySelector(".display");

// add eventListener to each button
buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === "=") {
    // check if the display is not empty then only do the calculation
    if (display.value !== "") {
      // calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === "C") {
    // clear everything on display
    display.value = "";
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}
