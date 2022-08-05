// let display = document.getElementsByClassName("display");
let buttons = Array.from(document.getElementsByClassName("btn"));
let display = document.getElementById("display")

buttons.map((btn) => {   // MAP FUNCTION TO GET EACH VALUE OF BUTTONS PRESSED IN ARRAY

  btn.addEventListener("click", (event) => { // TO TRIGGER THE EVENT OF CALCULATION
    let key = event.target.innerText;
    // var temp = [...display.innerText]
    // temp = temp.join("")
    // temp = parseInt(temp)
    if(display.innerText==0){
      display.innerText = ""
    }
    if (key == "A/C") {
      display.innerText = "0";
    } else if (key == "del") {
      if (display.innerText == "Infinity") {
        display.innerText = "";
      } else {
        display.innerText = display.innerText.slice(0, -1);
      }
    } else if (key == "√") {
      display.innerText = Math.sqrt(display.innerText)
    }
    else if (key == "x^2") {
      display.innerText = display.innerText ** 2
    }
    else if (key == ".") {
      display.innerText = display.innerText +"."
    }
    else if (key == "x!") {
      let i = display.innerText // 5
      let fact = 1
      while (i > 0) {
        fact = fact * i //20 //60 //120 *1 = 120
        // console.log(fact)
        i-- //4 //3 //2
      }
      display.innerText = fact
    }
    else if (key == "log") {
      display.innerText = Math.log(display.innerText)
    }
    else if (key == "cos") {
      display.innerText = Math.cos(display.innerText)
    }
    else if(key =="兀"){
      display.innerText = 3.1409*(display.innerText)
    }
    else if(key =="rad"){
      display.innerText = (display.innerText)*(3.1409/180)
    }
    else if (key == "sin") {
      display.innerText = Math.ceil(Math.sin(display.innerText))
    }
    else if (key == "tan") {
      display.innerText = Math.ceil(Math.tan(display.innerText))
    }

    else if (key == "=") {
      // if(display.innerText.includes("log")){
      //   console.log(temp)
      //   display.innerText = Math.log(temp)
      // }
      if (display.innerText) {
        display.innerText = eval(display.innerText);
      }
    }
    else {
      display.innerText += key;
    }
  });
});