import React, { useEffect } from "react";

export const AppleLogin = (props) => {
  const { UIComponent } = props;

  useEffect(() => {
    createScript()
  },[])

  const x = () => {
    window.AppleID.auth.init({
      clientId: "co.ordering.logintest",
      redirectURI: "https://example-app.com/redirect",
      responseType: "code",
      responseMode: "query",
      usePopup: true,
    });
    //Listen for authorization success
    document.addEventListener("AppleIDSignInOnSuccess", (data) => {
      console.log("data", data);
    });
    //Listen for authorization failures
    document.addEventListener("AppleIDSignInOnFailure", (error) => {
      console.log("errorList", error);
    });
    fetchData();
    console.log(window.AppleID);
  };

  const fetchData = async () => {
    try {
      const data = await window.AppleID.auth.signIn();
      console.log(data);
    } catch (err) {
      console.log("error", err);
    }
  };

  const createScript = () => {
    const js = window.document.createElement("script");
    js.id = "apple-login";
    js.src =
      "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
    js.async = true;
    js.defer = true;
    js.onload = () => {
      x()
    }; 
    window.document.body.appendChild(js);
    console.log(window.AppleID);
  };

  return <>{UIComponent && <UIComponent {...props} />}</>;
};
