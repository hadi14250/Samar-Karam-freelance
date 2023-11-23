document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class book-box
    const bookBoxes = document.querySelectorAll(".book-box");
  
    // Function to handle the intersection changes
    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        const bookImage = entry.target.querySelector(".book-box__image");
        if (entry.isIntersecting) {
          bookImage.classList.add("visible");
        }
      });
    }
  
    // Create an Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust the threshold as needed
    });
  
    // Observe each book box
    bookBoxes.forEach((bookBox) => {
      const bookImage = bookBox.querySelector(".book-box__image");
  
      // Hide the image initially
      bookImage.classList.remove("visible");
  
      observer.observe(bookBox);
    });
  });
  