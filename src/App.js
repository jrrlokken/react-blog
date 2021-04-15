import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AllPosts from './components/AllPosts';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={AllPosts} path='/' exact />
        <Route component={SinglePost} path='/:slug' />
      </div>
    </BrowserRouter>
  );
}

export default App;
