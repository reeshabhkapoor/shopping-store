import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      //remove
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
        removeProduct: { title: title },
      });

      const timer = setTimeout(() => {
        dispatch({ type: "REMOVE_MESSAGE" });
      }, 4000);

      return () => clearTimeout(timer);
    };

    return (
      <div ref={ref} className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="" />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove Product</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
