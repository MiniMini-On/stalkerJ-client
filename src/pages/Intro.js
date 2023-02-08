import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Intro.module.css";
import msgImg from "../static/images/msg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

function Intro() {
  const [isHovering, setIsHovering] = useState(0);
  const [isClicked, setIsClicked] = useState(0);
  const navigate = useNavigate();
  const script = [
    "나는 은둔형 개발자로 1년을 집에서만 지냈다.",
    "작년 이맘 때 부터 집 밖에 나오면 죽는다는 협박 문자를 받았기 때문이다.",
    <img className={styles.img} src={msgImg} />,
    "그런데 이번 한달 간은 그 문자가 더 이상 오지 않는다.",
    "J라는 스토커가 이제 나를 포기한 것일지 모른다.",
    "오늘은 내가 가장 존경하는 개발자가 주최하는 컨퍼런스가 있는 날이다.",
    "이런 기회를 놓칠 수는 없다.",
    "나는 큰 맘 먹고 1년 만에 외출을 하기로 한다.",
  ];
  const [num, setNum] = useState(0);
  const [display, setDisplay] = useState(script[0]);

  const next = () => {
    if (num < script.length) {
      setNum(num + 1);
    }
  };

  const goMain = () => {
    setIsClicked(1);

    setTimeout(function () {
      navigate("/main");
    }, 3500);
  };

  useEffect(() => {
    setDisplay(script[num]);
  }, [num]);
  console.log(isClicked);
  return (
    <div className={styles.div}>
      <div className={styles.wrap}>
        <div className={styles.script}>{display}</div>
        {isClicked ? "" : <div className={styles.bg}></div>}
      </div>
      {isClicked ? <div className={styles.door}></div> : ""}
      {num == script.length ? (
        <button className={styles.button2} onClick={goMain} onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)}>
          {isHovering ? <FontAwesomeIcon icon={faDoorOpen} /> : <FontAwesomeIcon icon={faDoorClosed} />}
        </button>
      ) : (
        <button className={isHovering ? styles.vib : styles.button} onClick={next} onMouseOver={() => setIsHovering(1)} onMouseOut={() => setIsHovering(0)}>
          <FontAwesomeIcon icon={faMobileScreen} />
        </button>
      )}
    </div>
  );
}

export default Intro;
