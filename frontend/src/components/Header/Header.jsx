import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h1>Order your favourite Food here</h1>
        <p>
        Welcome to Food delivery website, your one-stop destination for delicious food delivered right to your doorstep. From local favorites to international cuisines, we offer a wide variety of dishes to satisfy every craving. Enjoy fresh, high-quality meals with quick and reliable delivery, all at the tap of a button. Let us make your mealtime easy and enjoyable!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
