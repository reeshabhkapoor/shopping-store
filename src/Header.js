import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import ProductMessage from "./ProductMessage";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [display, setDisplay] = useState(false);
  const [productTitle, changeProductTitle] = useState("");
  const [displayWelcome, setDisplayWelcome] = useState(false);

  useEffect(() => {
    setDisplayWelcome(true);

    const timer = setTimeout(() => {
      setDisplayWelcome(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setDisplay(true);

    const existingBasket = [...basket];

    const lastItem = existingBasket.pop();
    changeProductTitle(lastItem?.title);

    const timer = setTimeout(() => {
      setDisplay(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [basket]);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>

      {displayWelcome ? (
        <div className="welcomeUser">
          <p>Welcome</p>
          <h3>{user ? user.email : "Guest"}</h3>
        </div>
      ) : null}

      {display ? (
        <div className="cartAdd">
          {productTitle ? <ProductMessage title={productTitle} /> : null}

          {/* {basket?.map((product) => (
            <ProductMessage title={product.title} />
          ))} */}
        </div>
      ) : null}
    </div>
  );
}

export default Header;
