import { CardProduct } from "./card-product";

export const Content = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "100px 1fr",
        backgroundColor: "white",
        justifyContent: "center",
        alignContent: "center",
        color: "black",
      }}
    >
      <header
        style={{
          display: "grid",
          justifyContent: "center",
          alignContent: "space-between",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
          }}
        >
          STORES AT <b>MERCHLIFE</b>
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 150px",
            minWidth: "200px",
            width: "auto",
            fontSize: "16px",
            paddingLeft: "32px",
            fontWeight: "600",
          }}
        >
          <div
            style={{
              display: "grid",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            448 PRODUCTS
          </div>
          <div
            style={{
              backgroundColor: "#F3F3F3",
              display: "grid",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            Order
          </div>
        </div>
      </header>
      <div>
        <CardProduct
          name="Test"
          value={1}
          FrontImage="/2A/2AAfWhite.jpg"
          BackImage="/2A/2AAfWhiteB.jpg"
          redirect="/test"
        />
      </div>
    </div>
  );
};
