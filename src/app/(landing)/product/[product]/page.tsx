"use client";
import { useEffect, useState } from "react";
import { Raleway } from "next/font/google";
import Breadcrumb from "../../_components/Breadcrumb";
import QuantityCounter from "../../_components/QuantityCounter";
import Tabs from "../../_components/Tabs";
import CustomSwiper from "../../_components/CustomeSwiper";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import apiCall from "@/utils/api";
import useStore from "@/state/store";
import Loading from "@/app/loading";

const raleway = Raleway({ subsets: ["latin"] });
const tabContent = [
  {
    title: 'Description',
    content: ``,
  },
  {
    title: 'Shipping Policy',
    content: `<p>Orders are processed within one business day (Monday to Friday, excluding holidays), and delivery takes 2-4 days. You'll receive a tracking number to monitor your order.
    <br><br><Strong>INTERNATIONAL SHIPPING</strong><br>
    We ship to many countries with a flat rate of $18.99. After processing, international delivery typically takes 15 business days (Monday to Friday), but this may vary due to customs.</p>`,
  },
  {
    title: 'Return Policy',
    content: `<p>
    We want to provide you the best service ever. We have a “Total Satisfaction Guarantee” policy, which means that we have a generous 30-day exchange policy. In other words, within the first 30 days of receiving your shirt, you can always exchange it for another, as long as the shirt is in its original condition.
    <br><br>
    We have three options in order to make sure you are satisfied with your order:
    <br><br>
    <strong>Change the size of your shirt:</strong> your shirt doesn’t fit? You can change it for the right size! You just have to return the wrong shirt and we’ll send you another one without charging any cost.
    <br><br>
    <strong>Exchange your shirt for another one:</strong> don’t like the shirt? Don’t worry! We want you to look amazing in your favorite designs. If you didn’t like the shirt we sent you, you can send us an email asking for another one!
    <br><br>
    <strong>Get a refund:</strong> request a refund through our email or phone number.
    For any of the provided options, you will have to send the wrong shirt to this address: 
    Merchlife | D2 America Sales Inc 153-F Lincoln Ave, San Jose, Ca 95125 USA
    <br><br>
    If you have any questions, please contact us through our phone number or email and we will be happy to assist you.
    </p>`,
  },
];

interface productsState {
  product: { title: string; price: string; type: string };
  variant: string;
  size: string;
  id: string;
  url: string;
  priceId: string;
}

export default function One() {
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(0)
  const router = useRouter()
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<productsState[]>([
    { product: { title: "", price: "", type: "" }, variant: "", size: "", id: "1", url: "", priceId: "" },
  ]);
  const params = useParams()
  const store = String(params.product).replaceAll("-", " ");


  useEffect(() => {
    // Función para obtener los datos del endpoint
    const fetchData = async () => {
      try {
        setLoading(true)
        const productId = searchParams.get("productId");
        const variant = searchParams.get("variant");
        const type = searchParams.get("type");

        const response = await apiCall(
          "GET",
          // `http://localhost:4000/api/1/product/productsByGroup/Rene-Meza?productId=${productId}&variant=${variant}&type=${type}`,
          `api/1/product/productsByGroup/${store}?productId=${productId}&variant=${variant}&type=${type}`,
        );

        //@ts-ignore
        const resData = response.data;
        // console.log('products in single product page: ', resData)
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
            priceId: item.priceId
          });
        });
        // console.log('productArray: ', productArray)
        setProducts(productArray);
        if (tabContent[0]) {
          tabContent[0].content = resData?.product?.[0]?.description ?? '';
        }
      } catch (error) {
        console.error("Error fetching dataaa:", error);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/stores", label: "Store" },
    { label: store }, // This item does not have a link
  ];
  const images = products.map(item => item.url).filter((value, index, self) =>
    self.indexOf(value) === index);
  const colorList = products.map((product) => product.variant).filter((value, index, self) =>
    self.indexOf(value) === index)
  const selectedPriceId = products.filter(item => (item.size == selectedSize && item.variant == colorList[selectedColor]) && item.priceId);
  // [
  //   "/2A/2AAfWhite.jpg",
  //   "/2A/2AAfWhite.jpg",
  //   "/2A/2AAfWhite.jpg",
  //   "/2A/2AAfWhite.jpg",
  //   // Add more image URLs as needed
  // ];

  const sizeOptions = products.map((product) => product.size).filter((value, index, self) =>
    self.indexOf(value) === index);
  // ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const { addProduct } = useStore((state) => {
    //@ts-ignore
    return { addProduct: state.addProduct };
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSize !== "") {

      addProduct({
        name: products[0]?.product.title,
        price: products[0]?.product.price,
        id: products[0]?.id,
        quantity: quantity,
        size: selectedSize,
        priceId: selectedPriceId[0]?.priceId,
        url: images[selectedColor]
      })
      router.push('/cart')
    } else {
      alert("Select size");
    }
  }

  return loading ? (<Loading />) :
    (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <div className={`container mx-auto ${raleway.className}`}>
          <div className="flex flex-row  flex-wrap md:flex-row justify-center">
            <div className="p-0 md:p-4 w-full md:w-auto mb-4 md:mb-0 md:flex-shrink-0 sm:w-full">
              <CustomSwiper images={images} selectedValue={setSelectedColor} />
            </div>
            <div className="mt-6 p-0 md:p-4 w-full md:w-auto lg:w-1/2">
              <form onSubmit={(e) => handleSubmit(e)} className="p-0 md:p-4">
                <p className="py-4 text-3xl lg:text-5xl font-bold">{products.length > 0 &&
                  `${products[0]?.product.title} ${products[0]?.product?.type}`}</p>
                <p className="border-b py-2 text-2xl font-semibold text-[#636363]">${products.length > 0 && products[0]?.product.price}</p>

                <div className=" border-b py-5">
                  <p className="text-xl font-bold">
                    SIZE : <span className="font-normal text-gray-400">{selectedSize}</span>
                  </p>

                  <div className="inline-flex flex-wrap gap-3 rounded-md py-4" role="group">
                    {sizeOptions.map((size, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`h-10 w-10 rounded-full border text-sm font-medium  ${selectedSize === size ? "border border-black text-black" : "text-gray-400"
                          }`}
                        onClick={() => handleSizeSelect(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className=" border-b py-5">
                  <p className="text-xl font-bold">QUANTITY</p>
                  <div>
                    <div className="inline-flex   py-5 md:space-x-2 sm:space-x-2" role="group">
                      <QuantityCounter setQuantity={setQuantity} quantity={quantity} />
                      <button
                        onClick={() => { }}
                        type="submit"
                        className=" border-gray-200 bg-[#121212] px-4 py-2.5 text-sm font-medium text-[#F5F5F5]  md:mb-0 lg:h-[54px] lg:w-[290px]"
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Tabs tabContent={tabContent} />

      </>
    );
}
