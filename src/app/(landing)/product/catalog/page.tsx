import { Suspense } from "react"
import ProductCatalog from "./ProductCatalog"
import Loading from "@/app/loading"
import SubHeaderCard from "../../_components/SubHeaderCard"


export default function productCatalog(){
    const store = [
        { text: 'HOME', href: '/' },
        { text: 'PRODUCT CATALOG', href: '#', icon: true }
      ];
    return(
        <>
        <SubHeaderCard title="PRODUCT CATALOG" links={store} />
        <ProductCatalog />
        </>
    )
}