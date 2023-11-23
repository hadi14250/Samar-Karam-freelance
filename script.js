// Header Toggler

const modifiers = {
  elSiteHeaderOpen: "header--open",
};

const elSiteHeader = document.querySelector(".header");
const elSiteHeaderToggler = document.querySelector(".header__toggler");

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener("click", function () {
    elSiteHeader.classList.toggle(modifiers.elSiteHeaderOpen);
  });
}

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

let isDescriptionVisible = false;

function toggleDescription() {
  var content = document.getElementById("bookBoxContent");
  var buttonText = document.querySelector(".read-more-text");

  // Toggle the ellipsis by adding/removing a CSS class
  content.classList.toggle("show-all");

  // Change button text based on the visibility of the content
  if (content.classList.contains("show-all")) {
    buttonText.textContent = "Read Less";
  } else {
    buttonText.textContent = "Read More";
  }
}

//   ----------------- Typing Animation ----------
