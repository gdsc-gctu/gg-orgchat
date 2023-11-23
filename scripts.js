
document.addEventListener("DOMContentLoaded", function () {
    const dividers = document.querySelectorAll(".divider");
    const searchInput = document.getElementById("srch");
    const imageContainers = document.querySelectorAll(".image-container");
    const heading = document.querySelectorAll(".heading");
    const description = document.querySelectorAll(".description");
  
  
    // Listen for changes in the search input field
    searchInput.addEventListener("input", function () {
        dividers.forEach((divider) => {
          divider.style.display = "none";
        })
  
  
        heading.forEach((heading) => {
          heading.style.display = "none";
        })
  
  
        description.forEach ((description) =>{
          description.style.display = "none";
        })
         
        const searchTerm = searchInput.value.toLowerCase();
    
        // Iterate through each image container
        imageContainers.forEach((container) => {
          const imagesInContainer = container.querySelectorAll(".img-circle");
    
          // Iterate through images in the container
          imagesInContainer.forEach((image) => {
            const imageText = image.querySelector("h5").textContent.toLowerCase();
    
            // Check if the image text contains the search term
            if (imageText.includes(searchTerm)) {
              // Show the image if it matches the search term
              image.style.display = "block";
              image.style.margin = "";
            } else {
              // Hide the image if it doesn't match the search term
              image.style.display = "none";
            }
          });
        });
      });
    });
    
  
  
  



// document.addEventListener('DOMContentLoaded', () => {
//     const searchInput = document.querySelector('#srch');
//     const imageElements = document.querySelectorAll('.image');
//     const imageArray = [...imageElements];
//     const altTextMap = new Map();
//     const resultCount = document.querySelector('#result-count'); // Get the result count element

//     // Store the initial display property of each image
//     imageArray.forEach((image) => {
//         const altText = image.alt.toLowerCase();
//         if (!altTextMap.has(altText)) {
//             altTextMap.set(altText, []);
//         }
//         altTextMap.get(altText).push(image);
//         // Store the initial display property in a custom attribute
//         image.dataset.initialDisplay = image.parentElement.style.display || 'block';
//     });

//     // Store the initial HTML content of the container
//     const container = document.querySelector('.container'); // Replace with the actual container class
//     const initialContainerHTML = container.innerHTML;

//     searchInput.addEventListener('input', (e) => {
//         const searchText = e.target.value.toLowerCase();

//         const filteredImages = altTextMap.get(searchText) || [];

//         // Create an HTML string for the filtered images
//         let filteredImagesHTML = '';
//         filteredImages.forEach((image) => {
//             filteredImagesHTML += image.outerHTML;
//         });

//         // Set the container's inner HTML to the filtered images
//         container.innerHTML = filteredImagesHTML;

//         // Update the result count text
//         resultCount.textContent = `Results Found: ${filteredImages.length}`;
//     });

//     // Clear the search and revert to the initial state when the input is empty
//     searchInput.addEventListener('input', (e) => {
//         if (!e.target.value.trim()) {
//             // Reset the container's inner HTML to the initial content
//             container.innerHTML = initialContainerHTML;

//             resultCount.textContent = `Results Found: 0`; // Update result count text
//         }
//     });
// });
