import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_EXERCISES } from '../graphql/Queries';

export const Exercises = () => {
  const { error, loading, data } = useQuery(LOAD_EXERCISES);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div>This is the exercise component</div>;
};
