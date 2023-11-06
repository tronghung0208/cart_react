import { useState } from "react";
import "./App.css";
import CartList from "./Component/CartList";
import FooterCart from "./Component/FooterCart";
import NavBar from "./Component/NavBar";
import cartList from "./Service/Carts";
function App() {
  const [carts, setCarts] = useState(cartList);
  function cartTotal() {
    let cartTotal = 0;
    for (let i = 0; i < carts.length; i++) {
      cartTotal = cartTotal + carts[i].amount;
    }
    return cartTotal;
  }

  function cartAmount() {
    let cartAmount = 0;
    for (let i = 0; i < carts.length; i++) {
      cartAmount += carts[i].amount * carts[i].price;
    }
    return cartAmount;
  }

  const handleClickDelete = (id) => {
    const carFilter = carts.filter((item) => item.id !== id);
    setCarts(carFilter);
  };
  // const totalCart = carts.reduce(function (total, curentValue) {
  //   return total + curentValue.amount;
  // }, 0);

  return (
    <main>
      {/* start Navbar */}
      <NavBar cartTotal={cartTotal()} />
      {/* end Navbar */}
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        {/* start CartList */}
        <CartList carts={carts} handleClickDelete={handleClickDelete} />
        {/* end CartList */}
        <FooterCart cartAmount={cartAmount()} />
      </section>
    </main>
  );
}

export default App;
