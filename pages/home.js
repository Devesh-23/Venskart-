import React from "react";
import styles from "../styles/Home.module.css";
// import AllShops from '../components/Elements/AllShops';
import all_shops from "../components/Elements/AllShops";
import ShopThumb from "../components/Elements/ShopThumb";
import TrendingProducts from "../components/Home/TrendingProducts";

function Home() {
  const { parentCard, childCard, container, heading } = styles;
  const AllShops = () => {
    return (
      <div className={parentCard}>
        {all_shops.map(({ id, shopName, address, image }) => (
          <div className={childCard} key={id}>
            <ShopThumb
              id={id}
              shopName={shopName}
              address={address}
              image={image}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={container}>
      <h2 className={heading}>Shops Nearby</h2>
      <div>
        <AllShops />
        {/* <TrendingProducts /> */}
        <TrendingProducts />

      </div>
    </div>
  );
}

export default Home;
