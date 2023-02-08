import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";

function Main() {
  const [totalSurvey, setTotalSurvey] = useState(0);
  const [surveyId, setSurveyId] = useState(1);
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [init, setInit] = useState(0);
  useEffect(() => {
    axios
      .get("api/v1/servey")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.data.length);
        setTotalSurvey(res.data.length);
      })
      .catch((err) => err);
  }, []);

  axios
    .get(`api/v1/servey/${surveyId}`)
    .then((res) => {
      console.log(res);
      setQuestion(res.data.title);
      setAnswer1(res.data.first_answer);
      setAnswer2(res.data.second_answer);
      setInit(1);
    })
    .catch((err) => err);

  const next = () => {
    setSurveyId(surveyId + 1);
  };

  return (
    <div className={styles.div}>
      {init ? (
        <>
          <h2 className={styles.h2}>{question}</h2>
          <input type="radio" id="answer1" name="answer" />
          <label className={styles.input} htmlFor="answer1">
            {answer1}
          </label>
          <br />
          <input type="radio" id="answer2" name="answer" />
          <label className={styles.input} htmlFor="answer2">
            {answer2}
          </label>
          <br />

          <button onClick={next}>next</button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Main;
