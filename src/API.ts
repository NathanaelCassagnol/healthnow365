/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  first_name: string,
  last_name: string,
  username: string,
  email: string,
  phone_number: string,
  birth_date: string,
  address_line_one?: string | null,
  address_line_two?: string | null,
  address_city?: string | null,
  address_state?: string | null,
  address_country?: string | null,
  address_zip_code?: string | null,
  age?: number | null,
  gender?: string | null,
};

export type ModelUserConditionInput = {
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  birth_date?: ModelStringInput | null,
  address_line_one?: ModelStringInput | null,
  address_line_two?: ModelStringInput | null,
  address_city?: ModelStringInput | null,
  address_state?: ModelStringInput | null,
  address_country?: ModelStringInput | null,
  address_zip_code?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  first_name: string,
  last_name: string,
  username: string,
  email: string,
  phone_number: string,
  birth_date: string,
  address_line_one?: string | null,
  address_line_two?: string | null,
  address_city?: string | null,
  address_state?: string | null,
  address_country?: string | null,
  address_zip_code?: string | null,
  age?: number | null,
  gender?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  username?: string | null,
  email?: string | null,
  phone_number?: string | null,
  birth_date?: string | null,
  address_line_one?: string | null,
  address_line_two?: string | null,
  address_city?: string | null,
  address_state?: string | null,
  address_country?: string | null,
  address_zip_code?: string | null,
  age?: number | null,
  gender?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  birth_date?: ModelStringInput | null,
  address_line_one?: ModelStringInput | null,
  address_line_two?: ModelStringInput | null,
  address_city?: ModelStringInput | null,
  address_state?: ModelStringInput | null,
  address_country?: ModelStringInput | null,
  address_zip_code?: ModelStringInput | null,
  age?: ModelIntInput | null,
  gender?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  first_name?: ModelSubscriptionStringInput | null,
  last_name?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone_number?: ModelSubscriptionStringInput | null,
  birth_date?: ModelSubscriptionStringInput | null,
  address_line_one?: ModelSubscriptionStringInput | null,
  address_line_two?: ModelSubscriptionStringInput | null,
  address_city?: ModelSubscriptionStringInput | null,
  address_state?: ModelSubscriptionStringInput | null,
  address_country?: ModelSubscriptionStringInput | null,
  address_zip_code?: ModelSubscriptionStringInput | null,
  age?: ModelSubscriptionIntInput | null,
  gender?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    phone_number: string,
    birth_date: string,
    address_line_one?: string | null,
    address_line_two?: string | null,
    address_city?: string | null,
    address_state?: string | null,
    address_country?: string | null,
    address_zip_code?: string | null,
    age?: number | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    phone_number: string,
    birth_date: string,
    address_line_one?: string | null,
    address_line_two?: string | null,
    address_city?: string | null,
    address_state?: string | null,
    address_country?: string | null,
    address_zip_code?: string | null,
    age?: number | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    phone_number: string,
    birth_date: string,
    address_line_one?: string | null,
    address_line_two?: string | null,
    address_city?: string | null,
    address_state?: string | null,
    address_country?: string | null,
    address_zip_code?: string | null,
    age?: number | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    phone_number: string,
    birth_date: string,
    address_line_one?: string | null,
    address_line_two?: string | null,
    address_city?: string | null,
    address_state?: string | null,
    address_country?: string | null,
    address_zip_code?: string | null,
    age?: number | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      first_name: string,
      last_name: string,
      username: string,
      email: string,
      phone_number: string,
      birth_date: string,
      address_line_one?: string | null,
      address_line_two?: string | null,
      address_city?: string | null,
      address_state?: string | null,
      address_country?: string | null,
      address_zip_code?: string | null,
      age?: number | null,
      gender?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserByUsernameQueryVariables = {
  username: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserByUsernameQuery = {
  userByUsername?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      first_name: string,
      last_name: string,
      username: string,
      email: string,
      phone_number: string,
      birth_date: string,
      address_line_one?: string | null,
      address_line_two?: string | null,
      address_city?: string | null,
      address_state?: string | null,
      address_country?: string | null,
      address_zip_code?: string | null,
      age?: number | null,
      gender?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    phone_number: string,
    birth_date: string,
    address_line_one?: string | null,
    address_line_two?: string | null,
    address_city?: string | null,
    address_state?: string | null,
    address_country?: string | null,
    address_zip_code?: string | null,
    age?: number | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    phone_number: string,
    birth_date: string,
    address_line_one?: string | null,
    address_line_two?: string | null,
    address_city?: string | null,
    address_state?: string | null,
    address_country?: string | null,
    address_zip_code?: string | null,
    age?: number | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    phone_number: string,
    birth_date: string,
    address_line_one?: string | null,
    address_line_two?: string | null,
    address_city?: string | null,
    address_state?: string | null,
    address_country?: string | null,
    address_zip_code?: string | null,
    age?: number | null,
    gender?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
