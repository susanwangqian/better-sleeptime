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

    // Hold option key & select other lines - write in multiple lines (.value) at the same time
    let hh = document.getElementById("hh").value;
    let mm = document.getElementById("mm").value;
    let ampm = document.getElementById("ampm").value;

    /* 
    debugger in browser: sources tab -> upper left icon; (when easy)
      set breakpoints; 2nd on the left to step over; 
      hh = 3 + 12, should be 15; 
      but hh = 312 after this step -> BUG
        because: value being read is a string! + concat
    */
    // hh = ampm === "PM" ? hh + 12 : hh;
    hh = ampm === "PM" ? Number.parseInt(hh) + 12 : hh;
    console.log({hh, mm, ampm});

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
  