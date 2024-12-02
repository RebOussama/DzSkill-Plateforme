import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import CourseContent from './pages/CourseContent';
const routes = [
  { path: "/", element: <Home /> },
  { path: "/coursecontent", element: <CourseContent /> },
  ,
];

const App = () => {


 
  
  return (
    <div>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </div>
  )
}

export default App