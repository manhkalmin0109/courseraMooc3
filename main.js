// Function to handle the mouseover event
function displayPreview(event) {
    // Check if the event is triggering
    console.log("Mouseover event triggered");

    // Get the previewPic element
    var previewPic = event.target;

    // Print alt and source information
    console.log("Alt: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // Change the text of the element with id "image"
    var imageText = document.getElementById("image");
    imageText.textContent = previewPic.alt;

    // Change the background image of the element with id "image"
    var imageElement = document.getElementById("image");
    imageElement.style.backgroundImage = "url('" + previewPic.src + "')";

    // Check if the background image is set correctly
    console.log("Background image set to: " + imageElement.style.backgroundImage);
}

// Function to handle the undo action
function undo() {
    // Update the background image URL back to the original value
    var imageElement = document.getElementById("image");
    imageElement.style.backgroundImage = "url('')";

    // Update the text back to the original value
    var imageText = document.getElementById("image");
    imageText.textContent = "Hover over an image below to display here.";
}

// Add event listeners to all preview images
var previewImages = document.querySelectorAll(".preview");
previewImages.forEach(function (previewImage) {
    previewImage.addEventListener("mouseover", displayPreview);
});

// Add event listener to undo button
var undoButton = document.getElementById("undoButton");
undoButton.addEventListener("click", undo);