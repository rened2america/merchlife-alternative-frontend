import React from "react";

export const Search = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 48px",
          height: "80px",
          backgroundColor: "#E6E6E680",
          justifyContent: "center",
          alignContent: "center",
          padding: "24px 12px",
        }}
      >
        <input
          id="Search"
          name="Search"
          type="text"
          placeholder="Search"
          style={{
            height: "40px",
            padding: "12px 8px",
            backgroundColor: "#e6e6e600",
            color: "#868686",
          }}
        />
        <div>S</div>
      </div>
    </>
  );
};
