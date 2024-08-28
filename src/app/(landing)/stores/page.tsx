import SubHeaderCard from "../_components/SubHeaderCard";
import Stores from "./Stores";

export default function StoresPage() {

  const store = [
    { text: 'HOME', href: '/' },
    { text: 'STORE', href: '#', icon: true }
  ];

  return (
    <>
      {/* <SubHeaderCard title="STORE" links={store} /> */}
      <Stores />
    </>
  )
}