/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateUser: OnCreateUserSubscription;
  onUpdateUser: OnUpdateUserSubscription;
  onDeleteUser: OnDeleteUserSubscription;
};

export type CreateUserInput = {
  id?: string | null;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
  birth_date: string;
  address_line_one?: string | null;
  address_line_two?: string | null;
  address_city?: string | null;
  address_state?: string | null;
  address_country?: string | null;
  address_zip_code?: string | null;
  age?: number | null;
  gender?: string | null;
};

export type ModelUserConditionInput = {
  first_name?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone_number?: ModelStringInput | null;
  birth_date?: ModelStringInput | null;
  address_line_one?: ModelStringInput | null;
  address_line_two?: ModelStringInput | null;
  address_city?: ModelStringInput | null;
  address_state?: ModelStringInput | null;
  address_country?: ModelStringInput | null;
  address_zip_code?: ModelStringInput | null;
  age?: ModelIntInput | null;
  gender?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
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
  _null = "_null"
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

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type User = {
  __typename: "User";
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
  birth_date: string;
  address_line_one?: string | null;
  address_line_two?: string | null;
  address_city?: string | null;
  address_state?: string | null;
  address_country?: string | null;
  address_zip_code?: string | null;
  age?: number | null;
  gender?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserInput = {
  id: string;
  first_name?: string | null;
  last_name?: string | null;
  username?: string | null;
  email?: string | null;
  phone_number?: string | null;
  birth_date?: string | null;
  address_line_one?: string | null;
  address_line_two?: string | null;
  address_city?: string | null;
  address_state?: string | null;
  address_country?: string | null;
  address_zip_code?: string | null;
  age?: number | null;
  gender?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  first_name?: ModelStringInput | null;
  last_name?: ModelStringInput | null;
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone_number?: ModelStringInput | null;
  birth_date?: ModelStringInput | null;
  address_line_one?: ModelStringInput | null;
  address_line_two?: ModelStringInput | null;
  address_city?: ModelStringInput | null;
  address_state?: ModelStringInput | null;
  address_country?: ModelStringInput | null;
  address_zip_code?: ModelStringInput | null;
  age?: ModelIntInput | null;
  gender?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
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

export type ModelUserConnection = {
  __typename: "ModelUserConnection";
  items: Array<User | null>;
  nextToken?: string | null;
};

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  first_name?: ModelSubscriptionStringInput | null;
  last_name?: ModelSubscriptionStringInput | null;
  username?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  phone_number?: ModelSubscriptionStringInput | null;
  birth_date?: ModelSubscriptionStringInput | null;
  address_line_one?: ModelSubscriptionStringInput | null;
  address_line_two?: ModelSubscriptionStringInput | null;
  address_city?: ModelSubscriptionStringInput | null;
  address_state?: ModelSubscriptionStringInput | null;
  address_country?: ModelSubscriptionStringInput | null;
  address_zip_code?: ModelSubscriptionStringInput | null;
  age?: ModelSubscriptionIntInput | null;
  gender?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
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
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
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
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
  birth_date: string;
  address_line_one?: string | null;
  address_line_two?: string | null;
  address_city?: string | null;
  address_state?: string | null;
  address_country?: string | null;
  address_zip_code?: string | null;
  age?: number | null;
  gender?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
  birth_date: string;
  address_line_one?: string | null;
  address_line_two?: string | null;
  address_city?: string | null;
  address_state?: string | null;
  address_country?: string | null;
  address_zip_code?: string | null;
  age?: number | null;
  gender?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
  birth_date: string;
  address_line_one?: string | null;
  address_line_two?: string | null;
  address_city?: string | null;
  address_state?: string | null;
  address_country?: string | null;
  address_zip_code?: string | null;
  age?: number | null;
  gender?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
  birth_date: string;
  address_line_one?: string | null;
  address_line_two?: string | null;
  address_city?: string | null;
  address_state?: string | null;
  address_country?: string | null;
  address_zip_code?: string | null;
  age?: number | null;
  gender?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone_number: string;
    birth_date: string;
    address_line_one?: string | null;
    address_line_two?: string | null;
    address_city?: string | null;
    address_state?: string | null;
    address_country?: string | null;
    address_zip_code?: string | null;
    age?: number | null;
    gender?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type UserByUsernameQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone_number: string;
    birth_date: string;
    address_line_one?: string | null;
    address_line_two?: string | null;
    address_city?: string | null;
    address_state?: string | null;
    address_country?: string | null;
    address_zip_code?: string | null;
    age?: number | null;
    gender?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
  birth_date: string;
  address_line_one?: string | null;
  address_line_two?: string | null;
  address_city?: string | null;
  address_state?: string | null;
  address_country?: string | null;
  address_zip_code?: string | null;
  age?: number | null;
  gender?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
  birth_date: string;
  address_line_one?: string | null;
  address_line_two?: string | null;
  address_city?: string | null;
  address_state?: string | null;
  address_country?: string | null;
  address_zip_code?: string | null;
  age?: number | null;
  gender?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone_number: string;
  birth_date: string;
  address_line_one?: string | null;
  address_line_two?: string | null;
  address_city?: string | null;
  address_state?: string | null;
  address_country?: string | null;
  address_zip_code?: string | null;
  age?: number | null;
  gender?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
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
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async UserByUsername(
    username: string,
    id?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<UserByUsernameQuery> {
    const statement = `query UserByUsername($username: String!, $id: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        userByUsername(
          username: $username
          id: $id
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
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
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      username
    };
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UserByUsernameQuery>response.data.userByUsername;
  }
  OnCreateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
  > {
    const statement = `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
        onCreateUser(filter: $filter) {
          __typename
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
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUser">>
    >;
  }

  OnUpdateUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
  > {
    const statement = `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
        onUpdateUser(filter: $filter) {
          __typename
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
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUser">>
    >;
  }

  OnDeleteUserListener(
    filter?: ModelSubscriptionUserFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
  > {
    const statement = `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
        onDeleteUser(filter: $filter) {
          __typename
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
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUser">>
    >;
  }
}
