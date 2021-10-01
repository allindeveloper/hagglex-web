import { ILoginRequestPayload, ISignUpRequestPayload } from "../../types/auth";

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

export const loginUser = (payload: ILoginRequestPayload) => {
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