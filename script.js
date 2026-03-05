console.log("Script started");

//Variable to track the nukmber of clicks
let clicks = 0;

// Value of each click
let clickValue = 1;

//Variable to store the click counter h1
let clickdisplay = document.getElementById("clickdisplay");
// Variable to store the levvel display
let levelDisplay = document.getElementById("level-display");

//set initial text for click counter
clickdisplay.innerText = "Clicks: " + clicks;

//Called each time the image is clicked
function handleClick() {
    console.log("click");

    //Add one to click count
    clicks = clicks + clickValue;

    //Update Display
    clickdisplay.innerText = "Clicks: " + clicks;

    if(clicks == 10) {
        alert("Level 1 Complete! ");
        levelDisplay.innerText = "Level 2";
        clickValue = 2;

    }
}