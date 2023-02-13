import React, { useEffect } from "react";
import styles from "./KakaoShareBtn.module.css";
function KakaoShareBtn() {
  useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_JAVASCRIPT_KEY);
    window.Kakao.isInitialized(); // init되면 true, 아니면 false를 반환한다
  }, []);
  const shareKakao = () => {
    window.Kakao.Link.sendCustom({
      templateId: 89816, // 템플릿 아이디
    });
  };
  return (
    <div>
      <button className={styles.btn} onClick={shareKakao}>
        <img className={styles.btn} src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="카카오링크 보내기 버튼" />
      </button>
    </div>
  );
}

export default KakaoShareBtn;
