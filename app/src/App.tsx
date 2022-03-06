import React, { useEffect } from 'react';
import './App.css';
import Exercises from './Exercises';

async function getExercises() {
  try {
    const res = await fetch(`/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query {
          exercises }`,
      }),
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

function App() {
  useEffect(() => {
    getExercises();
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Exercise App</p>
      </header>
    </div>
  );
}

export default App;
