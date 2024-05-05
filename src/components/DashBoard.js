import React, { useState, useEffect } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import { courseDetails } from '../data';

const Dashboard = () => {
  const [courses, setCourses] = useState(courseDetails);
  const [studentCourses, setStudentCourses] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const coursesForStudent = courses.map(course => {
      const studentCourse = { ...course };
      const student = studentCourse.students.find(student => student.id === parseInt(id));
      studentCourse.progress = student ? student.progress : 0;
      return studentCourse;
    });
    setStudentCourses(coursesForStudent);
  }, [id, courses]);

  useEffect(() => {
    const coursesForStudent = courses.filter(course =>
      course.students.some(student => student.id === parseInt(id))
    );
    setStudentCourses(prevStudentCourses => {
      const updatedStudentCourses = prevStudentCourses.map(prevCourse => {
        const foundCourse = coursesForStudent.find(course => course.id === prevCourse.id);
        return foundCourse ? { ...prevCourse } : null;
      });
      return updatedStudentCourses.filter(course => course !== null);
    });
  }, [id, courses]);

  const handleClick = (courseId) => {
    setStudentCourses(prevCourses =>
      prevCourses.map(course => {
        if (course.id === courseId && course.progress < 100) {
          return { ...course, progress: course.progress + 10 };
        }
        return course;
      })
    );
  };

  const handleCourseCompletion = (id) => {
    const updatedCourses = studentCourses.map(course => {
      if (course.id === id) {
        return { ...course, progress: 100 };
      }
      return course;
    });
    setStudentCourses(updatedCourses);
  };

  return (
    <div className="dashboard-container">
      <h1>My Courses</h1>
      <ul className="courses-list">
        {studentCourses.map(studentCourse => (
          <li key={studentCourse.id} className="course-item">
            <div className="course-info">
              <img src={studentCourse.thumbnail} alt={studentCourse.name} className="thumbnail" />
              <div className="details">
                <h2>{studentCourse.name}</h2>
                <p className="instructor">Instructor: {studentCourse.instructor}</p>
                <p className="due-date">Due Date: {studentCourse.students.find(student => student.id === parseInt(id))?.dueDate}</p>
                <div> 
                  <div>
                    {studentCourse.progress === 100 ? "Completed" : `Progress: ${studentCourse.progress}%`}
                  </div>
                </div>
                <button onClick={() => handleClick(studentCourse.id)} disabled={studentCourse.progress === 100} className='progress-button'>
                  Increase Progress
                </button>
              </div>
            </div>
            {studentCourse.progress !== 100 && (
              <button onClick={() => handleCourseCompletion(studentCourse.id)} className="complete-button">Mark as Completed</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
