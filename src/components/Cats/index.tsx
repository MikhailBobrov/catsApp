import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import "./Cats.css";
import {} from "../AddCat";
import { DeleteOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { deleteMutation } from "../DeleteCatFromServer";
import { CatCard } from "../CatCard";
import { CatProps } from "..//CatCard";
import { GETCATS } from "../GetCatsQuery";

export type CatAr = {
  cats: Array<CatProps>;
};

export const ListOfCat: React.FunctionComponent<CatAr> = (cats) => {
  const [removeCat] = useMutation(deleteMutation, {
    update: (cache, data) => {
      const oldCatCardList: any = cache.readQuery({ query: GETCATS });

      const newArOfCats = oldCatCardList.cats.filter(
        (cat: any) => cat.name !== data.data.removeCat
      );

      cache.writeQuery({ query: GETCATS, data: { cats: newArOfCats } });
    },
  });

  function onDelete(item: any) {
    removeCat({
      variables: {
        name: item.name,
      },
    });
  }
  // было data.cats
  return (
    <div className="card">
      {cats.cats.map((item: any) => {
        return (
          <div>
            <div className="site-card-border-less-wrapper">
              <CatCard cat={item} />
              <div className="delete_button">
                <Button onClick={() => onDelete(item)} type="link">
                  <DeleteOutlined />
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
