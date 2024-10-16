/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    first_name
    last_name
    username
    email
    phone_number
    birth_date
    address_line_one
    address_line_two
    address_city
    address_state
    address_country
    address_zip_code
    age
    gender
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      first_name
      last_name
      username
      email
      phone_number
      birth_date
      address_line_one
      address_line_two
      address_city
      address_state
      address_country
      address_zip_code
      age
      gender
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const userByUsername = /* GraphQL */ `query UserByUsername(
  $username: String!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  userByUsername(
    username: $username
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      first_name
      last_name
      username
      email
      phone_number
      birth_date
      address_line_one
      address_line_two
      address_city
      address_state
      address_country
      address_zip_code
      age
      gender
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserByUsernameQueryVariables,
  APITypes.UserByUsernameQuery
>;
