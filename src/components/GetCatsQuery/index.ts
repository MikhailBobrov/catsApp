import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  QueryHookOptions,
  useQuery,
  gql,
} from "@apollo/client";
import { Cat } from "./getCatstypes";
// import { getCats } from "./getCatstypes";

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export const GETCATS = gql`
  query {
    cats {
      name
      age
      mood
      birthDate
      gender
    }
  }
`;

// export * as GetCatsTypes from "./getCatstypes";
// export const useGetCatsQuery = (options: QueryHookOptions<getCats>) =>
//   useQuery<getCats>(GETCATS, options);
export const useGetCatsQuery = (options: QueryHookOptions) =>
  useQuery(GETCATS, options);

// тут я получаю список всех кошек
