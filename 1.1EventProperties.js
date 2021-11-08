// 2021.11.01 FROM (MM) 
/*----------------------------------*/
// EVENT PROPERTIES
// learn how to make webpages react to user interactions that are different from buttons
// webpages know when to react to user interactions because of EVENTS
// every time when pressed on a BUTTON with the "ONCLICK" ATTRIBUTE, we are using the "click" EVENT 
// the "click" EVENT is to TRIGGER a FUNCTION CALL


/*----------------------------------*/
/*----------------------------------*/ (1)
//! EVENT
// HTML EVENT ATTRIBUTES are easy to use, but they are a bit outdated and harder to manage for bigger chunks of code
// ATTRIBUTES make the HTML hard to manage and read even for short code like the one below

//?? (HTML)------------------
<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="style.css"> 
    </head>
    <body> 
        <div id="buttons">
            <div class="row">
                <button onclick="toggleBold()">Bold</button> //!
                <button onclick="toggleItalic()">Italic</button> //!
            </div>
            <div class="row">
                <button onclick="toggleUnderline()">Underline</button> //!
                <button onclick="addMonospace()">Monospace</button> //!
            </div>
            <div class="row">
                <button onclick="removeFormat()">Remove Format</button> //!
            </div>
        </div>
        <br>
        <p class="italic">It was a bright cold day in April, and the clocks were striking thirteen.</p>
        <script src="script.js"></script>
    </body>
</html>

//?? (CSS)------------------

.bold {
    font-weight: bold;
}
.italic {
    font-style: italic;
}
.underline {
    text-decoration: underline;
}
.grey-text {
    color: #616161;
}
.mono {
    font-family: monospace;
}
button {
    width: 40%;
    margin: 5px;
    padding: 10px;
    border-radius: 20px;
    font-size: .7em;
    font-weight: bold;
    border: 0px solid;
    outline: none;
    background-color: #D9E8F8;
    color: #4D4D87;
}
.row {
    display: flex;
    justify-content: center;
}
body {
    text-align: center;
}


//?? (JavaScript)------------------
var el = document.querySelector("p");

function toggleBold() {
    var el = document.querySelector("p");
    el.classList.toggle("bold"); 
}
function toggleItalic() {
    var el = document.querySelector("p");
    el.classList.toggle("italic"); 
}

function toggleUnderline() {
    var el = document.querySelector("p");
    el.classList.toggle("underline"); 
}

function addMonospace() {
    var el = document.querySelector("p");
    el.classList.add("grey-text", "mono"); 
}

function removeFormat() {
    var el = document.querySelector("p");
    el.classList.remove("bold", "italic", "underline", "center-text", "grey-text", "mono"); 
}





/*----------------------------------*/
/*----------------------------------*/ (2)
//! EVENT
// a more maintainable way of adding EVENTS is with EVENT PROPERTIES
// add the "ONCLICK" PROPERTIES

//?? (HTML)------------------
<!doctype html>
<html>
    <body> 
        <button>Publish website</button>
        <p id="prompt"></p>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)------------------
function publish() {
    prompt.innerText = "website Published";
}
var prompt = document.querySelector("#prompt");
var el = document.querySelector("button");
el.onclick = published; //! 
// (output) a button written as "Publish website"





/*----------------------------------*/
/*----------------------------------*/ (3)
// once we have th ePROPERTY, we can CALL a FUNCTION by adding (=) and the FUNCTION name without parentheses
// add the "ONCLICK" PROPERTIES

//?? (HTML)------------------
<!doctype html>
<html>
    <body> 
        <button>Publish website</button>
        <p id="prompt"></p>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)------------------
function publish() {
    prompt.innerText = "website Published";
}
var prompt = document.querySelector("#prompt");
var el = document.querySelector("button");
el.onclick = publish;





/*----------------------------------*/
/*----------------------------------*/ (4)
//! EVENT HANDLER
// the FUNCTION CALLED "after" an EVENT is triggered, => //! EVENT HANDLER
// we specify how we want the EVENT to be handled inside these types of FUNCTIONS 
// CONTENT below the same as (3)

//?? (HTML)------------------
<!doctype html>
<html>
    <body> 
        <button>Publish website</button>
        <p id="prompt"></p>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)------------------
function publish() { //!
    prompt.innerText = "website Published";
}
var prompt = document.querySelector("#prompt");
var el = document.querySelector("button");
el.onclick = publish; 
//! el.onclick,  we don't need () after "publish"
//! when setting the EVENT HANDLER on an EVENT PROPERTY





/*----------------------------------*/
/*----------------------------------*/ (5)
//! EVENT HANDLER
// make this code change how the button looks after it is pressed

//?? (HTML)------------------
<!doctype html>
<html>
    <body> 
        <button>Publish website</button>
        <p id="prompt"></p>
        <script src="script.js"></script>
    </body>
</html>

//?? (JavaScript)------------------
function changeColor() {
    el.style.fontWeight = "bold";
}
function publish() {
    prompt.innerText = "Website Published";
}
var el = document.querySelector("button");
el.onclick = changeColor; //! 
