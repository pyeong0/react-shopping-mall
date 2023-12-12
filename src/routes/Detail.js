import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { addItem } from "./../store.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let [thumb, setThumb] = useState(0);
  let [heart, setHeart] = useState(0);
  let [sad, setSad] = useState(0);

  let 찾은상품 = props.pants.find((x) => x.id == id);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
    console.log("ep shop");
  });

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [tap, setTap] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 600000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  let [num, setNum] = useState("");

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("숫자를 입력하세요");
    }
  }, [num]);

  return (
    <div className="container">
      {/* <input> 하나 만들고 거기에 유저가 숫자 말고 다른걸 입력하면 
      "숫자를 입력하세요"라는 안내메세지를 출력 */}
      {/* <input onChange((e)=>{ setNum(e.target.value) }) /> */}
      <br />
      {alert == true ? (
        <div className="alert alert-warning">10분이내 구매시 10%할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img src={`/img/pants${parseInt(id) + 1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.pants[id].title}</h4>
          <p>{props.pants[id].content}</p>
          <p>{props.pants[id].price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              console.log("Dispatching addItem:", {
                id: props.pants[id].id,
                name: props.pants[id].title,
                count: 1,
              });
              dispatch(
                addItem({
                  id: props.pants[id].id,
                  name: props.pants[id].title,
                  count: 1,
                })
              );
            }}
          >
            장바구니 넣기
          </button>
          <br />
          <br />
          <button
            className="btn btn-danger"
            style={{
              color: "black",
              backgroundColor: "white",
              borderColor: "black",
            }}
            onClick={() => navigate("/cart")}
          >
            장바구니 이동
          </button>
          <br />
          <br />
          <h4 className="emoticon">
            <span
              onClick={(e) => {
                e.stopPropagation();
                setThumb(thumb + 1);
              }}
            >
              👍
            </span>
            {thumb}
            <span
              onClick={(e) => {
                e.stopPropagation();
                setHeart(heart + 1);
              }}
            >
              💖
            </span>
            {heart}
            <span
              onClick={(e) => {
                e.stopPropagation();
                setSad(sad + 1);
              }}
            >
              😂
            </span>
            {sad}
          </h4>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(0);
            }}
            eventKey="link0"
          >
            색상
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(1);
            }}
            eventKey="link1"
          >
            사이즈
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTap(2);
            }}
            eventKey="link2"
          >
            상품정보
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tap={tap} />
    </div>
  );
}

function TabContent(props) {
  return [
    <div>
      <br />
      GRAY
      <br />
      NAVY
      <br />
      BLACK
      <br />
      IVORY
      <br />
      BROWN
    </div>,
    <div>
      <br />
      S
      <br />
      M
      <br />
      L
      <br />
      XL
      <br />
      2XL
    </div>,
    <div>
      <br />
      레귤러핏
      <br />
      두께보통
      <br />
      비침X
      <br />
      안감X
      <br />
      기모X
    </div>,
  ][props.tap];
}

export default Detail;
