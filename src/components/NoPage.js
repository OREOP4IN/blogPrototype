import React, { useState } from 'react';

const NoPage = () => {
  return (
    <div className="App">
      <header className='App-header'
      style={{position:'absolute', top:10, left:20, width:700}}>
        <h1>404</h1>
      </header>
      <div className='App-content'
      style={{position:'absolute', left:10, top:100, width:500, overflowX:'visible'}}>
        <p>
        The page you were searching for does not exist
        <br/><br/>
        AAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
        </p> 
      </div>     
    </div>
  );
};

export default NoPage;