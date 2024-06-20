
// "use client";
// import { useEffect, useState } from "react";
// import { Raleway } from "next/font/google";
// import SubHeaderCard from "../_components/SubHeaderCard";
// import ProductCard from "../_components/common/ProductCard";
// import apiCall from "@/utile/api";

// const raleway = Raleway({ subsets: ["latin"] });

// export default function Stores() {
//   const [data, setData] = useState(null);
//   const getData = async () => {
//     try {
//       const data = await apiCall('GET', 'api/1/artist/all');
//       console.log('222',data);
//     } catch (error) {
//       // Handle error
//       console.error('Error:', error);
//     }
//   };



//   useEffect(() => {

//     getData();
//     // fetch("http://localhost:4000/api/1/artist/all")
//     //   .then((response) => {
//     //     return response.json();
//     //   })
//     //   .then((responseData) => {
//     //     console.log(responseData);
//     //     setData(responseData.artist);
//     //   });
//   }, []);
//   console.log('111',data);

//   const [openCategory, setOpenCategory] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [selectedPrice, setSelectedPrice] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);



//   const handleColorClick = (color) => {
//     setSelectedColor(color);
//   };

//   const categories = [
//     {
//       name: '6 PM ears',
//       subcategories: ['Sub 1', 'Sub 2', 'Sub 3']
//     },
//     {
//       name: 'ADAM Krum',
//       subcategories: ['Sub 1', 'Sub 2', 'Sub 3']
//     },
//     {
//       name: '2A American Freedom',
//       subcategories: ['Sub 1', 'Sub 2', 'Sub 3']
//     },
//   ];

//   const colors = [
//     { name: 'Red', colorCode: 'bg-red-500' },
//     { name: 'Blue', colorCode: 'bg-blue-500' },
//     { name: 'Green', colorCode: 'bg-green-500' },
//     { name: 'Grey', colorCode: 'bg-gray-400' },
//     { name: 'Yellow', colorCode: 'bg-yellow-500' },
//     { name: 'Black', colorCode: 'bg-black' },
//   ];

//   const toggleSubMenu = (category) => {
//     if (openCategory === category) {
//       setOpenCategory(null);
//     } else {
//       setOpenCategory(category);
//     }
//   };


//   const priceRanges = [
//     { priceTag: 'All' },
//     { priceTag: '$0 - $20' },
//     { priceTag: '$60 - $100' },
//     { priceTag: '$100 - $150' },
//   ];

//   const sizeOptions = ["S", "M", "L", "XL", "XXL"];


//   const handlePriceClick = (priceTag) => {
//     setSelectedPrice(priceTag);
//   };

//   const handleSizeClick = (size) => {
//     setSelectedSize(size);
//   };

//   const store = [
//     { text: 'HOME', href: '/' },
//     { text: 'STORE', href: '#', icon: true }
// ];

// const productsList = [
//   {
//     "id": 1,
//     "name": "6 PMers Black T-shirt",
//     "price": 24.5,
//     "image": "2AAfWhite_1.png"
//   },
//   {
//     "id": 2,
//     "name": "Another Product",
//     "price": 19.99,
//     "image": "2AAfWhite_1.png"
//   },
//   {
//     "id": 1,
//     "name": "6 PMers Black T-shirt",
//     "price": 24.5,
//     "image": "2AAfWhite_1.png"
//   },
//   {
//     "id": 2,
//     "name": "Another Product",
//     "price": 19.99,
//     "image": "2AAfWhite_1.png"
//   },
//   {
//     "id": 1,
//     "name": "6 PMers Black T-shirt",
//     "price": 24.5,
//     "image": "2AAfWhite_1.png"
//   },
//   {
//     "id": 2,
//     "name": "Another Product",
//     "price": 19.99,
//     "image": "2AAfWhite_1.png"
//   },
//   {
//     "id": 1,
//     "name": "6 PMers Black T-shirt",
//     "price": 24.5,
//     "image": "2AAfWhite_1.png"
//   },
//   {
//     "id": 2,
//     "name": "Another Product",
//     "price": 19.99,
//     "image": "2AAfWhite_1.png"
//   },{
//     "id": 1,
//     "name": "6 PMers Black T-shirt",
//     "price": 24.5,
//     "image": "2AAfWhite_1.png"
//   },
//   {
//     "id": 2,
//     "name": "Another Product",
//     "price": 19.99,
//     "image": "2AAfWhite_1.png"
//   }
// ]
//   return (
//     <>
//     <SubHeaderCard title="STORE" links={store} />
//     <div className={`flex gap-4 py-20 ${raleway.className}}`}>
//       <div className="w-96 p-4">
//         <div className="flex items-center bg-gray-100 p-2">
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-transparent px-3 py-4 flex-grow text-gray-600 focus:outline-none placeholder: text-xs"
//           />
//           <button className="ml-2 mt-[3px]">
//             <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path fill="#000"
//                 d="m20.746 18.607-3.572-3.361-.084-.123a.855.855 0 0 0-.59-.233.855.855 0 0 0-.591.233c-3.036 2.68-7.714 2.826-10.932.34-3.218-2.485-3.976-6.83-1.773-10.153C5.407 1.987 9.889.717 13.676 2.342c3.788 1.625 5.707 5.642 4.484 9.386a.758.758 0 0 0 .189.771.876.876 0 0 0 .804.232.823.823 0 0 0 .616-.54c1.462-4.442-.746-9.223-5.195-11.25-4.45-2.026-9.806-.69-12.603 3.144C-.827 7.92-.226 13.102 3.384 16.28c3.61 3.178 9.146 3.397 13.027.516l3.163 2.975a.875.875 0 0 0 1.181 0 .763.763 0 0 0 0-1.12l-.009-.043Z"></path>
//               <path
//                 stroke="#000"
//                 strokeWidth={1.5}
//                 d="M6.45 12.5c1.04 1.167 4.054 2.8 7.795 0"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="p-4 bg-gray-100 mt-6">
//           <h2 className="font-bold text-lg mb-2">CATEGORIES</h2>
//           <ul>
//             {categories.map((category, index, array) => (
//               <li key={index}>
//                 <div
//                   className="mb-3 mt-3 flex justify-between items-center text-gray-700 cursor-pointer"
//                   onClick={() => toggleSubMenu(category.name)}
//                 >
//                   <span className={` ${openCategory === category.name ? "text-black" : "text-[#868686]"}`}>{category.name}</span>
//                   <svg
//                     className={`w-4 h-4 ${openCategory === category.name ? "text-black" : "text-[#868686]"} transform ${openCategory === category.name ? 'rotate-90' : ''
//                       }`}
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>

//                 </div>
//                 {index === array.length - 1 ? "" : (<div className="border-b border-1 border-[#868686]" />)}
//                 {openCategory === category.name && (
//                   <ul className="ml-4 mt-2">
//                     {category.subcategories.map((subcategory, subIndex) => (
//                       <li
//                         key={subIndex}
//                         className="mb-2 flex justify-between items-center text-gray-500"
//                       >
//                         <span>{subcategory}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="p-4 bg-gray-100 mt-6">
//           <h2 className="font-bold text-lg mb-2">COLOR</h2>
//           <ul>
//             {colors.map((color, index, array) => (
//               <>
//                 <li key={index} className={`mb-3 mt-3 flex items-center cursor-pointer`} onClick={() => handleColorClick(color.name)}>
//                   <div className={`w-4 h-4 rounded-full ${color.colorCode} mr-5`}></div>
//                   <span className={`${selectedColor === color.name ? 'text-black' : 'text-[#868686]'
//                     }`}>{color.name}</span>
//                 </li>
//                 {index === array.length - 1 ? "" : (<div className="border-b border-1 border-[#868686]" />)}
//               </>
//             ))}
//           </ul>
//         </div>

//         <div className="p-4 bg-gray-100 mt-6">
//           <h2 className="font-bold text-lg mb-2">Price</h2>
//           <ul>
//             {priceRanges.map((price, index, array) => (
//               <>
//                 <li
//                   key={index}
//                   className={`mb-3 mt-3 flex items-center cursor-pointer `}
//                   onClick={() => handlePriceClick(price.priceTag)}
//                 >
//                   <span className={`${selectedPrice === price.priceTag ? 'text-black' : 'text-[#868686]'
//                     }`}>{price.priceTag}</span>
//                 </li>
//                 {index === array.length - 1 ? "" : (<div className="border-b border-1 border-[#868686]" />)}
//               </>
//             ))}
//           </ul>
//         </div>


//         <div className="p-4 bg-gray-100 mt-6">
//           <h2 className="font-bold text-lg mb-2">Size</h2>
//           <ul>
//             {sizeOptions.map((size, index, array) => (
//               <>
//                 <li
//                   key={index}
//                   className={`mb-3 mt-3 flex items-center cursor-pointer `}
//                   onClick={() => handleSizeClick(size)}
//                 >
//                   <span className={`${selectedSize === size ? 'text-black' : 'text-[#868686]'
//                     }`}>{size}</span>
//                 </li>
//                 {index === array.length - 1 ? "" : (<div className="border-b border-1 border-[#868686]" />)}
//               </>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="flex-1 p-4">
//          <div className="flex justify-between items-center">
//           <span className='uppercase font-light text-5xl'>Sellers at <strong className="font-bold text-5xl">Merchlife</strong></span>
//           <div className="flex justify-center items-center gap-4">
//           <span className="font-semibold">
//             448 products </span>
//               <span>
//           <form className="max-w-sm mx-auto">
//   <select id="countries" className="bg-[#F3F3F3] h-14 text-gray-900 text-sm block w-full py-3 px-4 pl-2 focus:outline-none">
//     <option selected>Sort</option>
//     <option value="US">United States</option>
//     <option value="CA">Canada</option>
//     <option value="FR">France</option>
//     <option value="DE">Germany</option>
//   </select>

// </form>
//           </span>
//           </div>
//           </div>   

//       <div className="flex flex-wrap -mx-2 mt-8 ">
//       {productsList.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//       </div>
//     </div>

//     </>

//   );
// }

"use client";
import { useEffect, useState } from "react";
import { Raleway } from "next/font/google";
import SubHeaderCard from "../_components/SubHeaderCard";
import ProductCard from "../_components/common/ProductCard";
import Pegination from "../_components/Pegination";
import apiCall from "@/utils/api";
import { CardProduct } from "../storeMain/components/content/card-product";
const raleway = Raleway({ subsets: ["latin"] });

export default function Stores() {
  const [data, setData] = useState(null);
  // console.log(data);

  const [openCategory, setOpenCategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async () => {
    try {
      const result = await apiCall('GET', 'api/1/product/all');
      console.log('data', result);
      setDisplayedReviews(result.products)
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };
  useEffect(() => {

    getData();
    // fetch("http://localhost:4000/api/1/artist/all")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((responseData) => {
    //     console.log(responseData);
    //     setData(responseData.artist);
    //   });
  }, [])
  
  useEffect(()=>{
    console.log(displayedReviews);
    
  },[displayedReviews])

  const toggleSubMenu = (categoryName) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  // console.log("displayedReviews",displayedReviews);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const categories = [
    {
      name: '6 PM ears',
      subcategories: ['Sub 1', 'Sub 2', 'Sub 3']
    },
    {
      name: 'ADAM Krum',
      subcategories: ['Sub 1', 'Sub 2', 'Sub 3']
    },
    {
      name: '2A American Freedom',
      subcategories: ['Sub 1', 'Sub 2', 'Sub 3']
    },
  ];

  const colors = [
    { name: 'Red', colorCode: 'bg-red-500' },
    { name: 'Blue', colorCode: 'bg-blue-500' },
    { name: 'Green', colorCode: 'bg-green-500' },
    { name: 'Grey', colorCode: 'bg-gray-400' },
    { name: 'Yellow', colorCode: 'bg-yellow-500' },
    { name: 'Black', colorCode: 'bg-black' },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const priceRanges = [
    { priceTag: 'All' },
    { priceTag: '$0 - $20' },
    { priceTag: '$60 - $100' },
    { priceTag: '$100 - $150' },
  ];

  const sizeOptions = ["S", "M", "L", "XL", "XXL"];


  const handlePriceClick = (priceTag) => {
    setSelectedPrice(priceTag);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const store = [
    { text: 'HOME', href: '/' },
    { text: 'STORE', href: '#', icon: true }
  ];

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
  if(displayedReviews.length == 0){
    return <h1>Loading</h1>
  }
  return (
    <>
      <SubHeaderCard title="STORE" links={store} />
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
              className="bg-transparent px-3 py-4 flex-grow text-gray-600 focus:outline-none placeholder:text-xs"
            />
            <button className="ml-2 mt-[3px]">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#000" d="m20.746 18.607-3.572-3.361-.084-.123a.855.855 0 0 0-.59-.233.855.855 0 0 0-.591.233c-3.036 2.68-7.714 2.826-10.932.34-3.218-2.485-3.976-6.83-1.773-10.153C5.407 1.987 9.889.717 13.676 2.342c3.788 1.625 5.707 5.642 4.484 9.386a.758.758 0 0 0 .189.771.876.876 0 0 0 .804.232.823.823 0 0 0 .616-.54c1.462-4.442-.746-9.223-5.195-11.25-4.45-2.026-9.806-.69-12.603 3.144C-.827 7.92-.226 13.102 3.384 16.28c3.61 3.178 9.146 3.397 13.027.516l3.163 2.975a.875.875 0 0 0 1.181 0 .763.763 0 0 0 0-1.12l-.009-.043Z"></path>
                <path stroke="#000" strokeWidth={1.5} d="M6.45 12.5c1.04 1.167 4.054 2.8 7.795 0" />
              </svg>
            </button>
          </div>

          <div className="p-4 bg-gray-100 mt-6">
            <h2 className="font-bold text-lg mb-2">CATEGORIES</h2>
            <ul>
              {categories.map((category, index, array) => (
                <li key={index}>
                  <div
                    className="mb-3 mt-3 flex justify-between items-center text-gray-700 cursor-pointer"
                    onClick={() => toggleSubMenu(category.name)}
                  >
                    <span className={` ${openCategory === category.name ? "text-black" : "text-[#868686]"}`}>{category.name}</span>
                    <svg
                      className={`w-4 h-4 ${openCategory === category.name ? "text-black" : "text-[#868686]"} transform ${openCategory === category.name ? 'rotate-90' : ''}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {index === array.length - 1 ? "" : (<div className="border-b border-1 border-[#868686]" />)}
                  {openCategory === category.name && (
                    <ul className="ml-4 mt-2">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <li key={subIndex} className="mb-2 flex justify-between items-center text-gray-500">
                          <span>{subcategory}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-gray-100 mt-6">
            <h2 className="font-bold text-lg mb-2">COLOR</h2>
            <ul>
              {colors.map((color, index, array) => (
                <div key={index}>
                  <li className={`mb-3 mt-3 flex items-center cursor-pointer`} onClick={() => handleColorClick(color.name)}>
                    <div className={`w-4 h-4 rounded-full ${color.colorCode} mr-5`}></div>
                    <span className={`${selectedColor === color.name ? 'text-black' : 'text-[#868686]'}`}>{color.name}</span>
                  </li>
                  {index === array.length - 1 ? "" : (<div className="border-b border-1 border-[#868686]" />)}
                </div>
              ))}
            </ul>
          </div>

          <div className="p-4 bg-gray-100 mt-6">
            <h2 className="font-bold text-lg mb-2">Price</h2>
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
            <h2 className="font-bold text-lg mb-2">Size</h2>
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
              Sellers at <strong className="font-bold text-3xl md:text-5xl">Merchlife</strong>
            </span>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 md:mt-0">
              <span className="font-semibold">
                448 products
              </span>
              <span>
                <form className="max-w-sm mx-auto">
                  <select id="countries" className="bg-[#F3F3F3] h-12 md:h-14 text-gray-900 text-sm block w-full py-2 md:py-3 px-4 pl-2 focus:outline-none">
                    <option selected>Sort</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </form>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2 mt-8">
            {displayedReviews.map((product: any) => (
              <ProductCard key={product?.id} product={product} />
            ))}
            
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
                reviews={productsList} // Pass the list of products as reviews
                displayedReviews={displayedReviews}
                setDisplayedReviews={setDisplayedReviews}
                itemsPerPage={itemsPerPage} // Pass itemsPerPage state
                setItemsPerPage={setItemsPerPage}
                currentPage={currentPage} // Pass currentPage state
                setCurrentPage={setCurrentPage}
              />}
          </div>
        </div>

      </div>

    </>

  );
}

