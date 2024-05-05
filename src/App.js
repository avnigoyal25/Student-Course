import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Courselist from './components/Courslist';
import CourseModel from './components/CourseModel';
import LogIn from './components/LogIn';
import Dashboard from './components/DashBoard'




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Courselist/>}/>
        <Route path="/model/:id" element={<CourseModel/>}/>
        <Route path="/login/" element={<LogIn/>}/>
        <Route path="/dashboard/:id" element={<Dashboard/>}/>
      </Routes>
      
    </div>
  );
}

export default App;





  
