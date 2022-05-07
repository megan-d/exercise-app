import { gql } from '@apollo/client';

export const LOAD_EXERCISES = gql`
  query {
    getExercises
  }
`;
