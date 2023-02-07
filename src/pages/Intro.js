import React, { useState, useEffect } from "react";
import styles from "./Intro.module.css";
import msgImg from "../static/images/msg.png";

function Intro() {
  const script = [
    "나는 은둔형 개발자로 1년을 집에서만 지냈다.",
    "작년 이맘 때쯤 부터 집밖에 나오면 죽는다는 협박문자를 받았기 때문이다.",
    <img className={styles.img} src={msgImg} />,
    "그런데 이번 한달간은 그 문자가 더 이상 오지 않는다.",
    "J라는 스토커가 이제 나를 포기한 것일지 모른다.",
    "오늘은 내가 가장 존경하는 개발자가 주최하는 컨퍼런스가 있는 날이다.",
    "이런 기회를 놓칠 수는 없다. 나는 큰맘먹고 1년만에 외출을 하기로 한다.",
  ];
  const [num, setNum] = useState(0);
  const [display, setDisplay] = useState(script[0]);
  const onClick = () => {
    if (num < script.length) {
      setNum(num + 1);
    }
  };
  useEffect(() => {
    setDisplay(script[num]);
  }, [num]);
  return (
    <div className={styles.div}>
      <div className={styles.script}>{display}</div>
      <button onClick={onClick}>▶</button>
    </div>
  );
}

export default Intro;
