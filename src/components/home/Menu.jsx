import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  const addToCart = (itemNum) => {};

  return (
    <section id="menu">
      <div className="container">
        <h1>MENU</h1>

        <div className="">
          <MenuCard
            itemNum={1}
            burgerSrc={burger1}
            title="Cheese Burger"
            price={200}
            handler={addToCart}
            delay={0.1}
          />
          <MenuCard
            itemNum={2}
            burgerSrc={burger2}
            title="Veg Cheese Burger"
            price={500}
            handler={addToCart}
            delay={0.5}
          />
          <MenuCard
            itemNum={3}
            burgerSrc={burger3}
            title="Veg Burger With French Fries"
            price={800}
            handler={addToCart}
            delay={0.8}
          />
          <MenuCard
            itemNum={1}
            burgerSrc={burger1}
            title="Cheese Burger"
            price={200}
            handler={addToCart}
            delay={0.1}
          />
          <MenuCard
            itemNum={2}
            burgerSrc={burger2}
            title="Veg Cheese Burger"
            price={500}
            handler={addToCart}
            delay={0.5}
          />
          <MenuCard
            itemNum={3}
            burgerSrc={burger3}
            title="Veg Burger With French Fries"
            price={800}
            handler={addToCart}
            delay={0.8}
          />
          <MenuCard
            itemNum={1}
            burgerSrc={burger1}
            title="Cheese Burger"
            price={200}
            handler={addToCart}
            delay={0.1}
          />
          <MenuCard
            itemNum={2}
            burgerSrc={burger2}
            title="Veg Cheese Burger"
            price={500}
            handler={addToCart}
            delay={0.5}
          />
          <MenuCard
            itemNum={3}
            burgerSrc={burger3}
            title="Veg Burger With French Fries"
            price={800}
            handler={addToCart}
            delay={0.8}
          />
          <MenuCard
            itemNum={1}
            burgerSrc={burger1}
            title="Cheese Burger"
            price={200}
            handler={addToCart}
            delay={0.1}
          />
          <MenuCard
            itemNum={2}
            burgerSrc={burger2}
            title="Veg Cheese Burger"
            price={500}
            handler={addToCart}
            delay={0.5}
          />
          <MenuCard
            itemNum={3}
            burgerSrc={burger3}
            title="Veg Burger With French Fries"
            price={800}
            handler={addToCart}
            delay={0.8}
          />
          <MenuCard
            itemNum={1}
            burgerSrc={burger1}
            title="Cheese Burger"
            price={200}
            handler={addToCart}
            delay={0.1}
          />
          <MenuCard
            itemNum={2}
            burgerSrc={burger2}
            title="Veg Cheese Burger"
            price={500}
            handler={addToCart}
            delay={0.5}
          />
          <MenuCard
            itemNum={3}
            burgerSrc={burger3}
            title="Veg Burger With French Fries"
            price={800}
            handler={addToCart}
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
