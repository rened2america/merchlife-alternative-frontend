import { CardSection } from "./card-section";
import { ItemsCardSectionCategories } from "./items-card-section-categories";
import { ItemsCardSectionColors } from "./items-card-section-colors";
import { ItemsCardSectionPrices } from "./items-card-section-prices";
import { ItemsCardSectionSizes } from "./items-card-section-sizes";
import { Search } from "./search";

export const Sidebar = () => {
  return (
    <div
      style={{
        width: "400px",
        display: "grid",
        gap: "24px",
      }}
    >
      <Search />
      <CardSection title="CATEGORIES">
        <ItemsCardSectionCategories title="6 PM ears" redirect="/go" />
        <ItemsCardSectionCategories title="ADAM Krum" redirect="/go" />
        <ItemsCardSectionCategories title="2A Americian Freedom" redirect="/go" />
      </CardSection>
      <CardSection title="COLOR">
        <ItemsCardSectionColors nameColor="Red" codeColor="#F21E1E" redirect="/go" />
        <ItemsCardSectionColors nameColor="Blue" codeColor="#1EA6F2" redirect="/go" />
        <ItemsCardSectionColors nameColor="Green" codeColor="#175900" redirect="/go" />
        <ItemsCardSectionColors nameColor="Grey" codeColor="#C4C8C3" redirect="/go" />
        <ItemsCardSectionColors nameColor="Yellow" codeColor="#DEB00E" redirect="/go" />
        <ItemsCardSectionColors nameColor="Black" codeColor="black" redirect="/go" />
      </CardSection>
      <CardSection title="PRICE">
        <ItemsCardSectionPrices name="$0 - $20" value={20} redirect="/go" />
        <ItemsCardSectionPrices name="$20 - $60" value={60} redirect="/go" />
        <ItemsCardSectionPrices name="$60 - $100" value={100} redirect="/go" />
        <ItemsCardSectionPrices name="$100 - $150" value={150} redirect="/go" />
      </CardSection>
      <CardSection title="SIZE">
        <ItemsCardSectionSizes name="S" value="S" redirect="/go" />
        <ItemsCardSectionSizes name="M" value="M" redirect="/go" />
        <ItemsCardSectionSizes name="L" value="L" redirect="/go" />
        <ItemsCardSectionSizes name="XL" value="XL" redirect="/go" />
        <ItemsCardSectionSizes name="XXL" value="XXL" redirect="/go" />
      </CardSection>
    </div>
  );
};
