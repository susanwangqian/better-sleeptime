const colors = [
  "white",
  "red",
  "white",
  "red",
  "white",
  "red",
]

function handleOnClick() {
    let output = document.querySelector(".output");
    output.style.display = "block";
  
    let hours = document.getElementById("hours");
    hours.innerHTML = "";
    
    // The value property sets or returns the value of the selected option in a drop-down list.
    let hh = document.getElementById("hh").value;
    let mm = document.getElementById("mm").value;
    let ampm = document.getElementById("ampm").value;
    hh = ampm === "PM" ? hh + 12 : hh;
  
    let now = new Date();
    // allow 14 minutes to fall sleep!
    // now.setMinutes(now.getMinutes() + 14);
    now.setHours(hh);
    now.setMinutes(mm);
  
    // calculate sleep cycles!
    for (let i = 1; i <= 6; i++) {
      now.setMinutes(now.getMinutes() + 90);
      // should work exactly the same as sleeptime1!
      let elm = document.createElement("div");
      elm.innerText = 
        now.toLocaleTimeString("en-US", { timeStyle: "short" });
      elm.style.color = colors[i]; // alternate between colors
      hours.appendChild(elm);
    } 
  }
  