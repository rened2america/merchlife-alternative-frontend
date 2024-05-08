import Image from "next/image";
import { Header } from "../storeMain/components/header";
import { Raleway } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const raleway = Raleway({ subsets: ["latin"] });
const StoreMain = () => {
  return (
    <div className={raleway.className}>
      <Header title="CATEGORIES" subtitle="HOME > CATEGORIES" />
      <div
        style={{
          width: "100%",
          padding: "72px 32px",
          backgroundColor: "white",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <Image width={400} height={500} src={"/2A/2AAfWhite.jpg"} alt="back black" />
          <div
            style={{
              position: "absolute",
              backgroundColor: "black",
              color: "white",
              right: "30%",
              top: " 95%",
              width: "200px",
              height: "50px",
              textAlign: "center",
              display: "grid",
              alignContent: "center",
            }}
          >
            6 PM ears
          </div>
        </div>
        <div
          style={{
            position: "relative",
          }}
        >
          <Image width={400} height={500} src={"/2A/2AAfWhite.jpg"} alt="back black" />
          <div
            style={{
              position: "absolute",
              backgroundColor: "black",
              color: "white",
              right: "30%",
              top: " 95%",
              width: "200px",
              height: "50px",
              textAlign: "center",
              display: "grid",
              alignContent: "center",
            }}
          >
            6 PM ears
          </div>
        </div>
        <div
          style={{
            position: "relative",
          }}
        >
          <Image width={400} height={500} src={"/2A/2AAfWhite.jpg"} alt="back black" />
          <div
            style={{
              position: "absolute",
              backgroundColor: "black",
              color: "white",
              right: "30%",
              top: " 95%",
              width: "200px",
              height: "50px",
              textAlign: "center",
              display: "grid",
              alignContent: "center",
            }}
          >
            6 PM ears
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreMain;
