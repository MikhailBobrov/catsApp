import React from "react";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Route, Routes, useParams, Link } from "react-router-dom";
import { UpdateCat } from "../UpdateCat";
import "./CatCard.css";

type Cat = {
  name: string;
  age: number;
  mood: number;
  birthdate: Date;
};

export type CatProps = {
  cat: Cat;
};

export const CatCard: React.FunctionComponent<CatProps> = (props) => {
  // тоже можно использовать для перехода по ссылке
  // const navigate = useNavigate();
  // function handleClick() {
  //   navigate("/changecat");
  // }
  console.log(new Date(props.cat.birthdate).getDate());

  return (
    <div>
      <Card title="Cats information" bordered={false} style={{ width: 300 }}>
        <p>{props.cat.name}</p>
        <p>{props.cat.age}</p>
        <p> {props.cat.mood}</p>
        <p> {new Date(props.cat.birthdate).getDate()}</p>
      </Card>
      {/* <Button className="update__button" onClick={handleClick} type="primary">
        Update Cat
      </Button> */}
      <Link className="navbar__item" to={`/updatecat/${props.cat.name}`}>
        Update Cat
      </Link>
    </div>
  );
};
