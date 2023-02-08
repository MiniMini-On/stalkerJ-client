import React from "react";
import useMbti from "../hooks/useMbti";

function Result() {
  const { mbti, setMbti } = useMbti();
  console.log(mbti);
  return <div></div>;
}

export default Result;
