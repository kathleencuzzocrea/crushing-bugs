console.log("JavaScript File is linked");

// ---1--- Variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currrentDraggedElement = null;
// adding variable for reset button;
const resetBtn = document.querySelector(".reset-btn");
// adding variable for label container
const labelDiv = document.querySelector("#label-box");

// ---2--- Functions
function dragStart() {
    console.log("Started Dragging");
    // whatever the user is dragging, store it in currrentDraggedElement
    currrentDraggedElement = this;
}

function dragOver(e) {
    e.preventDefault();
    console.log("drag over called");

    //code for hover effect
    //for each target zone, change background colour
    targetZones.forEach(zone => {
        zone.style.backgroundColor = "rgba(40, 255, 3, 0.219)";
    });
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
    targetZones.forEach(zone => {
        zone.style.backgroundColor = "rgba(200,200,200,0.2)";
    });
}

// add function for sending labels back
function resetLabels() {
    console.log("resetLabels function ran");
    console.log(labels);

    document.querySelectorAll(".label");
    
    // had to google how to append nodelist from querySelectorAll to a div
    labels.forEach(label => {
        labelDiv.appendChild(label);
    });
}

// ---3--- Event Listeners
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    // adds puzzle piece
    zone.addEventListener("drop", dropped);

    // zone.addEventListener("dragleave", zoneHover);
});

// when button is clicked, run resetLabels function
resetBtn.addEventListener("click", resetLabels);

