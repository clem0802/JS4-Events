// 2021.11.01 FROM (MM) 
/*----------------------------------*/ (EXPLORE EVENT PROPERTIES)
//! we can add EVENTs to any HTML element


/*----------------------------------*/
/*----------------------------------*/ (1) ONCLICK
// add EVENTS to other elements types if we want to 
// we can add ONCLICK to a DIV element

//?? (HTML)------------------
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <div class="item">Click me to change color</div>
        <script src="script.js"></script>
    </body>
</html>

//?? (CSS)------------------
.item {
    background-color: skyBlue;
    height: 100px;
    padding: 20px;
}
.pink {
    background-color: pink;
}
body {
    text-align: center;
}

// (JavaScript)------------------
// We can add events to other elements types if we want to. 
// For example we can add onclick to a div element.
function changeColor() {
    item.classList.toggle("pink");
}
var item = document.querySelector("div");
item.onclick = changeColor; //! ONCLICK



/*----------------------------------*/
/*----------------------------------*/ (2) ONCLICK
<!doctype html>
<html>
 <head>
  <link rel="stylesheet" href="style.css">
 </head>
 <body>
  <div class="item">Click to toggle colors.</div>
  <script src="script.js"></script>
 </body>
</html>

//?? (CSS)------------------
.item {
 background-color: rebeccapurple;
 color: white;
 height: 100px;
 width: 100px;
 padding: 25px;
 margin: 25px;
}
.red {
 background-color: darkred;
}

// (JavaScript)------------------
function changeColor() {
 item.classList.toggle("red");
}

var item = document.querySelector("div");
item.onclick = changeColor;



/*----------------------------------*/
/*----------------------------------*/ (3) ONCLICK
<!doctype html>
<html>
 <head>
  <link rel="stylesheet" href="style.css">
 </head>
 <body>
  <div class="item">Click to toggle shapes.</div>
  <script src="script.js"></script>
 </body>
</html>

//?? (CSS)------------------
.item {
 background-color: dodgerblue;
 color: white;
 height: 100px;
 width: 100px;
 padding: 25px;
 margin: 25px;
}

.purple {
 background-color: rebeccapurple;
 height: 150px;
 width: 150px;
 border-radius: 25%;
}

// (JavaScript)------------------
function changeShape() {
 item.classList.toggle("purple");
}

var item = document.querySelector("div");
item.addEventListener("click", changeShape); // the shape changes upon the click



/*----------------------------------*/
/*----------------------------------*/ (4) ONDBCLICK
// depending on how we wan the element to behave, we might want to add a different EVENT
// ie: tapping an item to change its color makes more sense to happen on a double click => ONDBCLICK (ondbclick)

//?? (HTML)------------------
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <div class="item">Double-Click me to change color</div>
        <script src="script.js"></script>
    </body>
</html>

//?? (CSS)------------------
.item {
    background-color: skyBlue;
    height: 100px;
    padding: 20px;
}
.pink {
    background-color: pink;
}

//?? (JavaScript)------------------
// Tapping an item to change its color makes more sense to happen on a double click. (ondblclick)
function changeColor() {
    item.classList.toggle("pink");
}
var item = document.querySelector("div");
item.ondbclick = changeColor; //! ONDBCLICK



/*----------------------------------*/
/*----------------------------------*/ (5) ONSCROLL
// if we want to trigger an EVENT when a user scolls on a webpage, we can set the "onscroll" PROPERTY
// code "onscroll" and scroll down to change the background color

//?? (HTML)------------------
<!doctype html>
<html>
    <body> 
        <h2>A Testing Page</h2>
        <textarea style="height: 100px; width: 100%">
        "This is a testing page, a testing page, a testing page, a testing page, a testing page,a testing page, a testing page.
        This is a testing page, a testing page, a testing page, a testing page, a testing page,a testing page, a testing page.
        This is a testing page, a testing page, a testing page, a testing page, a testing page,a testing page, a testing page.
        This is a testing page, a testing page, a testing page, a testing page, a testing page,a testing page, a testing page.
        This is a testing page, a testing page, a testing page, a testing page, a testing page,a testing page, a testing page.
        This is a testing page, a testing page, a testing page, a testing page, a testing page,a testing page, a testing page.
        This is a testing page, a testing page, a testing page, a testing page, a testing page,a testing page, a testing page.
        This is a testing page, a testing page, a testing page, a testing page, a testing page,a testing page, a testing page.
        This is a testing page, a testing page, a testing page, a testing page, a testing page,a testing page, a testing page.
        This is a testing page, a testing page, a testing page, a testing page, a testing page,a testing page, a testing page.
        This is a testing page, a testing page, a testing page, a testing page, a testing page,a testing page, a testing page.
        This is a testing page, a testing page, a testing page, a testing page, a testing page,a testing page, a testing page.
        This is a testing page, a testing page, a testing page, a testing page, a testing page,a testing page, a testing page."
        </textarea>
        <p>- George Graham Vest, 1870</p>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)------------------
function changeToBlue() {
    textarea.style.backgroundColor = "dodgerBlue";
}
function changeTogreen() {
    textarea.style.backgroundColor = "green";
}
var textarea = document.querySelector("textarea");
textarea.onscroll = changeToBlue; //! ONSCROLL



/*----------------------------------*/
/*----------------------------------*/ (6) ONCHANGE 
// ça donne vraiment une "current date" (Jour/Mois/Année)
//! en cliquant, on a à notre disposition un calendrier à cliquer sur la bonne date /ou la date souhaitée
// if we want to trigger an EVENT when an INPUT field changes its value, we can use the "ONCAHNGE" PROPERTY
// the property only triggers "AFTER" the change is done
// the result is displayed only "AFTER" the change is done

//?? (HTML)------------------
<!doctype html>
<html>
    <body> 
        <p>Date:</p>
        <input type="date">
        <p>New Range</p>
        <p id="log"></p>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)------------------
function updateValue() {
    log.innerText = input.value;
}
var input = document.querySelector("input");
var log = document.getElementById("log");
input.onchange = updateValue; //! ONCHANGE



/*----------------------------------*/
/*----------------------------------*/ (7) ONINPUT
// to display any input change "WHILE" (DURING) it takes place
// if we want to trigger an EVENT anytime an element's INPUT changes, we use the "oninput" PROPERTY

//?? (HTML)------------------
<!doctype html>
<html>
    <body> 
        <input placeholder="Start Typing">
        <p id="log"></p>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)------------------
function updateValue() {
    log.innerText = input.value.length; //! will COUNT the LENGTH of the input
}
var input = document.querySelector("input");
var log = document.getElementById("log");
input.oninput = updateValue; //! ONINPUT



/*----------------------------------*/
/*----------------------------------*/ (8) ONCHANGE
// for this code displays changes to the INPUT element only "AFTER" the chnages are done

//?? (HTML)------------------
<!doctype html>
<html>
    <body> 
        <p>Date:</p>
        <input type="range"> // a "range bar" do scroll from left-right-left...
        <p>New Range</p>
        <p id="log"></p>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)------------------
function updateValue() {
    log.innerText = input.value; //! the max of range is "100"
}
var input = document.querySelector("input");
var log = document.getElementById("log");
input.onchange = updateValue; //! ONCHANGE
