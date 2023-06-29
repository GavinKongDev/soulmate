/// <reference types="vite-plugin-svgr/client" />

import "../styles/section1.scss";

const Section1 = () => {
  return (
    <section className="section1">
      <div className="logo" />
      <div>
        <div className="arrow_right" />
        <div className="desc">
          <span className="desc__title">
            你也曾經在做完
            <br />
            醫美療程後
          </span>
          <span className="desc__subtitle">碰過以下情況嗎？</span>
        </div>
        <div className="divider" />
        <div className="qa1">
          <div className="qa1__img" />
          <div className="qa1__dialogue" />
          <div className="qa1__text">不小心忘記醫師交代注意事項</div>
        </div>
        <div className="qa2">
          <div className="qa2__img" />
          <div className="qa2__dialogue" />
          <div className="qa2__text">想聯繫診所卻剛好是非營業時間</div>
        </div>
        <div className="qa3">
          <div className="qa3__img" />
          <div className="qa3__dialogue" />
          <div className="qa3__text">療程後有好多問題想詢問</div>
        </div>
        <div className="goodNews" />
      </div>
    </section>
  );
};

export default Section1;
