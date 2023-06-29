/// <reference types="vite-plugin-svgr/client" />

import "../styles/section3.scss";

const Section3 = () => {
  return (
    <section className="section3">
      <div className="steps">
        <div className="steps__title" />
        <div className="steps__subtitle">
          <span className="logo" />
          <span className="text1">成為你的</span>
          <span className="text2">知心好友</span>
        </div>
        <div className="steps__content">
          <div className="img" />
          <div className="step1">加入好友</div>
          <div className="step2">點選聊天</div>
          <div className="step3">發送問題</div>
        </div>
      </div>
      <div className="questions">
        <div className="questions__title">可以提出這些類型的問題</div>
        <div className="questions__subtitle">
          <span className="logo" />
          <span className="text1">讓</span>
          <span className="text2">給你建議</span>
        </div>
        <div className="questions__content">
          <div className="question1" />
          <div className="question2" />
          <div className="question3" />
          <div className="question4" />
          <div className="more_question" />
        </div>
      </div>
    </section>
  );
};

export default Section3;
