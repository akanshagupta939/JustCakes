/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCake = /* GraphQL */ `
  mutation CreateCake(
    $input: CreateCakeInput!
    $condition: ModelCakeConditionInput
  ) {
    createCake(input: $input, condition: $condition) {
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
export const updateCake = /* GraphQL */ `
  mutation UpdateCake(
    $input: UpdateCakeInput!
    $condition: ModelCakeConditionInput
  ) {
    updateCake(input: $input, condition: $condition) {
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
export const deleteCake = /* GraphQL */ `
  mutation DeleteCake(
    $input: DeleteCakeInput!
    $condition: ModelCakeConditionInput
  ) {
    deleteCake(input: $input, condition: $condition) {
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
