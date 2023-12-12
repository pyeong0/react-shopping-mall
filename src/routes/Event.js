function Event() {
  return (
    <div>
      <section id="first_section">
        <div className="fs_sale">
          <div className="container">
            <div id="fs_text">
              <h2 id="holiday_season_sale">시즌세일!</h2>
              <h1 id="time_again">기회를 놓치지 마세요!</h1>
              <h3 id="save_up_to">
                이번 연휴 기간 최대 70% 할인!
                <span className="optional">시즌!</span>
              </h3>
              <p id="offer_ends">12월 31일 일요일까지</p>
              <img id="bigbell" src="img/bell.png" alt="" />
              <img className="santa_pic" src="img/santa_1.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="second_section" className="container">
        <div className="sectionhead">
          <h2>
            이번 연휴 기간 동안만 <span className="highlight">최대70%</span>
            할인합니다.
          </h2>
          <p>다시없을 기회, 놓치지 말고 지금 바로 구매하세요!</p>
          <hr />
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4">
            <img src="img/present_1.png" alt="" />
            <h4>무료배송</h4>
            <p>연휴기간 주문시 무료배송</p>
          </div>
          <div className="col-md-6 col-lg-4">
            <img src="img/present_2.png" alt="" />
            <h4>양말 무료증정</h4>
            <p>모든 구매자분께 양말무료증정</p>
          </div>
          <div className="col-md-6 col-lg-4">
            <img src="img/present_3.png" alt="" />
            <h4>포인트3000적립</h4>
            <p>모든 구매자분께 포인트3000적립</p>
            <br />
            <br />
          </div>
          <div className="col-md-6 col-lg-4">
            <img src="img/present_4.png" alt="" />
            <h4>후기작성 포인트1000적립</h4>
            <p>후기작성시 포인트1000적립</p>
          </div>
          <div className="col-md-6 col-lg-4">
            <img src="img/present_2.png" alt="" />
            <h4>최대70%할인</h4>
            <p>전 상품 최대 70% 할인</p>
          </div>
          <div className="col-md-6 col-lg-4">
            <img src="img/present_1.png" alt="" />
            <h4>10만원 이상 구매 포인트10000적립</h4>
            <p>10만원 이상 구매시 포인트10000적립 </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Event;
