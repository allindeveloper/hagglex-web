import gql from "graphql-tag";
import client from "./client";

const mutation = (value: string) => {
  return client.mutate({
    mutation: gql`
      ${value}
    `,
  });
};

export default mutation;
