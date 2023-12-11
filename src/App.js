// import logo from "./logo.svg";
import { Navbar, Container, Nav } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
// import bg from "./img/bg.jpg";
import { useState } from "react";
import data from "./data.js";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import Detail from "./routes/Detail.js";
import axios from "axios";
import Cart from "./routes/Cart.js";
import Event from "./routes/Event.js";

import Footer from "./footer";

function App() {
  let [pants] = useState(data);
  let navigate = useNavigate();
  let location = useLocation();
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light" className=" ">
        <Container>
          <Navbar.Brand href="/">ep Shop</Navbar.Brand>
          <Nav className="me-auto">
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
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {location.pathname === "/" && <div className="main-bg"></div>}

      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Row xs={1} sm={2} md={3}>
                {pants.map((a, i) => (
                  <Col key={i}>
                    <Link to={`/detail/${i}`}>
                      <img
                        src={`/img/pants${i + 1}.jpg`}
                        width="100%"
                        alt={a.title}
                        style={{ marginTop: "70px", marginBottom: "10px" }}
                      />
                    </Link>
                    <h4>{a.title}</h4>
                    <p style={{ fontWeight: "bold" }}>{a.price}</p>
                  </Col>
                ))}
              </Row>
            </Container>
          }
        />
        <Route path="/detail/:id" element={<Detail pants={pants} />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/member" element={<div>멤버들</div>} />
        <Route path="/about/location" element={<div>회사위치</div>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양말 무료증정</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path="*" element={<div>존재하지 않는 페이지 입니다</div>} />
      </Routes>

      <Footer />
    </div>
  );
}

function Card(props) {
  return (
    <Col sm>
      <img src={"/img/pants" + (props.i + 1) + ".jpg"} width="80%" />
      <h4>{props.pants.title}</h4>
      <p>{props.pants.price}</p>
    </Col>
  );
}

function About() {
  return (
    <div>
      <h4>안녕하세요. ep shop에 방문해주셔서 감사합니다.</h4>
      <Outlet></Outlet>
    </div>
  );
}

// function EventPage() {
// return (
// <div>
{
  /* <h4>오늘의 이벤트</h4> */
}
{
  /* <Outlet></Outlet> */
}
{
  /* </div> */
}
// );
// }

export default App;
