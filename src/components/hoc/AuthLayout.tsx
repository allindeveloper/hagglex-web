import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";

const AuthLayout = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <>
          <Wrapper />
        </>
      )}
    </>
  );
};
export default AuthLayout;
