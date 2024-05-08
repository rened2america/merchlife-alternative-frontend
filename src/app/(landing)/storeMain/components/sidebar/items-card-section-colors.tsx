import Link from "next/link";
import { ItemsCardSectionLayout } from "./item-card-section-layout";

interface ItemsCardSectionColors {
  nameColor: string;
  codeColor: string;
  redirect: string;
}

export const ItemsCardSectionColors = ({
  nameColor,
  codeColor,
  redirect,
}: ItemsCardSectionColors) => {
  return (
    <ItemsCardSectionLayout>
      <Link
        href={redirect}
        style={{
          display: "grid",
          gridTemplateColumns: "24px 1fr",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderRadius: "100px",
            width: "24px",
            height: "24px",
            backgroundColor: codeColor,
          }}
        ></div>
        <div>{nameColor}</div>
      </Link>
    </ItemsCardSectionLayout>
  );
};
