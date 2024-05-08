import { Content } from "./components/content/content";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar/sidebar";
import { Raleway } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const raleway = Raleway({ subsets: ["latin"] });
const StoreMain = () => {
  return (
    <div className={raleway.className}>
      <Header title="STORE" subtitle="HOME > STORE" />
      <div
        style={{
          width: "100%",
          padding: "72px 32px",
          backgroundColor: "white",
          display: "grid",
          gridTemplateColumns: "400px 1fr",
        }}
      >
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default StoreMain;
