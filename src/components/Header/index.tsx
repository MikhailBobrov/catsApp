import React from "react";
import "./Header.css";
import { NavBar } from "../Navbar";

export type HeaderProps = {
  title: string;
};

export const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      <NavBar />
    </div>
  );
};
