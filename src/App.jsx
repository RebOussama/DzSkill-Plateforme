import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import CourseContent from './pages/CourseContent';
import Courses from './pages/Courses'
import Question from './pages/Question';
import './App.css'
import MyCourses from './pages/MyCourses';
const routes = [
  { path: "/", element: <Home /> },
  { path: "/coursecontent", element: <CourseContent /> },
  { path: "/courses", element: <Courses /> },
  { path: "/courses/:id", element: <CourseContent /> },
  { path : "/question", element: <Question />},
  { path : "/mycourses", element:<MyCourses />}


  
  ,
];

const App = () => {


 
  
  return (
    <Router>
    <div>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </div>
    </Router>
  )
}

export default App