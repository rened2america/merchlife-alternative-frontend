"use client";
import { Avatar, Input, Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  CheckboxGroup,
  Divider,
} from "@nextui-org/react";
import { Inter } from "next/font/google";
import { CustomCheckbox } from "@/components/ui/components/customCheckbox.tsx/customCheckbox";
import { AddCart } from "@/components/ui/components/addCart/addCart";
import { NavbarHeader } from "@/components/ui/components/navbar/navbar";
import { useEffect, useState } from "react";
import { Gallery } from "@/components/ui/components/gallery/gallery";
import { useSearchParams } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });
const interProducts = Inter({ subsets: ["latin"], variable: "--font-inter" });
interface Product {
  size: string;
  variant: string;
  productId: number;
}
interface SelectedProduct {
  title: string;
  size: string;
  priceId: string;
  url: string;
  // Otros campos necesarios
}

interface ProductData {
  name: string;
  quantity: number;
  size: string;
  priceId: string;
  url: string;
}
export default function One() {
  const [selected, setSelected] = useState("s"); // Inicializa selected con "s" (S)
  const [quantity, setQuantity] = useState(1); // Inicializa quantity con 1
  const [products, setProducts] = useState([]); // Inicializa products como un arreglo vacío
  const [dataList, setDataList] = useState(null); // Inicializa products como un arreglo vacío
  const [product, setProduct] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Función para obtener los datos del endpoint
    const fetchData = async () => {
      try {
        const productId = searchParams.get("productId");
        const variant = searchParams.get("variant");
        const type = searchParams.get("type");
        console.log(productId);
        console.log(variant);
        console.log(type);

        const response = await fetch(
          `http://localhost:4000/api/1/product/productsByGroup/Rene-Meza?productId=${productId}&variant=${variant}&type=${type}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        //@ts-ignore
        const data = await response.json();
        console.log(data.data);
        setProducts(data.data); // Actualiza el estado con los datos recibidos del endpoint
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Llama a la función fetchData cuando el componente se monta
  }, []); // El segundo argumento del useEffect es un arreglo vacío para que se ejecute solo una vez al montar el componente

  const findProduct = () => {
    // Función para encontrar el producto seleccionado
    const productId = parseInt(searchParams.get("productId") ?? "1");
    const variant = searchParams.get("variant");
    //@ts-ignore
    const selectedProduct: SelectedProduct = products.find(
      (product: Product) =>
        product.size.toLowerCase() === selected.toLowerCase() &&
        product.variant.toLowerCase() === variant &&
        product.productId === productId,
    );
    console.log("selectedProduct", selectedProduct);
    console.log("selected.toLowerCase()", selected.toLowerCase());
    console.log("variant", variant);
    console.log("productId", productId);

    console.log("products", products);
    if (selectedProduct) {
      const productData: ProductData = {
        name: selectedProduct.title,
        quantity: quantity,
        size: selectedProduct.size.toUpperCase(),
        priceId: selectedProduct.priceId,
        url: selectedProduct.url,
      };

      return productData;
    }

    // Si no se encuentra el producto seleccionado, se devuelve un objeto por defecto
    console.log("Aqui estoy");
    return {
      name: "2A AF White S",
      quantity: quantity,
      size: "S",
      priceId: "price_1OoljtGkWb1Ap7UJKGzI8MpW",
      url: "/2A/2AAfWhite.jpg",
    };
  };

  useEffect(() => {
    if (products && products.length > 0) {
      //@ts-ignore
      setDataList([products[0].url]);
      //@ts-ignore
      setProduct(findProduct());
    }
  }, [products]);
  return (
    <>
      <main
        style={{
          backgroundColor: "#171717",
          fontFamily: "'Inter',sans-serif",
        }}
        className="grid h-screen justify-center"
      >
        <div
          style={{
            width: "80%",
            marginTop: "20px",
          }}
          className="grid grid-cols-2 gap-10 justify-self-center"
        >
          {dataList && <Gallery list={[dataList[0]]} defaultValue={dataList[0]} />}
          {/* Pasa la lista de URLs de imágenes como prop a Gallery */}
          <div>
            <div className="grid grid-cols-4">
              <div className="col-span-3 text-xl">
                {products.length > 0 &&
                  `${products[0].product.title} ${products[0].product.types[0].value} ${products[0].variant}`}
              </div>
              <div className="text-lg">$24.5</div>
            </div>
            <Divider className="my-4" />

            <div>
              <CheckboxGroup
                label="Select size"
                value={selected}
                onChange={(data) => setSelected(data[1])}
                classNames={{
                  base: "w-full",
                }}
              >
                <div className="grid grid-cols-2 gap-2">
                  {products.map((product) => (
                    <CustomCheckbox
                      key={product.id}
                      value={product.size.toLowerCase()}
                      size={product.size.toUpperCase()}
                    />
                  ))}
                </div>
              </CheckboxGroup>
            </div>
            <Divider className="my-4" />

            <div className="text-medium text-foreground-500">Quantity</div>
            <Input
              type="number"
              defaultValue="1"
              labelPlacement="outside"
              className="mt-2"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <Divider className="my-4" />
            {product && <AddCart product={product} />}
          </div>
        </div>
      </main>
    </>
  );
}
