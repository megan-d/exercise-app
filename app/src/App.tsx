import React, { useEffect } from 'react';
import './App.css';

function getExercises() {
  fetch(`/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `query {
        exercises }`,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch(console.error);
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
