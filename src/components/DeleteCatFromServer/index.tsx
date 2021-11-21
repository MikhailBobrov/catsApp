import { gql } from "@apollo/client";

// Define mutation
export const deleteMutation = gql`
  mutation Mutation($name: String!) {
    removeCat(name: $name)
  }
`;

//удаление кошечки
