import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddCat } from "../AddCat";
import { ListOfCat } from "../Cats";
import { UpdateCat } from "../UpdateCat";
import { useQuery } from "@apollo/client";
import { GETCATS } from "../GetCatsQuery";

export const RoutesD: React.FunctionComponent = () => {
  const { data, loading } = useQuery(GETCATS);

  if (loading || !data) return <div> loading </div>;

  return (
    <div className="App">
      <Routes>
        <Route path={"/allcats"} element={<ListOfCat cats={data.cats} />} />
        <Route path={"/addcat"} element={<AddCat />} />
        <Route path={"/updatecat/:name"} element={<UpdateCat />} />
      </Routes>
    </div>
  );
};
