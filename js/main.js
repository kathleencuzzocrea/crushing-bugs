console.log("JavaScript File is linked");

// --- Variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currrentDraggedElement = null;
// adding variable for reset button;
const resetBtn = document.querySelector(".reset-btn");

// --- Functions
function dragStart() {
    console.log("Started Dragging");
    // whatever the user is dragging, store it in currrentDraggedElement
    currrentDraggedElement = this;
}

function dragOver(e) {
    e.preventDefault();
    console.log("drag over called");

    //code for hover effect
    // for each target zone, change background colour
    // document.querySelectorAll(".target-zone");
    targetZones.forEach(targetZones => {
        targetZones.style.backgroundColor = "yellow";
    });
}

function dropped(e) {
    e.preventDefault();
    console.log("dropped");

    //drop the piece
    this.appendChild(currrentDraggedElement);

    //reset the reference
    currrentDraggedElement = null;
}

// add function for sending labels back
function resetLabels() {
    console.log("resetLabels function ran");


}

// add function for prevent multiples



// --- Event Listeners
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    // adds puzzle piece
    zone.addEventListener("drop", dropped);

    // IF zone has label already -> exit function
    // if (zone has more than one label) {exit function}

})

// event listener for reset button, listen for click
// when button is clicked, run resetLabels function
resetBtn.addEventListener("click", resetLabels);

