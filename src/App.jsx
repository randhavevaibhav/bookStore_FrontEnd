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
    <Route path='/bookStore_FrontEnd' element={<Home/>}/>
    <Route path='/bookStore_FrontEnd/books/create' element={<CreateBooks/>}/>
    <Route path='/bookStore_FrontEnd/books/details/:id' element={<Showbook/>}/>
    <Route path='/bookStore_FrontEnd/books/edit/:id' element={<EditBook/>}/>
    <Route path='/bookStore_FrontEnd/books/delete/:id' element={<Deletebook/>}/>
   
    
  </Routes>
  );
};

export default App;