
import './App.css';

import { Route, Routes } from 'react-router-dom';


import React from 'react'

import HomePage from "./pages/HomePage"
import WriteArticlePage from "./pages/WriteArticle"
import BlogsListPage from "./pages/BlogsListPage"
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/blogs' element={ <BlogsListPage/> } />
        <Route path='/article' element={ <WriteArticlePage/> } />
      </Routes>
    </div>
  );
}

export default App;
