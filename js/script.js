document.addEventListener("DOMContentLoaded", function () {
  // The following content has been referenced from Udemy
  var newPanelItems = {
    panel1: [
      "Introduction to AWS",
      "History of AWS",
      "Key concepts and terminology",
    ],
    panel2: ["Download instructions", "Resource links"],
    panel3: [
      "Setting up an AWS account",
      "AWS Management Console overview",
      "First steps in AWS",
    ],
    // Add more panels as needed
  };
  var newPanelItems = [
    ["Introduction to AWS", "History of AWS", "Key concepts and terminology"],
    ["Download instructions", "Resource links"],
    [
      "Setting up an AWS account",
      "AWS Management Console overview",
      "First steps in AWS",
    ],
    // Add more arrays as needed for additional panels
  ];
  // The following content has been referenced from Udemy
  let courses = [
    {
      name: "Web Development Bootcamp",
      instructor: "Colt Steele",
      price: "$500",
      rating: "5",
      img_url: "../assets/course_1.png",
    },
    {
      name: "JavaScript: Understanding the Weird Parts",
      instructor: "Anthony Alicea",
      price: "$500",
      rating: "4",
      img_url: "../assets/course_2.jpeg",
    },
    {
      name: "Modern React with Redux",
      instructor: "Stephen Grider",
      price: "$500",
      rating: "3",
      img_url: "../assets/course_3.jpeg",
    },
    {
      name: "Python Django",
      instructor: "Stephen Grider",
      price: "$500",
      rating: "3",
      img_url: "../assets/course_3.jpeg",
    },
  ];
  function ratingToStars(rating) {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "★";
    }
    return stars;
  }
  let coursesList = document.getElementById("courses-list");
  courses?.forEach((course) => {
    let courseItem = document.createElement("div");
    courseItem.className = "course-item";
    const mode = sessionStorage.getItem("interactiveMode") === "true";
    if (mode === false) {
      courseItem.onclick = () => {
        window.location.href = "course.html";
      };
    }
    // Rendering different content based on the interactive mode
    courseItem.innerHTML = mode
      ? `
        <img src=${course.img_url} class="course_img"/>
        <h4 class="course-title">${course.name}</h4>
        <div class="bottom-div">
        <div class="title">
        <p class="instructer">Instructor: ${course.instructor}</p>
        <div class="dropdown">
        <label for="duration1">Duration</label>
        <select id="duration1">
          <option>2 mins</option>
          <option>5 mins</option>
          <option>7 mins</option>
          <option>10 mins</option>
          <option>15 mins</option>
          <option>30 mins</option>
        </select>
      </div>
        </div>
        <div class="price-div">
        <p>Price: ${course.price}</p>
        <div class="dropdown">
        <label for="duration1">Quiz Location</label>
        <select id="duration1">
          <option>In between the lecture</option>
          <option>At the end of the lecture</option>
          <option>At the end of the module</option>
          <option>At the end of the course</option>
        </select>
        </div>
        </div>
        <div class="price-div">
        <p>Rating: ${ratingToStars(course.rating)}</p>
        <button class="go-to-course" id="goToCourseButton"> Go to Course </button>
        </div>
        </div>
        `
      : `
        <img src=${course.img_url} class="course_img"/>
        <h4 class="course-title">${course.name}</h4>
        <div class="bottom-div">
        <p class="instructer">Instructor: ${course.instructor}</p>
        <p>Price: ${course.price}</p>
        <p>Rating: ${ratingToStars(course.rating)}</p>
        </div>
        `;
    coursesList?.appendChild(courseItem);
    const allGoToCourseDivs = document.getElementsByClassName("go-to-course");
    Array.from(allGoToCourseDivs).forEach((element) => {
      element.addEventListener("click", myClickFunction);
    });
  });
  function myClickFunction() {
    window.location.href = "course.html";
  }
  var acc = document.getElementsByClassName("accordion-button");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  var panels = document.querySelectorAll(".accordion .panel");

  // Iterate over each panel
  panels.forEach(function (panel, index) {
    // Get the items for this panel
    var items = newPanelItems[index];
    var itemsHtml = "";

    // Generate HTML for each item
    items.forEach(function (item) {
      itemsHtml += `<p>  <span class="material-symbols-outlined">
          check_box
          </span> ${item}</p>`;
    });

    // Append the new HTML to the existing panel content using innerHTML
    panel.innerHTML += `<div>${itemsHtml}</div>`;
  });
});

document
  .getElementById("login-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "user@example.com" && password === "password") {
      console.log("success");
      // alert('Login successful! Redirecting to your dashboard...');
      sessionStorage.setItem("user", email);
      window.location.href = "home.html";
      // Redirect to dashboard page
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });

let useriddiv = document.getElementById("userid");
let user = sessionStorage.getItem("user");
if (useriddiv) {
  useriddiv.innerHTML =
    user == null
      ? `<li class="li-user"><a href="login.html">Login</a></li>
<li><a href="signup.html">Sign Up</a></li>`
      : `<li><a href="">Welcome ${user}</a></li>
      <li><a id="sign-out">Sign out</a></li>
`;
}

document
  .getElementById("sign-out")
  ?.addEventListener("click", function (event) {
    event.preventDefault();

    // Get user input values
    sessionStorage.clear();
    location.reload();
    window.location.href = "home.html";
  });

document
  .getElementById("login-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input values
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "user@purdue.edu" && password === "password") {
      console.log("success");
      // alert('Login successful! Redirecting to your dashboard...');
      window.location.href = "home.html";
      // Redirect to dashboard page
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });

document
  .getElementById("signupForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var interactiveMode = document.getElementById("interactiveMode").checked;
    var specialOffers = document.getElementById("specialOffers").checked;

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Interactive Mode:", interactiveMode);
    console.log("Special Offers:", specialOffers);
  });

document.getElementById("interactive-mode")?.addEventListener("click", (e) => {
  e.preventDefault();
  const mode = sessionStorage.getItem("interactiveMode") === "true"; // Convert to boolean
  sessionStorage.setItem("interactiveMode", !mode);
  console.log(mode);
  location.reload();
});

let interactive_mode = document.getElementById("interactive-mode");
const mode = sessionStorage.getItem("interactiveMode") === "true";
if (interactive_mode) {
  interactive_mode.innerHTML = !mode
    ? ` <li id="interactive-mode">
<a >Interactive Mode</a>
<span class="material-symbols-outlined"> toggle_off </span>
</li>`
    : ` <li id="interactive-mode">
<a >Interactive Mode</a>
<span class="material-symbols-outlined" style="color: green;"> toggle_on </span>
</li>`;
}
