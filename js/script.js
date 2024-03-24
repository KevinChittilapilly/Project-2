document.addEventListener("DOMContentLoaded", function () {
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
  courses.forEach((course) => {
    let courseItem = document.createElement("div");
    courseItem.className = "course-item";
    courseItem.innerHTML = `
        <img src=${course.img_url} class="course_img"/>
        <h4>${course.name}</h4>
        <div class="bottom-div">
        <p class="instructer">Instructor: ${course.instructor}</p>
        <p>Price: ${course.price}</p>
        <p>Rating: ${ratingToStars(course.rating)}</p>
        </div>
        `;
    coursesList.appendChild(courseItem);
  });
});

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get user input values
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email === 'user@example.com' && password === 'password') {
    console.log('success');
      alert('Login successful! Redirecting to your dashboard...');
      // Redirect to dashboard page
  } else {
      alert('Invalid email or password. Please try again.');
  }
});
