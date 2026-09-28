
const horrorButton = document.getElementById("horrorButton");


horrorButton.addEventListener("click", function () {

    // ALTERATION #1
    // Adds/removes a CSS class from the body

    document.body.classList.toggle("horror-mode");


    // ALTERATION #2
    // Changes HTML inside the button

    if (document.body.classList.contains("horror-mode")) {

        horrorButton.innerHTML = "Deactivate Horror Mode";

    } else {

        horrorButton.innerHTML = "Activate Horror Mode";

    }

});




const revealButton =
    document.getElementById("revealButton");


const secretEnding =
    document.getElementById("secretEnding");


revealButton.addEventListener("click", function () {

    // ALTERATION #3
    // Changes content with innerHTML

    secretEnding.innerHTML =
        "The newspaper reveals that " +
        "<strong>Jacobe died in the crash.</strong>";


    // Make the hidden paragraph visible

    secretEnding.hidden = false;


    // ALTERATION #4
    // Adds a CSS class

    secretEnding.classList.add("revealed");


    // ALTERATION #5
    // Directly changes a CSS style

    revealButton.style.backgroundColor = "#333333";


    // ALTERATION #6
    // Changes HTML inside the button

    revealButton.innerHTML =
        "The Truth Has Been Revealed";


    // Prevent the button from being clicked again

    revealButton.disabled = true;

});



const galleryImages =
    document.querySelectorAll(".gallery-grid img");


galleryImages.forEach(function (image) {

    image.addEventListener("mouseover", function () {

        // ALTERATION #7
        // Add CSS class to hovered image

        image.classList.add("gallery-active");

    });

});


galleryImages.forEach(function (image) {

    image.addEventListener("mouseout", function () {

        // Remove the class when mouse leaves

        image.classList.remove("gallery-active");

    });

});