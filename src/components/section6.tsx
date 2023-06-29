/// <reference types="vite-plugin-svgr/client" />

import "../styles/section6.scss";

const Section6 = () => {
  return (
    <section className="section6">
      <div className="info">
        <div className="info__title">
          <div className="logo" />
          <div className="text">回覆的內容</div>
        </div>
        <div className="info__subtitle">
          <div className="text1">不是你想要的資訊?</div>
          <div className="text2">你可以⋯⋯</div>
        </div>
      </div>
      <div className="qa">
        <div className="q1">
          <div className="q1__title">
            <span className="arrow" />
            <span className="text">確認提問是否清晰</span>
          </div>
          <div className="q1__content">
            <div className="line" />
            <div className="check" />
            <div className="text">
              使用簡單、明確語句描述你的問題，Soulmate能更好理解並提供適當的答案。
            </div>
          </div>
        </div>
        <div className="q2">
          <div className="q2__title">
            <span className="arrow" />
            <span className="text">重新描述問題</span>
          </div>
          <div className="q2__content">
            <div className="line" />
            <div className="check" />
            <div className="text">
              使用不同的詞彙或表達方式再次提出問題，讓Soulmate換個角度重新回覆。
            </div>
          </div>
        </div>
        <div className="q3">
          <div className="q3__title">
            <span className="arrow" />
            <span className="text">確認提問是否清晰</span>
          </div>
          <div className="q3__content">
            <div className="line" />
            <div className="check" />
            <div className="text">
              如果回答與你所需的資訊不符，可以澄清問題。你可以說「不是這個意思，我是問...」並詳細解釋你的問題。
            </div>
          </div>
        </div>
      </div>
      <div className="remind" />
    </section>
  );
};

export default Section6;
