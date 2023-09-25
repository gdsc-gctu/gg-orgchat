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
            //   image.style.display = "block";
              image.style.display = "inline-flex"; // Display the image
              image.style.position = "absolute"; // Set position to absolute
              image.style.top = "3em"; // Position at the top
              image.style.left = "3em"; // Position at the left

            //   image.setAttribute("style", "display: flex;", "top: 1px;", "left: 50px;");
            } else {
              // Hide the image if it doesn't match the search term
              image.style.display = "none";
            }
          });
        });
      });
    });
    
  
  
  