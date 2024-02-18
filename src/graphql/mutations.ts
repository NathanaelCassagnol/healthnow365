/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../app/API.service";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
    profile_picture_URI
    age
    gender
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
    profile_picture_URI
    age
    gender
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
    profile_picture_URI
    age
    gender
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
