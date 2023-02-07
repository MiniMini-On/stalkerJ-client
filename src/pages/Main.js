import axios from "axios";
import React from "react";

function Main() {
  const url = "https://a4bc-49-161-255-75.jp.ngrok.io/api/v1/result";
  axios
    .get(url)
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((err) => err);
  // fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  return <div></div>;
}

export default Main;
