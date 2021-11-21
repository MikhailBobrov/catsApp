import React from "react";
import { gql } from "@apollo/client";

export const GETCATNAME = gql`
  query Query($name: String!) {
    cat(name: $name) {
      name
      age
      mood
      birthDate
      gender
    }
  }
`;
