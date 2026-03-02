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
    // targetZones.forEach(zone => {
    //     zone.style.backgroundColor = "rgba(40, 255, 3, 0.219)";
    // });
}

function dropped(e) {
    e.preventDefault();
    console.log("dropped");

    // if there is already a label, don't drop piece
    //check for pieces before dropping the piece
    if(this.childNodes.length >= 1){
        return;
    };

    //drop the piece
    this.appendChild(currrentDraggedElement);

    //reset the reference
    currrentDraggedElement = null;

    // change background colour to original
    // targetZones.forEach(zone => {
    //     zone.style.backgroundColor = "rgba(200,200,200,0.2)";
    // });
}

// add function for sending labels back
function resetLabels() {
    console.log("resetLabels function ran");

    document.querySelectorAll(".label");
    console.log(document.querySelectorAll(".label"));
    
}

// --- Event Listeners
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    // adds puzzle piece
    zone.addEventListener("drop", dropped);

    // zone.addEventListener("dragleave", zoneHover);

    // IF zone has label already -> exit function
    // if (zone has more than one label) {exit function}s
    

})

// event listener for reset button, listen for click
// when button is clicked, run resetLabels function
resetBtn.addEventListener("click", resetLabels);

