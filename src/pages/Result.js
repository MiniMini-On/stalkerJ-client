import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Result.module.css";
import axios from "axios";
import useMbti from "../hooks/useMbti";
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon } from "react-share";
import { Helmet } from "react-helmet";
import KakaoShareButton from "../components/KakaoShareButton";

function Result() {
  const navigate = useNavigate();
  const [kind, setKind] = useState();
  const [content, setContent] = useState();
  const [surmmary, setSurmmary] = useState();
  const { mbti, setMbti, raw, setRaw } = useMbti();
  const [init, setInit] = useState(0);

  // api POST - axios.defaults.baseURL = "https://kimduhong.pythonanywhere.com/";
  useEffect(() => {
    if (mbti == "" && sessionStorage.getItem("mbti") && sessionStorage.getItem("raw")) {
      setMbti(sessionStorage.getItem("mbti"));
      setRaw(sessionStorage.getItem("raw"));
      console.log(sessionStorage.getItem("mbti"));
      axios
        .post(`api/v1/result/@${sessionStorage.getItem("mbti")}`, { answer: sessionStorage.getItem("raw") })
        .then((res) => {
          console.log(res);
          setMbti(res.data.mbti); // mbti
          setKind(res.data.kind.kind); // kind:개발자 유형
          setSurmmary(res.data.kind.surmmary); // summary:한줄 요약
          setContent(res.data.kind.content); // content:유형에 대한 설명
          setInit(1);
        })
        .catch((err) => err);
    } else if (!mbti == "" && !raw == "") {
      axios
        .post(`api/v1/result/@${mbti}`, { answer: raw })
        .then((res) => {
          console.log(res);

          setMbti(res.data.mbti); // mbti
          setKind(res.data.kind.kind); // kind:개발자 유형
          setSurmmary(res.data.kind.surmmary); // summary:한줄 요약
          setContent(res.data.kind.content); // content:유형에 대한 설명
          setInit(1);
        })
        .catch((err) => err);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className={styles.div}>
      {init ? (
        <>
          <div className={styles.surmmary}>{surmmary}</div>
          <div className={styles.header}>
            당신은 <span className={styles.text_under}>{kind}</span> 유형입니다.
          </div>
          <div className={styles.content_container}>
            <div className={styles.content}>{content}</div>
          </div>
          {/* 버튼 - 다시하기, 소셜 공유 (react-share 라이브러리 사용) */}
          <div className="button_group">
            <div>
              <button className={styles.button1} onClick={() => navigate("/")}>
                RETRY
              </button>
            </div>

            <div className="social_btn" style={{ marginTop: "30px" }}>
              {/* 페이스북 */}
              <FacebookShareButton style={{ marginRight: "20px" }} url={"https://www.naver.com/"}>
                <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
              </FacebookShareButton>
              {/* 트위터 */}
              <TwitterShareButton style={{ marginRight: "20px" }} url={"https://www.naver.com/"}>
                <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
              </TwitterShareButton>
              {/* 카카오톡 */}

              <Helmet>
                <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
              </Helmet>
              <KakaoShareButton />
            </div>
          </div>
        </>
      ) : (
        <div className={styles.loading}>Now loading...</div>
      )}
    </div>
  );
}

export default Result;
