// component를 저장하는 것은 아니기 때문에 cart-context 처럼 케밥표기법을 이용해 파일 이름을 정한다.
import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
