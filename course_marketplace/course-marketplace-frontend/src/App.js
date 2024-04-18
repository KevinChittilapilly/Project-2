import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get(API_BASE_URL + 'courses/');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Course Marketplace</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>Instructor: {course.instructor_name}</p>
            <p>Price: ${course.price}</p>
            <p>Rating: {course.rating}</p>
            <p><a href={course.url}>Course URL</a></p>
            <img src={course.image} alt="Course Image" style={{ width: '200px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
