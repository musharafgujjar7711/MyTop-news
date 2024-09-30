import React from 'react';
import Navabar from './Components/Navabar';
import News from './Components/News';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navabar />
      <Routes>
        <Route path='/home' element={<News key="home" category="general" country="us" />} />
        <Route path='/sports' element={<News key="sports" category="sports" country="us" />} />
        <Route path='/technology' element={<News key="technology" category="technology" country="us" />} />
        <Route path='/science' element={<News key="science" category="science" country="us" />} />
        <Route path='/entertainment' element={<News key="entertainment" category="entertainment" country="us" />} />
        <Route path='/business' element={<News key="business" category="business" country="us" />} />
        <Route path='/' element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
