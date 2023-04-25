import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home/home';
import Header from './components/Layout/header';
import Courses from './components/Courses/courses';

function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
    </Routes>
  </Router>
}

export default App;
