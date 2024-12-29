import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import CourseContent from './pages/CourseContent';
import Courses from './pages/Courses'
import Question from './pages/Question';
import Article from './pages/Article';
import Filter from './pages/Filter';
import Congratulation from './pages/Congratulation';
import ProfileDetails from './pages/ProfileDetails';
import ProfileDetails2 from './pages/ProfileDetails2';
import MyCourses2 from './pages/MyCourses2';
import './App.css'
const routes = [
  { path: "/", element: <Home /> },
  { path: "/coursecontent", element: <CourseContent /> },
  { path: "/courses", element: <Courses /> },
  { path : "/question", element: <Question />},
  { path : "/article", element: <Article />},
  { path : "/filter", element: <Filter /> },
  { path : "/congratulation", element: <Congratulation />},
  { path : "/profiledetails", element: <ProfileDetails />},
  { path : "/profiledetails2", element: <ProfileDetails2 />},
  { path : "/mycourses2", element: <MyCourses2 />}


  
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