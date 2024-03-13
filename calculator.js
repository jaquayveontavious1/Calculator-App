// Calculator Javascript

//Input will appear on display of calculator.
const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}
//Will clear what input written on display
function clearDisplay(){
    display.value = "";
}
//Will evaluate the answer of input given
function calculate(){
     
      try {
        display.value = eval(display.value);
      }
      catch(error){
        display.value = "Error";
      } 
}