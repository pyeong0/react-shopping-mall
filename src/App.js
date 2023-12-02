// import logo from "./logo.svg";
import { lazy, useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import bg from "./img/bg.png";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import axios from "axios";
import Cart from "./routes/Cart.js";

function App() {
  const buttons = [
    { id: 0, label: "상세보기" },
    { id: 1, label: "상세보기" },
    { id: 2, label: "상세보기" },
  ];

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light" className=" ">
        <Container>
          <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>

      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Row>
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i}></Card>;
                })}
              </Row>
              <div className="moveBtn">
                {buttons.map(({ id, label }) => (
                  <button key={id} onClick={() => navigate(`/detail/${id}`)}>
                    {label}
                  </button>
                ))}
              </div>
            </Container>
          }
        />

        {/* <Route path="/detail" element={<Detail shoes={shoes} />} /> */}
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/member" element={<div>멤버들</div>} />
        <Route path="/about/location" element={<div>회사위치</div>} />
        <Route path="*" element={<div>존재하지 않는 페이지 입니다</div>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Routes>
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <Col sm>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

function About() {
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
