document.addEventListener("DOMContentLoaded", function () {
  var newPanelItems = {
    'panel1': [
        'Introduction to AWS',
        'History of AWS',
        'Key concepts and terminology'
    ],
    'panel2': [
        'Download instructions',
        'Resource links'
    ],
    'panel3': [
        'Setting up an AWS account',
        'AWS Management Console overview',
        'First steps in AWS'
    ]
    // Add more panels as needed
};
var newPanelItems = [
  ['Introduction to AWS', 'History of AWS', 'Key concepts and terminology'],
  ['Download instructions', 'Resource links'],
  ['Setting up an AWS account', 'AWS Management Console overview', 'First steps in AWS']
  // Add more arrays as needed for additional panels
];
  let courses = [
    {
      name: "Web Development Bootcamp",
      instructor: "Colt Steele",
      price:"$500",
      rating:"5",
      img_url: "../assets/course_1.png",
    },
    {
      name: "JavaScript: Understanding the Weird Parts",
      instructor: "Anthony Alicea",
      price:"$500",
      rating:"4",
      img_url: "../assets/course_2.jpeg",
    },
    {
      name: "Modern React with Redux",
      instructor: "Stephen Grider",
      price:"$500",
      rating:"3",
      img_url: "../assets/course_3.jpeg",
    },
  ];
  function ratingToStars(rating) {
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += '★';
    }
    return stars;
  }
  let coursesList = document.getElementById("courses-list");
  courses?.forEach((course) => {
    let courseItem = document.createElement("div");
    courseItem.className = "course-item";
    courseItem.onclick = () =>{
      window.location.href = "course.html"
    } 
    courseItem.innerHTML = `
        <img src=${course.img_url} class="course_img"/>
        <h4>${course.name}</h4>
        <div class="bottom-div">
        <p class="instructer">Instructor: ${course.instructor}</p>
        <p>Price: ${course.price}</p>
        <p>Rating: ${ratingToStars(course.rating)}</p>
        </div>
        `;
    coursesList?.appendChild(courseItem);
  });

  var acc = document.getElementsByClassName("accordion-button");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }
    var panels = document.querySelectorAll('.accordion .panel');

    // Iterate over each panel
    panels.forEach(function(panel, index) {
      // Get the items for this panel
      var items = newPanelItems[index];
      var itemsHtml = '';

      // Generate HTML for each item
      items.forEach(function(item) {
          itemsHtml += `<p>  <span class="material-symbols-outlined">
          check_box
          </span> ${item}</p>`;
      });

      // Append the new HTML to the existing panel content using innerHTML
      panel.innerHTML += `<div>${itemsHtml}</div>`;
  });

    
   
});

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get user input values
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email === 'user@purdue.edu' && password === 'password') {
    console.log('success');
      // alert('Login successful! Redirecting to your dashboard...');
      window.location.href = "home.html"
      // Redirect to dashboard page
  } else {
      alert('Invalid email or password. Please try again.');
  }
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
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