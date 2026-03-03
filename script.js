console.log("Script started");

//Variable to track the nukmber of clicks
let clicks = 0;

//Variable to store the click counter h1
let clickdisplay = document.getElementById("clickdisplay");

//set initial text for click counter
clickdisplay.innerText = "Clicks: " + clicks;

//Called each time the image is clicked
function handleClick() {
    console.log("click");

    //AAdd one to click count
    clicks = clicks + 1;

    //Update Display
    clickdisplay.innerText = "Clicks: " + clicks;

    if(clicks == 10) {
        alert("Level 1 Complete! ");
    }
}