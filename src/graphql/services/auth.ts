import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation RegisterUser($email:String!,$username:String!,$password:String!,$country:String!,$phonenumber:String!, $referralCode:String!, $currency:String!) {
    register(data: { input: $email, username:$username,password: $password, country:$country ,phonenumber: $phonenumber,referralCode:$referralCode, currency: $currency }) {
      user {
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
    }
  }
`;
export const LOGIN_USER = gql`
  mutation LoginUser($input: String!, $password: String!) {
    login(data: { input: $input, password: $password }) {
      user {
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
    }
  }
`;
