/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCake = /* GraphQL */ `
  query GetCake($id: ID!) {
    getCake(id: $id) {
      id
      imgLocation
      title
      price
      category
      description
      celebration
      sizeDescription
      createdAt
      updatedAt
    }
  }
`;
export const listCakes = /* GraphQL */ `
  query ListCakes(
    $filter: ModelCakeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCakes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imgLocation
        title
        price
        category
        description
        celebration
        sizeDescription
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
