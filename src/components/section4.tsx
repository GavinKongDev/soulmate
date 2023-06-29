/// <reference types="vite-plugin-svgr/client" />

import "../styles/section4.scss";

const Section4 = () => {
  return (
    <section className="section4">
      <div className="qa">
        <div className="qa__title">不確定該怎麼提問嗎？</div>
        <div className="qa__subtitle">嘗試這些句子來破冰吧！</div>
        <div className="qa__content">
          <div className="q1">
            <div className="q1__title">
              <span className="arrow" />
              <span className="text">醫美解密</span>
            </div>
            <div className="q1__content">
              <div className="line" />
              <div className="text1">
                ．想填平淚溝、法令紋可以做什麼樣的醫美療程？
              </div>
              <div className="text2">．做完醫美後，術後該冰敷多久？</div>
              <div className="text3">．怎麼分辨鳳凰電波的探頭是不是正貨？</div>
            </div>
          </div>
          <div className="q2">
            <div className="q2__title">
              <span className="arrow" />
              <span className="text">保養攻略</span>
            </div>
            <div className="q2__content">
              <div className="line" />
              <div className="text1">
                ．皮膚很乾可以用什麼樣的保養品增強保濕呢？
              </div>
              <div className="text2">．使用保養品時有沒有正確的順序？</div>
              <div className="text3">．物理性防曬與化學性防曬有什麼不同？</div>
            </div>
          </div>
          <div className="q3">
            <div className="q3__title">
              <span className="arrow" />
              <span className="text">減重訣竅</span>
            </div>
            <div className="q3__content">
              <div className="line" />
              <div className="text1">
                ．計算TDEE需要哪些資訊？請幫我計算TDEE！
              </div>
              <div className="text2">
                ．我想嘗試生酮飲食，可以怎麼選擇食物？
              </div>
              <div className="text3">
                ．可以跟我分享美味的低脂調味醬汁的做法嗎？
              </div>
            </div>
          </div>
          <div className="q4">
            <div className="q4__title">
              <span className="arrow" />
              <span className="text">傾聽關懷</span>
            </div>
            <div className="q4__content">
              <div className="line" />
              <div className="text1">
                ．第一次體驗醫美療程好緊張，可以安慰我嗎？
              </div>
              <div className="text2">．好擔心打完肉毒沒有效果怎麼辦？</div>
              <div className="text3">．關心我的心情</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
