import React from "react";
import "./Home.css";
import "./Product";
import { useStateValue } from "./StateProvider";
import Product from "./Product";

function Home() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt="prime"
        />

        <div className="home__row">
          <Product
            id="1"
            title="OnePlus Y Series 108 cm (43 inches) Full HD LED Smart Android TV 43Y1 (Black) (2020 Model)"
            price={24399}
            image="https://m.media-amazon.com/images/I/81kmtB1326L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Kenwood Chef Stand Mixer for Baking - Stylish Food Mixer in White with K-beater, Dough Hook, Whisk and 4.6 Litre Bowl"
            price={2399}
            image="https://images-na.ssl-images-amazon.com/images/I/61r0Y3Tlq9L._AC_SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Spigen Ultra Hybrid Back Cover Case for Oneplus 8 Pro - Black"
            price={1299}
            image="https://m.media-amazon.com/images/I/51cnkEBz+lL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Lamcy Plaza Avenger Metal Bike Wall Decor/Wall Hanging Size (L61 X W3 X H33 Inches)"
            price={1399}
            image="https://m.media-amazon.com/images/I/71eHjOZX7nL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="SG Sierra Plus Kashmir Willow Cricket Bat ( Size: Short Handle,Leather Ball )"
            price={1499}
            image="https://images-na.ssl-images-amazon.com/images/I/61mWPlaVEXL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart Android LED TV 65X7400H (Black) (2020 Model)"
            price={109999}
            image="https://m.media-amazon.com/images/I/71vGNco7X2L._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
