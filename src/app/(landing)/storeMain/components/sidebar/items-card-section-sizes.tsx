import Link from "next/link";
import { ItemsCardSectionLayout } from "./item-card-section-layout";

interface ItemsCardSectionSizes {
  name: string;
  value: string;
  redirect: string;
}

export const ItemsCardSectionSizes = ({ name, value, redirect }: ItemsCardSectionSizes) => {
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
