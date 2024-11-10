//your JS code here. If required.
// Get the modal, button, and close elements
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close-modal");

// Open the modal when the button is clicked
openModalBtn.addEventListener("click", function() {
  modal.style.display = "flex"; // Display the modal as a flexbox
});

// Close the modal when the close button (X) is clicked
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
