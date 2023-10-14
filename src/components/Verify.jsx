import React from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";

function Verify() {
  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get("secret");
  const userId = urlParams.get("userId");
  console.log(userId,secret);
  const promise = account.updateVerification(userId, secret);
  promise.then(
    function (response) {
      console.log(response);
      useNavigate("/profile")
    },
    function (error) {
      console.log(error);
      useNavigate("/signup");
    }
  );
  return <div>verification</div>;
}

export default Verify;
