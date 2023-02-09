import React from "react";
import useMbti from "../hooks/useMbti";

function Result() {
  const { mbti, setMbti, raw, setRaw } = useMbti();
  console.log(mbti);
  console.log(raw);
  return <div></div>;
}

export default Result;
