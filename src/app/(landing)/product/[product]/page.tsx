"use client";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { Raleway } from "next/font/google";
import Breadcrumb from "../../_components/Breadcrumb";
import QuantityCounter from "../../_components/QuantityCounter";
import StarRating from "../../_components/StarRating";
import Tabs from "../../_components/Tabs";
import CustomSwiper from "../../_components/CustomeSwiper";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Pegination from '../../_components/Pegination';
import apiCall from "@/utils/api";
import useStore from "@/state/store";

const raleway = Raleway({ subsets: ["latin"] });
const tabContent = [
  {
    title: 'Description',
    content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tincidunt augue, at porta sapien. Suspendisse ac finibus tellus, non dapibus nibh. Nulla aliquam, odio ultricies aliquet pretium, lectus velit lacinia diam, dignissim egestas tortor nisi sagittis nunc. Sed vehicula neque tortor, eget finibus arcu molestie nec. Sed rutrum nisi porta turpis vehicula, facilisis finibus sapien tincidunt. Pellentesque sollicitudin purus quis dolor finibus congue.</p><br/>

    <p>Sed a velit lectus. In hac habitasse platea dictumst. Pellentesque volutpat enim nec nibh vulputate lacinia. Donec tempor, sem id placerat faucibus, sapien urna convallis leo, nec bibendum sapien diam mattis nulla. Mauris auctor velit id dui lobortis rhoncus. Praesent eget mattis neque. Sed sollicitudin porttitor nisl. Nullam at nunc vulputate, sollicitudin ipsum sit amet, venenatis sapien. Maecenas imperdiet sem ut ante varius, a aliquet mauris tristique.</p> <br/>

    <p>Mauris at elementum elit, eget feugiat elit. Pellentesque vel porta velit, quis tristique justo. In lobortis vehicula odio, non pretium felis. Donec tempus justo rhoncus augue malesuada, et aliquet nisi aliquet. Proin vulputate odio tortor, et pulvinar erat interdum quis. Morbi finibus fringilla quam vel finibus. Fusce vel blandit lectus, et tincidunt sapien. Sed facilisis erat in orci volutpat sodales.</p> <br/>`,
  },
  {
    title: 'Size Charts',
    content: `<p>In hac habitasse platea dictumst. Pellentesque volutpat enim nec nibh vulputate lacinia...</p>`,
  },
  {
    title: 'Shipping Policy',
    content: `<p>Mauris at elementum elit, eget feugiat elit. Pellentesque vel porta velit, quis tristique justo...</p>`,
  },
  {
    title: 'Return Policy',
    content: `<p>Sed sollicitudin porttitor nisl. Nullam at nunc vulputate, sollicitudin ipsum sit amet, venenatis sapien...</p>`,
  },
];

interface productsState {
  product: { title: string; price: string; type: string };
  variant: string;
  size: string;
  id: string;
  url: string;
}

export default function One() {
  const [selected, setSelected] = useState(["s"]);
  const [quantity, setQuantity] = useState(1);
  const [selectedStars, setSelectedStars] = useState<any>([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedColor,setSelectedColor] = useState(0)
  const router = useRouter()
  const [reviews, setReviews] = useState([
    {
      name: 'John Deo',
      title: 'Product name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tincidunt augue, at porta sapien. Suspendisse ac finibus tellus, non dapibus nibh. Nulla aliquam, odio ultricies aliquet pretium, lectus velit lacinia diam, dignissim egestas tortor nisi sagittis nunc.',
      rating: '4'
    },
    {
      name: 'John Deo',
      title: 'Product name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tincidunt augue, at porta sapien. Suspendisse ac finibus tellus, non dapibus nibh. Nulla aliquam, odio ultricies aliquet pretium, lectus velit lacinia diam, dignissim egestas tortor nisi sagittis nunc.',
      rating: '3'
    },
    {
      name: 'John Deo',
      title: 'Product name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tincidunt augue, at porta sapien. Suspendisse ac finibus tellus, non dapibus nibh. Nulla aliquam, odio ultricies aliquet pretium, lectus velit lacinia diam, dignissim egestas tortor nisi sagittis nunc.',
      rating: '5'
    },
    {
      name: 'John Deo',
      title: 'Product name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tincidunt augue, at porta sapien. Suspendisse ac finibus tellus, non dapibus nibh. Nulla aliquam, odio ultricies aliquet pretium, lectus velit lacinia diam, dignissim egestas tortor nisi sagittis nunc.',
      rating: '2'
    },
    {
      name: 'John Deo',
      title: 'Product name',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae tincidunt augue, at porta sapien. Suspendisse ac finibus tellus, non dapibus nibh. Nulla aliquam, odio ultricies aliquet pretium, lectus velit lacinia diam, dignissim egestas tortor nisi sagittis nunc.',
      rating: '5'
    }
  ]);
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<productsState[]>([
    { product: { title: "", price: "", type: "" }, variant: "", size: "", id: "1", url: "" },
  ]);
  const params = useParams()
  const store = params.product

  useEffect(() => {
    // Función para obtener los datos del endpoint
    const fetchData = async () => {
      try {
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
        console.log(productArray)
        setProducts(productArray); // Actualiza el estado con los datos recibidos del endpoint

      } catch (error) {
        console.error("Error fetching dataaa:", error);
      }
    };

    fetchData(); // Llama a la función fetchData cuando el componente se monta
  }, []);

  const findProduct = () => {
    if (selected[0] === "m") {
      return {
        name: "2A AF White M",
        quantity: quantity,
        size: "M",
        priceId: "price_1OolfIGkWb1Ap7UJi10tbETx",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "l") {
      return {
        name: "2A AF White L",
        quantity: quantity,
        size: "L",
        priceId: "price_1OolgHGkWb1Ap7UJmRNUrlWt",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "xl") {
      return {
        name: "2A AF White XL",
        quantity: quantity,
        size: "XL",
        priceId: "price_1Oolh4GkWb1Ap7UJauIu8AGE",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "2xl") {
      return {
        name: "2A AF White 2XL",
        quantity: quantity,
        size: "2XL",
        priceId: "price_1OolhkGkWb1Ap7UJ1hq8PKfW",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "3xl") {
      return {
        name: "2A AF White 3XL",
        quantity: quantity,
        size: "3XL",
        priceId: "price_1OoliIGkWb1Ap7UJObUSEy0V",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "4xl") {
      return {
        name: "2A AF White 4XL",
        quantity: quantity,
        size: "4XL",
        priceId: "price_1OolipGkWb1Ap7UJGLtCkHF6",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    if (selected[0] === "5xl") {
      return {
        name: "2A AF White 5XL",
        quantity: quantity,
        size: "5XL",
        priceId: "price_1OoljKGkWb1Ap7UJVJrjm6fU",
        url: "/2A/2AAfWhite.jpg",
      };
    }
    return {
      name: "2A AF White S",
      quantity: quantity,
      size: "S",
      priceId: "price_1OoljtGkWb1Ap7UJKGzI8MpW",
      url: "/2A/2AAfWhite.jpg",
    };
  };
  const data = ["/2A/2AAfWhite.jpg", "/2A/2AAfWhiteB.jpg"];

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/stores", label: "Store" },
    { label: store }, // This item does not have a link
  ];
  const images = products.map(item=>item.url).filter((value, index, self) =>
    self.indexOf(value) === index);
  // [
  //   "/2A/2AAfWhite.jpg",
  //   "/2A/2AAfWhite.jpg",
  //   "/2A/2AAfWhite.jpg",
  //   "/2A/2AAfWhite.jpg",
  //   // Add more image URLs as needed
  // ];

  const handleClick = (index) => {
    const newSelectedStars: any = [...Array(index + 1).keys()];
    setSelectedStars(newSelectedStars);
  };

  const sizeOptions = products.map((product)=>product.size).filter((value, index, self) =>
    self.indexOf(value) === index);
  // ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const { addProduct } = useStore((state) => {
    //@ts-ignore
    return { addProduct: state.addProduct};
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectedSize !== "")
    {

      addProduct({name:products[0]?.product.title,
        price: products[0]?.product.price,
        id:products[0]?.id,
        quantity: quantity,
        size: selectedSize,
        url: images[selectedColor]})
        router.push('/cart')
      } else{
        alert("Select size");
      }

  }
  // const colorList = products.map((product)=>product.variant).filter((value, index, self) =>
  //   self.indexOf(value) === index)
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className={`container mx-auto ${raleway.className}`}>
        <div className="flex flex-row md:flex-row justify-center">
          <div className="p-4 w-full md:w-auto mb-4 md:mb-0 md:mr-4 md:flex-shrink-0 sm:w-full">
            <CustomSwiper images={images} selectedValue={setSelectedColor}  />
          </div>
          <div className="p-4 w-full md:w-auto lg:w-1/2">
            <form onSubmit={(e) => handleSubmit(e)} className="p-4">

              <div className="flex items-center">
                {[...Array(5)].map((_, index:any) => (
                  <svg
                    key={index}
                    className={`h-5 w-5 ${selectedStars.includes(index) ? "text-yellow-300" : "text-gray-300"} ms-1 cursor-pointer`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                    onClick={() => handleClick(index)}
                    style={{ pointerEvents: "auto" }}
                  >
                    <path d="m11.862 0 2.632 8.101h8.518l-6.891 5.007 2.632 8.101-6.891-5.007L4.97 21.21l2.632-8.101L.712 8.101H9.23L11.862 0Z"
                    />
                  </svg>
                ))}{" "}
                &nbsp; &nbsp;
                <p className="text-xl  text-gray-400">Lorem ipsum dolor sit amet</p>
              </div>
              <p className="py-4 text-5xl font-bold">{products.length > 0 &&
                  `${products[0]?.product.title} ${products[0]?.product?.type}`}</p>
              <p className="border-b py-2 text-2xl font-semibold text-[#636363]">${products.length > 0 && products[0]?.product.price}</p>

              <div className=" border-b py-5">
                <p className="text-xl font-bold">
                  SIZE : <span className="font-normal text-gray-400">{selectedSize}</span>
                </p>

                <div className="inline-flex gap-3 rounded-md py-4" role="group">
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
                    onClick={() => {}}
                      type="submit"
                      className="mb-2 border-gray-200 bg-[#121212] px-5 py-2.5 text-sm font-medium text-[#F5F5F5]  md:mb-0 lg:h-[54px] lg:w-[290px]"
                    >
                      ADD TO CART
                    </button>
                  </div>
              {/* <fieldset aria-label="Choose a color" className="mt-4">
              <legend className="text-xl font-bold">Color</legend>

              <RadioGroup
                value={selectedColor}
                onChange={setSelectedColor}
                className="mt-4 flex items-center space-x-3"
              > */}
                {/* {colorList &&
                  colorList.map((color:any,index:number) => (
                    <Radio
                      key={index}
                      value={color}
                      aria-label={color}
                      className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1"
                    >
                      <span
                        aria-hidden="true"
                        style={{ backgroundColor: color }}
                        className=" h-8 w-8 rounded-full border border-gray-400 border-opacity-75"
                      />
                    </Radio>
                  ))} */}
              {/* </RadioGroup>
            </fieldset> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    

      <Tabs tabContent={tabContent} />
      <section className="container relative py-24">
        <div className="lg-6 mx-auto w-full max-w-7xl px-4 md:px-5">
          <div className="mb-11 flex items-center justify-center md:space-x-2">
            <div className="flex-grow border-t border-black"></div>
            <h2 className="font-manrope mb-2 text-center text-6xl font-bold text-black">
              Customer Reviews
            </h2>
            <div className="flex-grow border-t border-black"></div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {displayedReviews?.map((review: any, index) => (
              <div key={index} className="mx-auto grid max-w-sm grid-cols-12 sm:max-w-full">
                <div className="col-span-12  ">
                  <div className="gap-28 sm:flex">
                    <div className="col-span-12 flex flex-row  max-lg:hidden max-lg:pt-6 lg:col-span-2 lg:flex-col lg:items-center ">
                      <div className="mb-5 flex w-full items-center gap-2 lg:justify-between">
                        <StarRating rating={parseInt(review.rating)} />
                      </div>
                      <p className="flex  whitespace-nowrap text-lg font-medium leading-8 text-gray-400 lg:text-center">
                        <button
                          className="mb-2 border-gray-200 max-w-[136px] max-h-[30px]  bg-[#121212] px-5  text-sm font-medium text-white  
                           focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 
                          dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:mb-0 "
                        >
                          Verified buyer
                        </button>
                        <p className="mb-2 pl-2 text-[22px]  font-bold leading-[22px] text-gray-900">
                          {review.name}
                        </p>
                      </p>
                    </div>

                    <div className="text ">
                      <p className="mb-2 text-[22px]  font-bold leading-[22px] text-gray-900">
                        {review.title}
                      </p>

                      <p className="mb-4 text-lg font-normal leading-[30px] ">
                        {review.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="w-full border-b border-gray-100 pb-8"></div>
            <Pegination reviews={reviews} setDisplayedReviews={setDisplayedReviews} 
            displayedReviews={displayedReviews}
             itemsPerPage={itemsPerPage} // Pass itemsPerPage state
             setItemsPerPage={setItemsPerPage}
             currentPage={currentPage} // Pass currentPage state
             setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
        <div className="flex items-center gap-4"></div>
      </section>

    </>
  );
}
