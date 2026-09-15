import React from 'react';
import Test from './Test';
import { Route, Routes, Link } from 'react-router-dom';
import  HomeContent  from './HomeContent'
import Contact from './Contact';
import Boutique from './Boutique';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContent />} />
      <Route path="/Test" element={<Test />} />``
      <Route path="/Contact" element={<Contact />} />
      <Route path="Boutique" element={<Boutique />} />
    </Routes>
  );

}
export default App;