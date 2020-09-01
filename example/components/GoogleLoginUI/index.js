import React from "react";

export const GoogleLoginUI = (props) => {
  const { Login, name, familyName, email } = props;

  return (
    <>
      {<h2>Google Login</h2>}
      {
        <div>
          <h5>
            {name} {familyName}
          </h5>
        </div>
      }
      {
        <div>
          <h5>{email}</h5>
        </div>
      }
      {<Login />}
    </>
  );
};
