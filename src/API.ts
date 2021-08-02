/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCakeInput = {
  id?: string | null;
  imgLocation?: string | null;
  title?: string | null;
  price?: string | null;
  category?: string | null;
  description?: string | null;
  celebration?: string | null;
  sizeDescription?: string | null;
};

export type ModelCakeConditionInput = {
  imgLocation?: ModelStringInput | null;
  title?: ModelStringInput | null;
  price?: ModelStringInput | null;
  category?: ModelStringInput | null;
  description?: ModelStringInput | null;
  celebration?: ModelStringInput | null;
  sizeDescription?: ModelStringInput | null;
  and?: Array<ModelCakeConditionInput | null> | null;
  or?: Array<ModelCakeConditionInput | null> | null;
  not?: ModelCakeConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Cake = {
  __typename: "Cake";
  id: string;
  imgLocation?: string | null;
  title?: string | null;
  price?: string | null;
  category?: string | null;
  description?: string | null;
  celebration?: string | null;
  sizeDescription?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCakeInput = {
  id: string;
  imgLocation?: string | null;
  title?: string | null;
  price?: string | null;
  category?: string | null;
  description?: string | null;
  celebration?: string | null;
  sizeDescription?: string | null;
};

export type DeleteCakeInput = {
  id: string;
};

export type ModelCakeFilterInput = {
  id?: ModelIDInput | null;
  imgLocation?: ModelStringInput | null;
  title?: ModelStringInput | null;
  price?: ModelStringInput | null;
  category?: ModelStringInput | null;
  description?: ModelStringInput | null;
  celebration?: ModelStringInput | null;
  sizeDescription?: ModelStringInput | null;
  and?: Array<ModelCakeFilterInput | null> | null;
  or?: Array<ModelCakeFilterInput | null> | null;
  not?: ModelCakeFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelCakeConnection = {
  __typename: "ModelCakeConnection";
  items?: Array<Cake | null> | null;
  nextToken?: string | null;
};

export type CreateCakeMutationVariables = {
  input: CreateCakeInput;
  condition?: ModelCakeConditionInput | null;
};

export type CreateCakeMutation = {
  createCake?: {
    __typename: "Cake";
    id: string;
    imgLocation?: string | null;
    title?: string | null;
    price?: string | null;
    category?: string | null;
    description?: string | null;
    celebration?: string | null;
    sizeDescription?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCakeMutationVariables = {
  input: UpdateCakeInput;
  condition?: ModelCakeConditionInput | null;
};

export type UpdateCakeMutation = {
  updateCake?: {
    __typename: "Cake";
    id: string;
    imgLocation?: string | null;
    title?: string | null;
    price?: string | null;
    category?: string | null;
    description?: string | null;
    celebration?: string | null;
    sizeDescription?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCakeMutationVariables = {
  input: DeleteCakeInput;
  condition?: ModelCakeConditionInput | null;
};

export type DeleteCakeMutation = {
  deleteCake?: {
    __typename: "Cake";
    id: string;
    imgLocation?: string | null;
    title?: string | null;
    price?: string | null;
    category?: string | null;
    description?: string | null;
    celebration?: string | null;
    sizeDescription?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type GetCakeQueryVariables = {
  id: string;
};

export type GetCakeQuery = {
  getCake?: {
    __typename: "Cake";
    id: string;
    imgLocation?: string | null;
    title?: string | null;
    price?: string | null;
    category?: string | null;
    description?: string | null;
    celebration?: string | null;
    sizeDescription?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListCakesQueryVariables = {
  filter?: ModelCakeFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCakesQuery = {
  listCakes?: {
    __typename: "ModelCakeConnection";
    items?: Array<{
      __typename: "Cake";
      id: string;
      imgLocation?: string | null;
      title?: string | null;
      price?: string | null;
      category?: string | null;
      description?: string | null;
      celebration?: string | null;
      sizeDescription?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateCakeSubscription = {
  onCreateCake?: {
    __typename: "Cake";
    id: string;
    imgLocation?: string | null;
    title?: string | null;
    price?: string | null;
    category?: string | null;
    description?: string | null;
    celebration?: string | null;
    sizeDescription?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnUpdateCakeSubscription = {
  onUpdateCake?: {
    __typename: "Cake";
    id: string;
    imgLocation?: string | null;
    title?: string | null;
    price?: string | null;
    category?: string | null;
    description?: string | null;
    celebration?: string | null;
    sizeDescription?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type OnDeleteCakeSubscription = {
  onDeleteCake?: {
    __typename: "Cake";
    id: string;
    imgLocation?: string | null;
    title?: string | null;
    price?: string | null;
    category?: string | null;
    description?: string | null;
    celebration?: string | null;
    sizeDescription?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};
