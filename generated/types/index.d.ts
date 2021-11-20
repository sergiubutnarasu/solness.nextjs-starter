export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Company = {
  email: Scalars['String'];
  enabled: Scalars['Boolean'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  users?: Maybe<Array<CompanyUser>>;
};

export type CompanyInput = {
  email: Scalars['String'];
  enabled: Scalars['Boolean'];
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  phone: Scalars['String'];
  users?: Maybe<Array<CompanyUserInput>>;
};

export type CompanyResponse = {
  data?: Maybe<Company>;
  messages?: Maybe<Array<Scalars['String']>>;
  success: Scalars['Boolean'];
};

export type CompanyUser = {
  companyId: Scalars['Float'];
  enabled: Scalars['Boolean'];
  id?: Maybe<Scalars['Int']>;
  role: Scalars['String'];
  userId: Scalars['Float'];
};

export type CompanyUserInput = {
  companyId: Scalars['Float'];
  enabled: Scalars['Boolean'];
  id?: Maybe<Scalars['Int']>;
  role: Scalars['String'];
  userId: Scalars['Float'];
};

export type Mutation = {
  deleteCompany: CompanyResponse;
  deleteUser: UserResponse;
  login: TokenResponse;
  logout: SimpleResponse;
  refresh: TokenResponse;
  saveCompany: CompanyResponse;
  saveUser: UserResponse;
};

export type MutationDeleteCompanyArgs = {
  id: Scalars['Float'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};

export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationLogoutArgs = {
  refreshToken: Scalars['String'];
};

export type MutationRefreshArgs = {
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type MutationSaveCompanyArgs = {
  model: CompanyInput;
};

export type MutationSaveUserArgs = {
  model: UserInput;
};

export type PageListInput = {
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
};

export type PaginatedCompanyResponse = {
  data?: Maybe<Array<Company>>;
  messages?: Maybe<Array<Scalars['String']>>;
  success: Scalars['Boolean'];
  total: Scalars['Int'];
};

export type PaginatedUserResponse = {
  data?: Maybe<Array<User>>;
  messages?: Maybe<Array<Scalars['String']>>;
  success: Scalars['Boolean'];
  total: Scalars['Int'];
};

export type Query = {
  companies: PaginatedCompanyResponse;
  company: CompanyResponse;
  user: UserResponse;
  users: PaginatedUserResponse;
};

export type QueryCompaniesArgs = {
  request?: Maybe<PageListInput>;
};

export type QueryCompanyArgs = {
  id: Scalars['Float'];
};

export type QueryUserArgs = {
  id: Scalars['Float'];
};

export type QueryUsersArgs = {
  request?: Maybe<PageListInput>;
};

export type SimpleResponse = {
  messages?: Maybe<Array<Scalars['String']>>;
  success: Scalars['Boolean'];
};

export type TokenPayload = {
  accessToken: Scalars['String'];
  expiresIn: Scalars['Float'];
  refreshToken: Scalars['String'];
};

export type TokenResponse = {
  data?: Maybe<TokenPayload>;
  messages?: Maybe<Array<Scalars['String']>>;
  success: Scalars['Boolean'];
};

export type User = {
  email: Scalars['String'];
  enabled: Scalars['Boolean'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
  role: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  enabled: Scalars['Boolean'];
  firstName: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  lastName: Scalars['String'];
};

export type UserResponse = {
  data?: Maybe<User>;
  messages?: Maybe<Array<Scalars['String']>>;
  success: Scalars['Boolean'];
};

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['Float'];
}>;

export type DeleteUserMutation = {
  deleteUser: { data?: { id?: number | null | undefined } | null | undefined };
};

export type GetUserQueryVariables = Exact<{
  userId: Scalars['Float'];
}>;

export type GetUserQuery = {
  user: {
    data?:
      | {
          id?: number | null | undefined;
          enabled: boolean;
          firstName: string;
          lastName: string;
          email: string;
          role: string;
        }
      | null
      | undefined;
  };
};

export type SaveUserMutationVariables = Exact<{
  model: UserInput;
}>;

export type SaveUserMutation = {
  saveUser: { data?: { id?: number | null | undefined } | null | undefined };
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  users: {
    data?:
      | Array<{
          id?: number | null | undefined;
          enabled: boolean;
          firstName: string;
          lastName: string;
          email: string;
          role: string;
        }>
      | null
      | undefined;
  };
};

export type UserFragment = {
  id?: number | null | undefined;
  enabled: boolean;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = {
  login: {
    success: boolean;
    messages?: Array<string> | null | undefined;
    data?:
      | { accessToken: string; expiresIn: number; refreshToken: string }
      | null
      | undefined;
  };
};

export type LogoutMutationVariables = Exact<{
  refreshToken: Scalars['String'];
}>;

export type LogoutMutation = {
  logout: { success: boolean; messages?: Array<string> | null | undefined };
};

export type RefreshMutationVariables = Exact<{
  refreshToken: Scalars['String'];
  accessToken: Scalars['String'];
}>;

export type RefreshMutation = {
  refresh: {
    success: boolean;
    messages?: Array<string> | null | undefined;
    data?:
      | { accessToken: string; expiresIn: number; refreshToken: string }
      | null
      | undefined;
  };
};
