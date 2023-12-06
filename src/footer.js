import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="ftWrap">
      <div className="footer">
        <div className="footerInfoWrap clear">
          <div className="inner">
            <div>
              <h2>고객센터</h2>
              <p>
                <br />
                <b>1588-0000 / 네이버톡톡</b>
                <br />
                오전 10시~오후 5시(토요일, 공휴일 휴무)
                <br />
                점심시간: 12:00 ~ 13:00
                <br />
              </p>
            </div>
            <div>
              <h2>반품주소</h2>
              <p>
                <br />
                한진택배(1588-0011)
                <br />
                반품주소: 인천광역시 서구 <br />
                *타 택배사 이용 불가 <br />
                <br />
              </p>
            </div>
            <div>
              <h2>은행정보</h2>
              <br />
              <p>
                예금주 : ooo
                <br />
                <br />
                하나 0000-000-000000
                <br />
                농협 000-0000-0000-00
                <br />
                국민 000000-00-00000
                <br />
              </p>
            </div>
            <div>
              <h2>메뉴</h2>
              <br />
              <p>
                <Link to="/">홈</Link>
                <br />
                <Link to="/privacy">개인정보처리방침</Link>
                <br />
                <Link to="/agreement">이용약관</Link>
                <br />
                <Link to="/guide">쇼핑몰 이용안내</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="addr">
        <p>
          ㈜ ep | 대표 : ep | 사업자 등록 번호 : 000-00-00000 | 통신판매업 신고:
          제2000-인천-000호 | 개인정보 보호 책임자 : ep
          <a
            href="#"
            onClick={() =>
              window.open(
                "http://www.epshop.web.app",
                "_blank",
                "width=750 height=750"
              )
            }
          >
            [사업자정보확인]
          </a>
        </p>
        <p>E-mail : epshop@naver.com | 주소 : 인천광역시 서구</p>
        <p>ep All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
