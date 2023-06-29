/// <reference types="vite-plugin-svgr/client" />

import "../styles/section2.scss";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="arrow_right" />
      <div className="desc">
        我們都渴望美，想要精緻的輪廓、勻稱的身材和更無暇的膚質。但，變美帶來的不只有身體的改變，也是一段心靈的旅程。
        <br />
        <br />
        研究如何變美時，市面上各式各樣的產品和技術，該從哪裡開始了解？實現變美計畫時，面臨自己無法預測的結果，該怎麼調適心情？
        <br />
        <br />
        在這段旅程中，你不必獨自前行！ Soulmate就是你的最佳求美旅伴
        ，也是你最棒的專家朋友！隨時聆聽你的需求，提供全面的求美資訊和建議，讓你更自信地踏出每一步！
      </div>
      <div className="poster2" />
    </section>
  );
};

export default Section2;
