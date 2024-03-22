document.addEventListener('DOMContentLoaded', function() {
    let courses = [
        {name: "Web Development Bootcamp", instructor: "Colt Steele"},
        {name: "JavaScript: Understanding the Weird Parts", instructor: "Anthony Alicea"},
        {name: "Modern React with Redux", instructor: "Stephen Grider"}
    ];

    let coursesList = document.getElementById('courses-list');
    courses.forEach(course => {
        let courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerHTML = `<h3>${course.name}</h3><p>Instructor: ${course.instructor}</p>`;
        coursesList.appendChild(courseItem);
    });
});
