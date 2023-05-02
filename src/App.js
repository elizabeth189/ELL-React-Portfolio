import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {
//   ApolloProvider,
// } from '@apollo/client';

import Nav from './components/nav'
// import pages pages
import About from './components/about';
import Resume from './components/resume';
// import Home from './pages/Home';
import Contact from './components/contact';
import Portfolio from './components/portfolio';

function App() {
  return (
    // <ApolloProvider client={client}>

    <div className="">
 {/* <Nav/> */}
<About/>
   

      <Router>
        <>
          {/* <Navbar /> */}
          <Routes>
            {/* <Route 
              path="/" 
              // element={<Portfolio/>} 
              element={<Home/>} 
            /> */}
            <Route 
              path="/about" 
              element={<About/>} 
            />
             <Route 
              path="/Portfolio" 
              element={<Portfolio/>} 
            />
            <Route 
              path="/contact" 
              element={<Contact/>} 
            />
            <Route 
              path="/resume" 
              element={<Resume/>} 
            />
            <Route 
              path='*' 
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    
    </div>

  );
}

export default App;
