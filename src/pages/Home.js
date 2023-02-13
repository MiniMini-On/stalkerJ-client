import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [userCount, setUserCount] = useState(0);
  useEffect(() => {
    axios
      .get("https://kimduhong.pythonanywhere.com/api/v1/result/count")
      .then((res) => {
        // console.log(res.data[0].all_count);
        for (let i = 0; i <= res.data[0].all_count + 1000; i++) {
          const countAnimation = setInterval(() => {
            setUserCount(i);
          }, 100);
          if (i == res.data[0].all_count + 1000) {
            clearInterval(countAnimation);
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const start = () => {
    navigate("/intro");
  };
  return (
    <>
      <div className={styles.div}>
        <h2>스토커J에 대하여</h2>
        <h3 className={styles.h3}>
          본격 너드스릴러 심리테스트
          <br />- 당신의 선택으로 알아보는 개발자 성향 -
        </h3>
        <br />
        <p className={styles.p}>누적참여자수 : {userCount}</p>
        <button className={styles.button} onClick={start}>
          Start
        </button>
      </div>
      <div className={styles.bg}></div>
    </>
  );
}

export default Home;
