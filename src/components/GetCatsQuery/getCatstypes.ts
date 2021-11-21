export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type CatCreate = {
  name: Scalars["String"];
  age: Scalars["Int"];
  mood?: InputMaybe<Scalars["Int"]>;
  birthDate: Scalars["Date"];
  gender: Scalars["Boolean"];
};

export type CatUpdate = {
  name?: InputMaybe<Scalars["String"]>;
  age?: InputMaybe<Scalars["Int"]>;
  mood?: InputMaybe<Scalars["Int"]>;
  birthDate?: InputMaybe<Scalars["Date"]>;
  gender?: InputMaybe<Scalars["Boolean"]>;
};

export type Cat = {
  __typename?: "Cat";
  name: Scalars["String"];
  age: Scalars["Int"];
  mood?: Maybe<Scalars["Int"]>;
  birthDate: Scalars["Date"];
  gender: Scalars["Boolean"];
};

export type Query = {
  __typename?: "Query";
  cats: Array<Cat>;
  cat?: Maybe<Cat>;
};

export type QueryCatArgs = {
  name: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  addCat?: Maybe<Cat>;
  removeCat: Scalars["Boolean"];
  updateCat?: Maybe<Cat>;
};

export type MutationAddCatArgs = {
  cat: CatCreate;
};

export type MutationRemoveCatArgs = {
  name: Scalars["String"];
};

export type MutationUpdateCatArgs = {
  name?: InputMaybe<Scalars["String"]>;
  cat: CatUpdate;
};
