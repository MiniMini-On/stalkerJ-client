import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Counter from "../components/Counter";

function Home() {
  const navigate = useNavigate();
  const [userCount, setUserCount] = useState(0);
  const [init, setInit] = useState(0);

  useEffect(() => {
    setTimeout(function () {
      setInit(1);
    }, 1500);
  }, []);

  useEffect(() => {
    axios
      .get("https://kimduhong.pythonanywhere.com/api/v1/result/count") //이용자 수 불러오기
      .then((res) => {
        // console.log(res.data[0].all_count);
        setUserCount(res.data[0].all_count);
      })
      .catch((err) => console.log(err));
  }, []);
  const start = () => {
    navigate("/intro"); //START 버튼 클릭 시 이동
  };

  return (
    <>
      {init ? (
        <div className={styles.div}>
          <h2>스토커J에 대하여</h2>
          <h3 className={styles.h3}>
            본격 너드스릴러 심리테스트
            <br />- 당신의 선택으로 알아보는 개발자 성향 -
          </h3>
          <br />
          <button className={styles.button} onClick={start}>
            Start
          </button>
          {userCount !== 0 ? <Counter count={userCount} /> : ""}
        </div>
      ) : (
        ""
      )}
      <div className={styles.bg}></div>
    </>
  );
}

export default Home;
