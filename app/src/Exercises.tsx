import React, { useEffect } from 'react';
import './App.css';

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

function Exercises() {
  useEffect(() => {
    getExercises();
  }, []);
  return <div></div>;
}

export default Exercises;
