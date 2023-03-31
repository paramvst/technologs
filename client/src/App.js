import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BlogpostP, BlogsListP, ErrorP, LandingP, AboutP } from './pages/blogs';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Portfolio />} />

      {/* technologs */}
      <Route path="/technologs" element={<LandingP />} />
        <Route path="/technologs/blogs" element={<BlogsListP />} />
        <Route path="/technologs/about" element={<AboutP />} />
        <Route path="/technologs/blogs/:cat" element={<BlogsListP />} />
        <Route path="/technologs/blog/:id" element={<BlogpostP />} />
        <Route path="*" element={<ErrorP />} />
      {/* <Route path="*" element={<h1>Buddy..  No such Page exists. Sorry for that</h1>} /> */}
    </Routes>
    </>
  );
}

export default App;