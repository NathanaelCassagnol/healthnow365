/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../app/API.service";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
