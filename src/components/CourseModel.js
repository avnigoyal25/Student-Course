import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { courseDetails } from '../data';

const CourseModel = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const course = courseDetails.find(course => course.id === parseInt(id));
  
    return (
        <div className="container">
            <header>
                <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
            </header>
            <div className="course-details">
                <h1>{course.name}</h1>
                <div>
                    <h2>Course Information</h2>
                    <p><strong>Instructor:</strong> {course.instructor}</p>
                    <p><strong>Description:</strong> {course.description}</p>
                    <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Schedule:</strong> {course.schedule}</p>
                    <p><strong>Location:</strong> {course.location}</p>
                    <p><strong>Pre-requisites:</strong> {course.prerequisites.join(', ')}</p>
                    <details>
                        <summary><strong>Syllabus:</strong></summary>
                        {course.syllabus.map((item, index) => (
                            <div key={index}>
                                <p><strong>Week {item.week}:</strong> {item.topic}</p>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </details>
                </div>
            </div>
        </div>
    );
}

export default CourseModel;
