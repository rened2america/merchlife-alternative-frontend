import Link from "next/link";

interface ItemsCardSection {
  children: React.ReactNode;
}

export const ItemsCardSectionLayout = ({ children }: ItemsCardSection) => {
  return (
    <div
      style={{
        fontSize: "18px",
        borderBottom: "1px solid #0000001A",
        color: "#000000",
        padding: "12px 0px",
      }}
    >
      {children}
    </div>
  );
};
