import Link from "next/link";
import { ItemsCardSectionLayout } from "./item-card-section-layout";

interface ItemsCardSectionPrices {
  name: string;
  value: number;
  redirect: string;
}

export const ItemsCardSectionPrices = ({ name, value, redirect }: ItemsCardSectionPrices) => {
  return (
    <ItemsCardSectionLayout>
      <Link
        href={redirect}
        style={{
          display: "grid",
          gap: "30px",
          alignItems: "center",
          color: "#868686",
        }}
      >
        <div>{name}</div>
      </Link>
    </ItemsCardSectionLayout>
  );
};
