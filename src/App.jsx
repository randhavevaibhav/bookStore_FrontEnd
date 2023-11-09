import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import Showbook from './pages/Showbook';
import EditBook from './pages/EditBook';
import Deletebook from './pages/Deletebook';


const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books/create' element={<CreateBooks/>}/>
    <Route path='/books/details/:id' element={<Showbook/>}/>
    <Route path='/books/edit/:id' element={<EditBook/>}/>
    <Route path='/books/delete/:id' element={<Deletebook/>}/>
   
    
  </Routes>
  );
};

export default App;