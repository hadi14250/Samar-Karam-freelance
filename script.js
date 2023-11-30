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
    buttonText.textContent = "Read Less ↑";
  } else {
    buttonText.textContent = "Read More ↓";
  }
}


let isDescriptionVisible7 = false;

function toggleDescription7() {
  var content = document.getElementById("bookBoxContent7");
  var buttonText = document.querySelector(".read-more-text7");

  // Toggle the ellipsis by adding/removing a CSS class
  content.classList.toggle("show-all7");

  // Change button text based on the visibility of the content
  if (content.classList.contains("show-all7")) {
    buttonText.textContent = "Read Less ↑";
  } else {
    buttonText.textContent = "Read More ↓";
  }
}


let isDescriptionVisible4 = false;

function toggleDescription4() {
  var content = document.getElementById("bookBoxContent4");
  var buttonText = document.querySelector(".read-more-text4");

  // Toggle the ellipsis by adding/removing a CSS class
  content.classList.toggle("show-all4");

  // Change button text based on the visibility of the content
  if (content.classList.contains("show-all4")) {
    buttonText.textContent = "Read Less ↑";
  } else {
    buttonText.textContent = "Read More ↓";
  }
}

let isDescriptionVisible5 = false;

function toggleDescription5() {
  var content = document.getElementById("bookBoxContent5");
  var buttonText = document.querySelector(".read-more-text5");

  // Toggle the ellipsis by adding/removing a CSS class
  content.classList.toggle("show-all5");

  // Change button text based on the visibility of the content
  if (content.classList.contains("show-all5")) {
    buttonText.textContent = "Read Less ↑";
  } else {
    buttonText.textContent = "Read More ↓";
  }
}


let isDescriptionVisible1 = false;

function toggleDescription1() {
  var content = document.getElementById("bookBoxContent1");
  var buttonText = document.querySelector(".read-more-text1");

  // Toggle the ellipsis by adding/removing a CSS class
  content.classList.toggle("show-all1");

  // Change button text based on the visibility of the content
  if (content.classList.contains("show-all1")) {
    buttonText.textContent = "Read Less ↑";
  } else {
    buttonText.textContent = "Read More ↓";
  }
}

let isDescriptionVisible2 = false;

function toggleDescription2() {
  var content = document.getElementById("bookBoxContent2");
  var buttonText = document.querySelector(".read-more-text2");

  // Toggle the ellipsis by adding/removing a CSS class
  content.classList.toggle("show-all2");

  // Change button text based on the visibility of the content
  if (content.classList.contains("show-all2")) {
    buttonText.textContent = "Read Less ↑";
  } else {
    buttonText.textContent = "Read More ↓";
  }
}

let isDescriptionVisible6 = false;

function toggleDescription6() {
  var content = document.getElementById("bookBoxContent6");
  var buttonText = document.querySelector(".read-more-text6");

  // Toggle the ellipsis by adding/removing a CSS class
  content.classList.toggle("show-all6");

  // Change button text based on the visibility of the content
  if (content.classList.contains("show-all6")) {
    buttonText.textContent = "Read Less ↑";
  } else {
    buttonText.textContent = "Read More ↓";
  }
}

//   ----------------- Typing Animation ----------
