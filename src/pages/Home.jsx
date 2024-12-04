import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import Categories from '../components/Categories/Categories'
import Courses from '../components/Courses/Courses'
import PopularCourses from '../components/PopularCourses/PopularCourses'
import CoursesAI from '../components/CoursesAI/CoursesAI'
import UserReviews from '../components/UserReviews/UserReviews';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <Categories />
      <PopularCourses />
      <CoursesAI />
      <UserReviews/>
      <Footer />
    </div>
  );
};

export default Home;
