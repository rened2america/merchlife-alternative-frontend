"use client";
import { useEffect, useRef, useState } from "react";
import { Raleway } from "next/font/google";
import SubHeaderCard from "../../_components/SubHeaderCard";
import ProductCard from "../../_components/common/ProductCard";
import Pegination from "../../_components/Pegination";
import apiCall from "@/utils/api";
import { useSearchParams } from "next/navigation";
import BeatLoader from "react-spinners/BeatLoader";;
import { ArrowRightIcon } from "@radix-ui/react-icons";
const raleway = Raleway({ subsets: ["latin"] });

export default function ProductCatalog() {

  const catagory = useSearchParams().get("category")
  const [openCategory, setOpenCategory] = useState(catagory);
  const [selectedColor, setSelectedColor] = useState('White');
  const [selectedPrice, setSelectedPrice] = useState<string>("All");
  const [selectedSize, setSelectedSize] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchWord, setSearchWord] = useState<string | null>(null);
  const [displayedReviews, setDisplayedReviews] = useState<any>([]);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [apiQuery, setquery] = useState("");
  const [productCount, setProductCount] = useState(0);
  const [sortBy, setSortBy] = useState("LowToHigh");
  const [loading, setLoading] = useState<boolean>(false);
  const refSearchInput = useRef<HTMLInputElement>(null)

  const getData = async () => {
    try {
      let query = `api/1/product/findProductsByFilters/1?`;
      if (openCategory != null && openCategory != 'All') {
        query += "type=" + openCategory
      }
      if (searchWord != null) {
        query += "&searchWord=" + searchWord
      }
      if (selectedSize != null && selectedSize != 'All') {
        query += "&size=" + selectedSize
      }
      if (selectedPrice != null && selectedPrice != 'All') {
        const tempPrice = selectedPrice.split(" - ")

        query += "&minPrice=" + tempPrice[0]?.split("$")[1] + "&maxPrice=" + tempPrice[1]?.split("$")[1]
      }
      if (selectedColor != null && selectedColor != 'All') {
        query += "&variant=" + selectedColor
      }
      query += "&sort=" + sortBy;
      setquery(query)
      setLoading(true);
      const { data, count } = await apiCall('GET', query + "&page=1&pageSize=" + itemsPerPage);
      setDisplayedReviews(data);
      setProductCount(count);
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }finally{
      setLoading(false);
    }
  };
  useEffect(() => {

    getData();

  }, [openCategory, selectedSize, selectedPrice, selectedColor, searchWord, sortBy])

  useEffect(() => {
    console.log(displayedReviews);

  }, [displayedReviews])

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const productTypeArr = ['All', 'Sweatshirt', 'Mug', 'Shirt', 'Hoodie']

  const colors = [
    { name: 'All' },
    { name: 'Red', value: 'red', colorCode: 'bg-red-500 border' },
    { name: 'Blue', value: 'blue', colorCode: 'bg-blue-500 border' },
    { name: 'White', value: 'white', colorCode: 'bg-white-500 border' },
    { name: 'Beige', value: 'beige', colorCode: 'bg-[#bec9a9] border' },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const priceRanges = [
    { priceTag: 'All' },
    { priceTag: '$0 - $20' },
    { priceTag: '$21 - $40' },
    { priceTag: '$41 - $59' },
    { priceTag: '$60 - $100' },
    { priceTag: '$100 - $150' },
  ];

  const sizeOptions = ["All", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];


  const handlePriceClick = (priceTag) => {
    setSelectedPrice(priceTag);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const productsList = [
    {
      "id": 1,
      "name": "6 PMers Black T-shirt",
      "price": 24.5,
      "image": "2AAfWhite_1.png"
    },
    {
      "id": 2,
      "name": "Another Product",
      "price": 25.99,
      "image": "2AAfWhite_1.png"
    },
    {
      "id": 3,
      "name": "6 PMers Black T-shirt",
      "price": 26.5,
      "image": "2AAfWhite_1.png"
    },
    {
      "id": 4,
      "name": "Another Product",
      "price": 27.99,
      "image": "2AAfWhite_1.png"
    },
    {
      "id": 5,
      "name": "6 PMers Black T-shirt",
      "price": 28.5,
      "image": "2AAfWhite_1.png"
    },
    {
      "id": 6,
      "name": "Another Product",
      "price": 99.99,
      "image": "2AAfWhite_1.png"
    },
    {
      "id": 7,
      "name": `6 PMers Black T-shirt`,
      "price": 30.5,
      "image": "2AAfWhite_1.png"
    },
    {
      "id": 8,
      "name": "Another Product",
      "price": 31.56,
      "image": "2AAfWhite_1.png"
    }, {
      "id": 9,
      "name": "6 PMers Black T-shirt",
      "price": 32.50,
      "image": "2AAfWhite_1.png"
    },
    {
      "id": 10,
      "name": "Another Product",
      "price": 33.23,
      "image": "2AAfWhite_1.png"
    }
  ]
  // if(displayedReviews.length == 0){
  //   return <h1>Loading</h1>
  // }
  return (
    <>
      <div className={`flex flex-col lg:flex-row gap-4 py-20 ${raleway.className}`}>
        <button className="lg:hidden mb-4" onClick={toggleSidebar}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <div className={`w-full lg:w-96 p-4 ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="flex items-center bg-gray-100 p-2">
            <input
              type="text"
              placeholder="Search"
              ref={refSearchInput}
              className="bg-transparent px-3 py-4 flex-grow text-gray-600 focus:outline-none placeholder:text-xs"
            />
            <button className="ml-2 mt-[3px]" onClick={() => { setSearchWord(refSearchInput.current && refSearchInput.current?.value) }}>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#000" d="m20.746 18.607-3.572-3.361-.084-.123a.855.855 0 0 0-.59-.233.855.855 0 0 0-.591.233c-3.036 2.68-7.714 2.826-10.932.34-3.218-2.485-3.976-6.83-1.773-10.153C5.407 1.987 9.889.717 13.676 2.342c3.788 1.625 5.707 5.642 4.484 9.386a.758.758 0 0 0 .189.771.876.876 0 0 0 .804.232.823.823 0 0 0 .616-.54c1.462-4.442-.746-9.223-5.195-11.25-4.45-2.026-9.806-.69-12.603 3.144C-.827 7.92-.226 13.102 3.384 16.28c3.61 3.178 9.146 3.397 13.027.516l3.163 2.975a.875.875 0 0 0 1.181 0 .763.763 0 0 0 0-1.12l-.009-.043Z"></path>
                <path stroke="#000" strokeWidth={1.5} d="M6.45 12.5c1.04 1.167 4.054 2.8 7.795 0" />
              </svg>
            </button>
          </div>
          <div className="flex items-center bg-gray-100 text-black p-2 mt-6 gap-2 py-4 hover:bg-gray-300">
              <a className="flex items-center gap-2" href="../stores">Visit Store Catalog <ArrowRightIcon/></a>
          </div>
          <div className="p-4 bg-gray-100 mt-6">
            <h2 className="font-bold text-lg mb-2 text-black">CATEGORIES</h2>
            {/* <ul> */}

            {productTypeArr.map((item: any, index: number, array: any) => (
              <div key={index}>
                <li className={`mb-3 mt-3 flex items-center cursor-pointer`} onClick={() => setOpenCategory(item)}>
                  <span className={`${openCategory === item ? 'text-black' : 'text-[#868686]'}`}>{item}</span>
                </li>
                {index === array.length - 1 ? "" : (<div className="border-b border-1 border-[#868686]" />)}
              </div>
            ))}

          </div>
          <div className="p-4 bg-gray-100 mt-6">
            <h2 className="font-bold text-lg mb-2 text-black">COLOR</h2>
            <ul>
              {colors.map((color, index, array) =>
                <div key={index}>
                  <li className={`mb-3 mt-3 flex items-center cursor-pointer`} onClick={() => handleColorClick(color.value)}>
                    <div className={`w-4 h-4 rounded-full ${color.colorCode} mr-5`}></div>
                    <span className={`${selectedColor === color.value ? 'text-black' : 'text-[#868686]'}`}>{color.name}</span>
                  </li>
                  {index === array.length - 1 ? "" : (<div className="border-b border-1 border-[#868686]" />)}
                </div>
              )}
            </ul>
          </div>

          <div className="p-4 bg-gray-100 mt-6">
            <h2 className="font-bold text-lg mb-2 text-black">Price</h2>
            <ul>
              {priceRanges.map((price, index, array) => (
                <div key={index}>
                  <li className={`mb-3 mt-3 flex items-center cursor-pointer`} onClick={() => handlePriceClick(price.priceTag)}>
                    <span className={`${selectedPrice === price.priceTag ? 'text-black' : 'text-[#868686]'}`}>{price.priceTag}</span>
                  </li>
                  {index === array.length - 1 ? "" : (<div className="border-b border-1 border-[#868686]" />)}
                </div>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-gray-100 mt-6">
            <h2 className="font-bold text-lg mb-2 text-black">Size</h2>
            <ul>
              {sizeOptions.map((size, index, array) => (
                <div key={index}>
                  <li className={`mb-3 mt-3 flex items-center cursor-pointer`} onClick={() => handleSizeClick(size)}>
                    <span className={`${selectedSize === size ? 'text-black' : 'text-[#868686]'}`}>{size}</span>
                  </li>
                  {index === array.length - 1 ? "" : (<div className="border-b border-1 border-[#868686]" />)}
                </div>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <span className="uppercase font-light text-3xl md:text-5xl">
              Products at <strong className="font-bold text-3xl md:text-5xl">Merchlife</strong>
            </span>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 md:mt-0">
              {/* <span className="font-semibold">
                448 products
              </span> */}
              <span>
                <form className="max-w-sm mx-auto">
                  <select onChange={(e) => setSortBy(e.target.value)} className="bg-[#F3F3F3] h-12 md:h-14 text-gray-900 text-sm block w-full py-2 md:py-3 px-4 pl-2 focus:outline-none">
                    <option selected>Sort by Price</option>
                    <option value="LowToHigh">Low To High</option>
                    <option value="HighToLow">High To Low</option>
                  </select>
                </form>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2 mt-8">
            { loading ?            
              <div className="flex items-center m-auto p-20">
                <BeatLoader color="white" />
              </div>
              :
              (
                displayedReviews &&
                displayedReviews.map((product: any) => (
                  <ProductCard key={product?.id} product={product} color={selectedColor} />
                ))
              )
            }

            {/* <CardProduct
                name="Test"
                value={1}
                FrontImage="/2A/2AAfWhite.jpg"
                BackImage="/2A/2AAfWhiteB.jpg"
                redirect="/test"
              /> */}
          </div>
          <div>
            {itemsPerPage && currentPage && productsList &&
              <Pegination
                reviews={displayedReviews} // Pass the list of products as reviews
                displayedReviews={displayedReviews}
                setDisplayedReviews={setDisplayedReviews}
                itemsPerPage={itemsPerPage} // Pass itemsPerPage state
                setItemsPerPage={setItemsPerPage}
                currentPage={currentPage} // Pass currentPage state
                setCurrentPage={setCurrentPage}
                query={apiQuery}
                count={productCount}
              />}
          </div>
        </div>

      </div>

    </>

  );
}
