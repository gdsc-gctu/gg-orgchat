
// document.addEventListener("DOMContentLoaded", function () {
//     const dividers = document.querySelectorAll(".divider");
//     const searchInput = document.getElementById("srch");
//     const imageContainers = document.querySelectorAll(".image-container");
//     const heading = document.querySelectorAll(".heading");
//     const description = document.querySelectorAll(".description");
    
//     const container = document.querySelector('.container');
//     const initialContainerHTML = container.innerHTML;
  
  
//     // Listen for changes in the search input field
//     searchInput.addEventListener("input", function () {
//         dividers.forEach((divider) => {
//           divider.style.display = "none";
//         })
  
  
//         heading.forEach((heading) => {
//           heading.style.display = "none";
//         })
  
  
//         description.forEach ((description) =>{
//           description.style.display = "none";
//         })
         
//         const searchTerm = searchInput.value.toLowerCase();
    
//         // Iterate through each image container
//         imageContainers.forEach((container) => {
//           const imagesInContainer = container.querySelectorAll(".img-circle");
    
//           // Iterate through images in the container
//           imagesInContainer.forEach((image) => {
//             const imageText = image.querySelector("h5").textContent.toLowerCase();
    
//             // Check if the image text contains the search term
//             if (imageText.includes(searchTerm)) {
//               // Show the image if it matches the search term
//               image.style.display = "block";
//               image.style.margin = "";
//             } else {
//               // Hide the image if it doesn't match the search term
//               image.style.display = "none";

//               searchInput.addEventListener('input', (e) => {
//                 if (!e.target.value.trim()){
//               container.innerHTML = initialContainerHTML;

//             }
//             })
//             }
//           });
//         });
//       });
//     });
    
document.addEventListener("DOMContentLoaded", function () {
    const dividers = document.querySelectorAll(".divider");
    const searchInput = document.getElementById("srch");
    const imageContainers = document.querySelectorAll(".image-container");
    const headings = document.querySelectorAll(".heading");
    const descriptions = document.querySelectorAll(".description");
  
    const container = document.querySelector('.container');
    const initialContainerHTML = container.innerHTML;
  
    // Listen for changes in the search input field
    searchInput.addEventListener("input", function () {
      dividers.forEach((divider) => {
        divider.style.display = "none";
      });
  
      headings.forEach((heading) => {
        heading.style.display = "none";
      });
  
      descriptions.forEach((description) => {
        description.style.display = "none";
      });
  
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
  
      // Check if the search input is empty, and if so, restore the initial container content
      if (!searchInput.value.trim()) {
        container.innerHTML = initialContainerHTML;
      }
    });
  });
  
  
  
// document.addEventListener("DOMContentLoaded", function () {
//     const dividers = document.querySelectorAll(".divider");
//     const searchInput = document.getElementById("srch");
//     const imageContainers = document.querySelectorAll(".image-container");
//     const heading = document.querySelectorAll(".heading");
//     const description = document.querySelectorAll(".description");
  
//     const container = document.querySelector('.container');
//     const initialContainerHTML = container.innerHTML;
  
//     // Listen for changes in the search input field
//     searchInput.addEventListener("input", function () {
//       dividers.forEach((divider) => {
//         divider.style.display = "none";
//       });
  
//       heading.forEach((heading) => {
//         heading.style.display = "none";
//       });
  
//       description.forEach((description) => {
//         description.style.display = "none";
//       });
  
//       const searchTerm = searchInput.value.toLowerCase();
  
//       // Iterate through each image container
//       imageContainers.forEach((container) => {
//         const imagesInContainer = container.querySelectorAll(".img-circle");
  
//         // Iterate through images in the container
//         imagesInContainer.forEach((image) => {
//           const imageText = image.querySelector("h5").textContent.toLowerCase();
  
//           // Check if the image text contains the search term
//           if (imageText.includes(searchTerm)) {
//             // Show the image if it matches the search term
//             image.style.display = "block";
//             image.style.margin = "";
//           } else {
//             // Hide the image if it doesn't match the search term
//             image.style.display = "none";
//           }
//         });
//       });
  
//       // Check if the search input is empty, and if so, restore the initial container content
//       if (!searchInput.value.trim()) {
//         container.innerHTML = initialContainerHTML;
//       }
//     });
//   });
  


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
//     const container = document.querySelector('.image-container'); // Replace with the actual container class
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

// document.addEventListener("DOMContentLoaded", function () {
//     const dividers = document.querySelectorAll(".divider");
//     const searchInput = document.getElementById("srch");
//     const imageContainers = document.querySelectorAll(".image-container");
//     const headings = document.querySelectorAll(".heading");
//     const descriptions = document.querySelectorAll(".description");
    
//     const container = document.querySelector('.container');
//     const initialContainerHTML = container.innerHTML;
  
//     searchInput.addEventListener("input", function () {
//       const searchTerm = searchInput.value.toLowerCase();
      
//       // Hide dividers, headings, and descriptions
//       dividers.forEach((divider) => {
//         divider.style.display = "none";
//       });
      
//       headings.forEach((heading) => {
//         heading.style.display = "none";
//       });
      
//       descriptions.forEach((description) => {
//         description.style.display = "none";
//       });
  
//       // Iterate through image containers
//       imageContainers.forEach((imageContainer) => {
//         const imagesInContainer = imageContainer.querySelectorAll(".img-circle");
  
//         // Iterate through images in the container
//         imagesInContainer.forEach((image) => {
//           const imageText = image.querySelector("h5").textContent.toLowerCase();
  
//           // Check if the image text contains the search term
//           if (imageText.includes(searchTerm)) {
//             // Show the image if it matches the search term
//             image.style.display = "block";
//           } else {
//             // Hide the image if it doesn't match the search term
//             image.style.display = "none";
//           }
//         });
  
//         // Show the image container if it contains visible images
//         if (Array.from(imagesInContainer).some((image) => image.style.display !== "none")) {
//           imageContainer.style.display = "block";
//         } else {
//           imageContainer.style.display = "none";
//         }
//       });
  
//       // Check if the search input is empty and restore the initial container content
//       if (!searchTerm.trim()) {
//         container.innerHTML = initialContainerHTML;
//       }
//     });
//   });
  
// document.addEventListener("DOMContentLoaded", function () {
//     const dividers = document.querySelectorAll(".divider");
//     const searchInput = document.getElementById("srch");
//     const imageContainers = document.querySelectorAll(".image-container");
//     const headings = document.querySelectorAll(".heading");
//     const descriptions = document.querySelectorAll(".description");
    
//     const container = document.querySelector('.container');
//     const initialContainerHTML = container.innerHTML;
  
//     function filterImages() {
//       const searchTerm = searchInput.value.toLowerCase();
      
//       // Hide dividers, headings, and descriptions
//       dividers.forEach((divider) => {
//         divider.style.display = "none";
//       });
      
//       headings.forEach((heading) => {
//         heading.style.display = "none";
//       });
      
//       descriptions.forEach((description) => {
//         description.style.display = "none";
//       });
  
//       // Iterate through image containers
//       imageContainers.forEach((imageContainer) => {
//         const imagesInContainer = imageContainer.querySelectorAll(".img-circle");
  
//         // Iterate through images in the container
//         imagesInContainer.forEach((image) => {
//           const imageText = image.querySelector("h5").textContent.toLowerCase();
  
//           // Check if the image text contains the search term
//           if (imageText.includes(searchTerm)) {
//             // Show the image if it matches the search term
//             image.style.display = "block";
//           } else {
//             // Hide the image if it doesn't match the search term
//             image.style.display = "none";
//           }
//         });
  
//         // Show the image container if it contains visible images
//         if (Array.from(imagesInContainer).some((image) => image.style.display !== "none")) {
//           imageContainer.style.display = "block";
//         } else {
//           imageContainer.style.display = "none";
//         }
//       });
//     }
  
//     // Attach the event listener for the "input" event
//     searchInput.addEventListener("input", filterImages);
  
//     // Attach a separate event listener to handle clearing and restoring content
//     searchInput.addEventListener("input", function () {
//       const searchTerm = searchInput.value.trim();
//       if (searchTerm === "") {
//         container.innerHTML = initialContainerHTML;
//       }
//     });
//   });
  


// document.addEventListener("DOMContentLoaded", function () {
//     const dividers = document.querySelectorAll(".divider");
//     const searchInput = document.getElementById("srch");
//     const imageContainers = document.querySelectorAll(".image-container");
//     const headings = document.querySelectorAll(".heading");
//     const descriptions = document.querySelectorAll(".description");
    
//     const container = document.querySelector('.container');
//     const initialContainerHTML = container.innerHTML;
  
//     function filterImages() {
//       const searchTerm = searchInput.value.toLowerCase();
      
//       // Hide dividers, headings, and descriptions
//       dividers.forEach((divider) => {
//         divider.style.display = "none";
//       });
      
//       headings.forEach((heading) => {
//         heading.style.display = "none";
//       });
      
//       descriptions.forEach((description) => {
//         description.style.display = "none";
//       });
  
//       // Iterate through image containers
//       imageContainers.forEach((imageContainer) => {
//         const imagesInContainer = imageContainer.querySelectorAll(".img-circle");
//         let containerHasVisibleImages = false;
  
//         // Iterate through images in the container
//         imagesInContainer.forEach((image) => {
//           const imageText = image.querySelector("h5").textContent.toLowerCase();
  
//           // Check if the image text contains the search term
//           if (imageText.includes(searchTerm)) {
//             // Show the image if it matches the search term
//             image.style.display = "block";
//             containerHasVisibleImages = true;
//           } else {
//             // Hide the image if it doesn't match the search term
//             image.style.display = "none";
//           }
//         });
  
//         // Show or hide the image container based on visibility of images
//         imageContainer.style.display = containerHasVisibleImages ? "block" : "none";
//       });
  
//       // Check if the search input is empty and restore the initial container content
//       if (searchTerm === "") {
//         container.innerHTML = initialContainerHTML;
//       }
//     }
  
//     // Attach the event listener for the "input" event
//     searchInput.addEventListener("input", filterImages);
//   });
  





