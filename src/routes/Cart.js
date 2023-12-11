import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { changeName } from "./../store.js";
import { addCount } from "./../store.js";

function Cart() {
  //   let a = useSelector((state) => state.user);

  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <>
      <br />
      <h6> {state.user.name}의 장바구니 </h6>
      <br />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(state.cart[i].id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Cart;
