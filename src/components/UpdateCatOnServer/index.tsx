import { gql } from "@apollo/client";

// Define mutation
export const mutation = gql`
  mutation UpdateCatMutation($name: String, $cat: CatUpdate!) {
    updateCat(name: $name, cat: $cat) {
      name
      age
      mood
      birthDate
      gender
    }
  }
`;
