import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import CoursePage from './components/CoursePage';
import AddReview from './components/AddReview';
import Aboutme from './components/Aboutme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
   
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/coursepage" element={< CoursePage/>} />
      <Route path="/addreview" element={< AddReview/>} />
      <Route path="/aboutme" element={< Aboutme/>} />




    </Routes>
    </Router>
);

