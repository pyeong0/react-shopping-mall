import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { addItem } from "./../store.js";
import { useDispatch } from "react-redux";

let Box = styled.div`
  padding: 20px;
  color: grey;
`;
let YellowBtn = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
`;

let SkyBtn = styled.button`
  background: ${(props) => props.bg};
  color: black;
  padding: 10px;
`;

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);
  let dispatch = useDispatch();
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);
  let [num, setNum] = useState("");

  useEffect(() => {
    //여기적은 코드는 컴포넌트 로드 & 업데이트 마다 실행됨
    console.log("안녕");
  });

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 10000);
  }, []);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("그러지마세요");
    }
  }, [num]);

  useEffect(() => {
    let 꺼낸거 = localStorage.getItem("watched");
    꺼낸거 = JSON.parse(꺼낸거);
    꺼낸거.push(찾은상품.id);

    //Set으로 바꿨다가 다시 array로 만들기
    꺼낸거 = new Set(꺼낸거);
    꺼낸거 = Array.from(꺼낸거);
    localStorage.setItem("watched", JSON.stringify(꺼낸거));
  }, []);
  return (
    <div className="container">
      <Box>
        <YellowBtn>버튼</YellowBtn>
      </Box>
      <SkyBtn bg="orange">오렌지색 버튼</SkyBtn>
      <SkyBtn bg="blue">파란색 버튼</SkyBtn>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>

      {/* <input> 하나 만들고 거기에 유저가 숫자 말고 다른걸 입력하면 
      그러지마세요"라는 안내메세지를 출력 */}
      {/* <input onChange((e)=>{ setNum(e.target.value) }) /> */}

      {alert == true ? (
        <div className="alert alert-warning">10초이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              console.log("Dispatching addItem:", {
                id: props.shoes[id].id,
                name: props.shoes[id].title,
                count: 1,
              });
              dispatch(
                addItem({
                  id: props.shoes[id].id,
                  name: props.shoes[id].title,
                  count: 1,
                })
              );
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent 탭={탭} />
    </div>
  );
}

function TabContent(props) {
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.탭];
}

export default Detail;
