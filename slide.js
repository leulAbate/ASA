// Get all the images inside the hero-background container
const images = document.querySelectorAll('.hero-background img');
	  
let currentIndex = 0;

// Function to show the next image
function showNextImage() {
  // Remove the 'active' class from the current image
  images[currentIndex].classList.remove('active');
  // Calculate the index of the next image
  currentIndex = (currentIndex + 1) % images.length;
  // Add the 'active' class to the next image
  images[currentIndex].classList.add('active');
}

// Show the first image immediately
images[currentIndex].classList.add('active');

// Start the slideshow after a delay
setTimeout(function() {
  setInterval(showNextImage, 4000); // Adjust the delay between images as needed
}, 2000); // Adjust the delay before starting the slideshow as needed