"use client";
// @ts-ignore-all
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
import { useParams, useSearchParams } from "next/navigation";
import apiCall from "@/utils/api";

interface productsState {
  product: { title: string; price: string; type: string };
  variant: string;
  size: string;
  id: string;
  url: string;
}

export default function One() {
  const [selectedSize, setSelectedSize] = useState("s"); // Inicializa selected con "s" (S)
  const [quantity, setQuantity] = useState(1); // Inicializa quantity con 1
  const [products, setProducts] = useState<productsState[]>([
    { product: { title: "", price: "", type: "" }, variant: "", size: "", id: "1", url: "" },
  ]); // Inicializa products como un arreglo vacío
  const [dataList, setDataList] = useState<string[]>([]); // Inicializa products como un arreglo vacío
  const [product, setProduct] = useState(null);
  const searchParams = useSearchParams();
  const params = useParams();
  useEffect(() => {
    // Función para obtener los datos del endpoint
    const fetchData = async () => {
      try {
        const productId = searchParams.get("productId");
        const variant = searchParams.get("variant");
        const type = searchParams.get("type");

        const store = params.product
        
        const response = await apiCall(
          "GET",
          // `http://localhost:4000/api/1/product/productsByGroup/Rene-Meza?productId=${productId}&variant=${variant}&type=${type}`,
          `api/1/product/productsByGroup/${store}?productId=${productId}&variant=${variant}&type=${type}`,
        );

        //@ts-ignore
        const resData = response.data;
        let productArray: any = [];
        response.data.product[0].design.map((item) => {
          productArray.push({
            product: {
              title: resData.product[0].title,
              price: resData.product[0].price,
              type: resData.product[0].types[0].value,
            },
            size: item.size,
            id: resData.product[0].id,
            variant: item.variant,
            url: item.url,
          });
        });
        setProducts(productArray); // Actualiza el estado con los datos recibidos del endpoint

      } catch (error) {
        console.error("Error fetching dataaa:", error);
      }
    };

    fetchData(); // Llama a la función fetchData cuando el componente se monta
  }, []); // El segundo argumento del useEffect es un arreglo vacío para que se ejecute solo una vez al montar el componente

  const findProduct = () => {
    // Función para encontrar el producto seleccionado
    const productId = parseInt(searchParams.get("productId") ?? "1");
    const variant = searchParams.get("variant");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    const selectedProduct: any = products.find(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
      (product: any) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        product?.size.toLowerCase() === selectedSize.toLowerCase() &&
        product.variant.toLowerCase() === variant &&
        product.productId === productId,
    );
    if (selectedProduct) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
      const productData: any = {
        name: selectedProduct.title,
        quantity: quantity,
        size: selectedProduct.size.toUpperCase(),
        priceId: selectedProduct.priceId,
        url: selectedProduct.url,
      };

      return productData;
    }
  };

  useEffect(() => {
    if (products && products.length > 0) {
      //@ts-ignore
      const temp = products.map(item=>item.url).filter((value, index, self) =>
        self.indexOf(value) === index);
      setDataList(temp);
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
          {dataList && <Gallery list={dataList} defaultValue={dataList[0] as string} />}
          {/* Pasa la lista de URLs de imágenes como prop a Gallery */}
          <div>
            <div className="grid grid-cols-4">
              <div className="col-span-3 text-xl">
                {products.length > 0 &&
                  `${products[0]?.product.title} ${products[0]?.product?.type} ${products[0]?.variant}`}
              </div>
              <div className="text-lg">${products.length > 0 && products[0]?.product.price}</div>
            </div>
            <Divider className="my-4" />

            <div>
              <CheckboxGroup
                label="Select size"
                //@ts-ignore
                value={selectedSize}
                //@ts-ignore
                onChange={setSelectedSize}
                classNames={{
                  base: "w-full",
                }}
              >
                <div className="grid grid-cols-2 gap-2">
                
                  {products.map((product, index) => ( product.variant === products[0]?.variant &&
                    <CustomCheckbox
                      //@ts-ignore

                      key={index}
                      //@ts-ignore

                      value={product.size.toLowerCase()}
                      //@ts-ignore

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
