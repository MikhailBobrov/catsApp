import { gql, useMutation } from "@apollo/client";

// Define mutation
export const mutation = gql`
  mutation AddCatMutation($cat: CatCreate!) {
    addCat(cat: $cat) {
      name
      age
      mood
      birthDate
      gender
    }
  }
`;

// добавляем мутацию объекта + кошечка (добавление кошечки)
