"use client";
import { useEffect, useState } from "react";
// import { CartStore } from 'components/cartstore/cart-store';
// import { CartStore } from "../components/cartstore/cart-store";
import { CartStore } from "@/components/ui/components/cartstore/cart-store";
export default function Stores() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/1/artist/all")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        setData(responseData.artist);
      });
  }, []);
  console.log(data);
  return (
    <div
      style={{
        // height: "100vh",
        padding: "48px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        justifyItems: "center",
      }}
    >
      <CartStore
        urlBg="/6PMers.jpg"
        fUrlImg="/product_two.jpg"
        sUrlImg="/product_three.jpg"
        tUrlImg="/product_one.jpg"
        urlRedirect="/store/The6PMersSwagShop"
      />
      <CartStore
        urlBg="/adam/ADAMB.png"
        fUrlImg="/adam/classicLogoGrey.jpg"
        sUrlImg="/adam/classicLogoWhite.jpg"
        tUrlImg="/adam/guitarLogoGreen.jpg"
        urlRedirect="/store/AdamKrum"
      />
      <CartStore
        urlBg="/2A/2AFB.png"
        fUrlImg="/2A/2AAfWhite.jpg"
        sUrlImg="/2A/AFEagleWhite.jpg"
        tUrlImg="/2A/2ndAmendmentAFWhite.jpg"
        urlRedirect="/store/2AAmericanFreedom"
      />
      {data &&
        data.map((store: any) => {
          return (
            <CartStore
              key={store.id}
              urlBg={store.banner}
              fUrlImg="/2A/2AAfWhite.jpg"
              sUrlImg="/2A/AFEagleWhite.jpg"
              tUrlImg="/2A/2ndAmendmentAFWhite.jpg"
              urlRedirect={`/store/d/${store.name.replace(/ /g, "-")}/`}
            />
          );
        })}
    </div>
  );
}
