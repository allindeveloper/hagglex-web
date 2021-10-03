import { ILoginRequestPayload, ISignUpRequestPayload } from "../../types/auth";
import { gql } from "@apollo/client";

export const registerUser = (payload: ISignUpRequestPayload) => {
  return ` mutation {
        register(data:${payload}) {
            user {
                _id,
                email,
                createdAt
            },
            token
        }
    }`;
};

export const LOGIN_USER = gql`
  mutation LoginUser($input: String!, $password: String!) {
    login(data: { input: $input, password: $password }) {
      user {
        _id
        email
        createdAt
      }
      token
    }
  }
`;
