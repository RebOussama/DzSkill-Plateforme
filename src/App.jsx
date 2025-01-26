import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Add this import
import store from './redux/store'; // You'll need to create this
import Home from './pages/Home';
import CourseContent from './pages/CourseContent';
import Courses from './pages/Courses';
import Question from './pages/Question';
import Article from './pages/Article';
import Filter from './pages/Filter';
import Congratulation from './pages/Congratulation';
import ProfileDetails from './pages/ProfileDetails';
import ProfileDetails2 from './pages/ProfileDetails2';
import MyCourses from './pages/MyCourses';
import CreateCourse from './pages/CreateCourse';
import UploadLesson from './pages/UploadLesson';
import MyCourses2 from './pages/MyCourses2'; // Keep this import, it was missing after conflict resolution
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProfileView from './pages/ProfileView';

const routes = [
  { path: "/", element: <Home /> },
  { path: "/coursecontent", element: <CourseContent /> },
  { path: "/courses", element: <Courses /> },
  { path: "/courses/:id", element: <CourseContent /> },
  { path: "/question", element: <Question /> },
  { path: "/mycourses", element: <MyCourses /> },
  { path: "/createcourse", element: <CreateCourse /> },
  { path: "/uploadlesson", element: <UploadLesson /> },
  { path: "/article", element: <Article /> },
  { path: "/filter", element: <Filter /> },
  { path: "/congratulation", element: <Congratulation /> },
  { path: "/profiledetails", element: <ProfileDetails /> },
  { path: "/profiledetails2", element: <ProfileDetails2 /> },
  { path: "/mycourses2", element: <MyCourses2 /> }, // Keep this route
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/profileview", element: <ProfileView /> }

];

const App = () => {
  return (
    <Provider store={store}>
      
        <Router>
          <div>
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Routes>
          </div>
        </Router>
      
    </Provider>
  );
};

export default App;
