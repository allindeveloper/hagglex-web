import { gql } from "@apollo/client";

const userRes = `user {
    _id
    email
    phonenumber
    phoneNumberDetails {
      phoneNumber
      callingCode
      flag
    }
    referralCode
    username
    emailVerified
    active
    createdAt
  }
  token
}`;

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $email: String!
    $username: String!
    $password: String!
    $country: String!
    $phonenumber: String!
    $referralCode: String
    $currency: String!
  ) {
    register(
      data: {
        email: $email
        username: $username
        password: $password
        country: $country
        phonenumber: $phonenumber
        referralCode: $referralCode
        currency: $currency
      }
    ) {
        ${userRes}
  }
`;
export const LOGIN_USER = gql`
  mutation LoginUser($input: String!, $password: String!) {
    login(data: { input: $input, password: $password }) {
      ${userRes}
  }
`;

export const VERIFY_USER = gql`
  mutation VerifyUser($code: Int!) {
    verifyUser(data: { code: $code }) {
      ${userRes}
  }
`;
