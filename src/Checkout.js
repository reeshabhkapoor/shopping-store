import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          alt=""
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
        />

        <div>
          <h4 className="checkout__title">
            Hello, {user ? user.email : "Guest"}
          </h4>
          <h2 className="checkout__title">Your shopping Basket</h2>
          <FlipMove>
            {basket.map((item, index) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                price={item.price}
                title={item.title}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </FlipMove>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
