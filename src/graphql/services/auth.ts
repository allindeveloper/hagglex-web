import { ISignUpRequestPayload } from "../../types/SignUp";

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
