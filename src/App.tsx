import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "./App.css";
import { Header } from "./components/Header";
import { ListOfCat } from "./components/Cats";
import { useGetCatsQuery } from "./components/GetCatsQuery";
import { AddCat } from "./components/AddCat";
import { UpdateCat } from "./components/UpdateCat";

import { RoutesD } from "./components/RoutesD";

export type CatType = {
  name: string;
  age: number;
  mood: number;
  birthDate: Date;
  gender: boolean;
};

export const App: React.FunctionComponent = () => {
  const { data, loading } = useGetCatsQuery({});
  // const { data, loading } = useQuery(GETCATS);

  if (loading || !data) return <div> loading </div>;
  console.log(data);

  return (
    <div className="App">
      <Header title="ListOfCats" />
      <RoutesD />
    </div>
  );
};
