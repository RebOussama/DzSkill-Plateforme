import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
const routes = [
  { path: "/", element: <Home /> },
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