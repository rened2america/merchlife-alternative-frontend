import Link from "next/link";
import { ItemsCardSectionLayout } from "./item-card-section-layout";

interface ItemsCardSectionCategories {
  title: string;
  redirect: string;
}

export const ItemsCardSectionCategories = ({ title, redirect }: ItemsCardSectionCategories) => {
  return (
    <ItemsCardSectionLayout>
      <Link
        href={redirect}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 24px",
        }}
      >
        <div>{title}</div>
        <div>Go</div>
      </Link>
    </ItemsCardSectionLayout>
  );
};
