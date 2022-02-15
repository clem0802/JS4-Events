// 2021.11.01 FROM (MM) 
/*----------------------------------*/
//! ADD EVENT WITH METHODS
//! learn about a newer way of adding EVENTS to elemnts 
"click" and "dbclick", can be used with "addEventListener()"


/*----------------------------------*/
/*----------------------------------*/ (1)
//! addEventListener()  METHOD
// ADD multiple EVENT HANDLERS to the same EVENT
// press the buttons to TOGGLE different height and width values
// a more modern way of adding events to elemetns is => addEventListener() METHOD
// add the "click" EVENT and tap on the element! 
// once the METHOD added, we add the name of the EVENT we want to change
// followed by a comma (,) and the FUNCTION we want to CALL
//! when using METHODs to add or remove EVENTs, we use the (EVENT NAMEs) and not the (PROPERTY NAMEs)
//! instead of "onclick", we write "CLICK" !!!
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <div class="item">Click me for color-change</div>
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

//?? (JavaScript)------------------
function changeColor() {
    item.classList.toggle("pink");
}
var item = document.querySelector("div");
item.addEventListener("click", changeColor); // couleur ALTERNE entre bleu et rose





/*----------------------------------*/
/*----------------------------------*/ (2)
//! removeEventListener()  METHOD
// we can also REMOVE EVENTs with the "removeEventLiistent()" METHOD
// add the METHOD to the EVENT HANDLER and try tapping the element twice
// removing elements comes in handy if we only want an event to happen once
//? we remove and event when we want an event to only happen a set number of times
// to make the element change color only once, we can remove the click event from inside the "changeColor()" EVENT HANDLER
//? adding EVENTs with the help of METHODs can come in handy if we want to add multiple EVENT HANDLERs to the same EVENT TRIGGER
//? although we have 3 buttons, we are actually only using 2 event handlers

<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <div class="item">Click for color-change</div>
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

//?? (JavaScript)------------------
function changeColor() {  //!  changeColor()  is an EVENT HANDLER
    item.classList.toggle("pink");
    item.removeEventListener("click", changeColor); 
}
var item = document.querySelector("div");
item.addEventListener("click", changeColor); // une fois changée en rose, ne se modifie plus





/*----------------------------------*/
/*----------------------------------*/ (3)
//! removeEventListener()  METHOD
//!  ATTENTION à celui-ci  !!!!
// what will this element do the second time we tap it? //! 
// after 1st tap => pink 
// after 2nd tap => NOTHING, the pink color remains

<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <div class="item">see if change after tapping</div>
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

//?? (JavaScript)------------------
function changeColor() {  //!  changeColor()  is an EVENT HANDLER
    item.classList.toggle("pink");
    item.removeEventListener("click", changeColor); //! IF NO THIS LINE, the colors will TOGGLE between blue and pink
}
var item = document.querySelector("div");
item.addEventListener("click", changeColor);




/*----------------------------------*/
/*----------------------------------*/ (4)  addEventListener()  METHOD
// addEventListener  defines "WHAT EVENT HANDLER" to be called when an event is TRIGGERED on an element
// inside  addEventListener METHOD, we add the (name of the EVENT), followed by the (EVENT HANDLER name)
// if we want an element to have multiple event handlers for the same element
// we can add them one by one with the   addEventListener() METHOD

<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <button>Height&Width</button>
        <button>Height</button>
        <button>Width</button>
        <div class="default">Check and see</div>
        <script src="script.js"></script>
    </body>
</html>

//?? (CSS)------------------
.default {
    text-align: center;
    background-color: skyBlue;
    height: 100px;
    width: 50%;
    margin: 20px;
}
.width {
    width: 80%;
}
.height {
    height: 200px;
}

//?? (JavaScript)------------------
function changeWidth() {
    item.classList.toggle("width");
}
function changeHeight() {
    item.classList.toggle("height");
}
var item = document.querySelector("div");
var el = document.querySelectorAll("button"); //! querySelectorAll

el[0].addEventListener("click", changeHeight);
el[0].addEventListener("click", changeWidth);
el[1].addEventListener("click", changeHeight);
el[2].addEventListener("click", changeWidth);
                          |           |
                          V           V
                (name of event)(event handler name)
                                 (function name)



/*----------------------------------*/
/*----------------------------------*/ (5)
<!doctype html>
<html>
 <head>
  <link rel="stylesheet" href="style.css">
 </head>
 <body>
  <h3>To Do</h3>
  <ul>
   <li id="item-1">Work out</li>
  </ul>
  <button>Clear Item</button>
  <script src="script.js"></script>
 </body>
</html>

//?? (JavaScript)------------------
function removeItem() {
 itemOne.innerText = "";
}
var clearButton = document.querySelector("button");
var itemOne = document.querySelector("#item-1");
clearButton.addEventListener("click", removeItem);







