console.log("Script started");

//Variable to track the nukmber of clicks
let clicks = 0;

//Variable to store the click counter h1
let clickDisplay = document.getElementById("click-display");

//set initial text for click counter
clickDisplay.innerText = "Clicks: " + clicks;

//Called each time the image is clicked
function handleClick() {
    console.log("click");

    //AAdd one to click count
    clicks = clicks + 1;

    //Update Display
    clickDisplay.innerText = "Clicks: " + clicks;
}