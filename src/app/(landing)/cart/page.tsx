"use client";
// import useStore from "../state/store";
import useStore from "@/state/store";
import { Amex } from "@/components/ui/components/icons/Amex";
import Breadcrumb from "../_components/Breadcrumb";
import { env } from "@/env";
export default function Creators() {
  const { products, removeFromCart, updateQuantitiy } = useStore((state:any) => {
    //@ts-ignore

    return {
      products: state.products,
      removeFromCart: state.removeFromCart,
      updateQuantitiy: state.updateQuantitiy,
    };
  });

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/cart", label: "Cart" },
  ];
  // const {getState,} = useStore
  // const stateZod:any = getState()

  const product = [
    {
      id: 1,
      name: "Adam Krum Classic T-shirt Grey",
      price: 24.5,
      quantity: 1,
      size: "S",
      image: "/2A/2AAfWhite.jpg", // replace with actual image path
    },
    {
      id: 2,
      name: "6 PMers Black T-shirt",
      price: 24.5,
      quantity: 1,
      size: "2XL",
      image: "/2A/2AAfWhite.jpg", // replace with actual image path
    },
  ];

  const totalPrice = () => {
    let sum = 0;
    products.map((item) => (sum += Number(item?.price) * Number(item?.quantity)));
    return sum.toFixed(2);
  };

  console.log('products in cart: ',products)
  
  const onClickCheckout = async()=>{
    const getPayment = await fetch(
      env.NEXT_PUBLIC_BACKEND_URL + "/api/1/product/payment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          products: products,
        }),
      }
    );
    const getPaymentParse = await getPayment.json();
    console.log(getPaymentParse)
    window.location.replace(getPaymentParse.session.url);
  }

  // useEffect(()=>{

  //   products.addProduct(
  //     {name: "Zudio White/black tShirt",
  //       price: 25.5,
  //       id:1,
  //       quantity: 3,
  //       size: "M",
  //       url: "/2A/2AAfWhite.jpg"})
  //     },[])
  return (
    <div className="mb-[20px] lg:mb-[250px]">
      <Breadcrumb items={breadcrumbItems} />

      <div className="p-5">
        <div className="flex flex-col justify-center gap-4 lg:flex-row">
          <div className="flex w-full flex-col">
            <div className="relative flex h-24 w-full flex-col justify-start bg-[#EBFBEE] p-6">
              <div className="mb-2 flex items-center space-x-2">
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 29 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.102 21.521V10.3645C27.1015 9.87538 26.9724 9.395 26.7277 8.97155C26.4829 8.5481 26.1311 8.19646 25.7075 7.9519L15.9456 2.37367C15.5216 2.12887 15.0406 2 14.551 2C14.0614 2 13.5805 2.12887 13.1565 2.37367L3.39456 7.9519C2.97098 8.19646 2.61916 8.5481 2.37439 8.97155C2.12961 9.395 2.0005 9.87538 2 10.3645V21.521C2.0005 22.0101 2.12961 22.4904 2.37439 22.9139C2.61916 23.3373 2.97098 23.689 3.39456 23.9335L13.1565 29.5118C13.5805 29.7566 14.0614 29.8854 14.551 29.8854C15.0406 29.8854 15.5216 29.7566 15.9456 29.5118L25.7075 23.9335C26.1311 23.689 26.4829 23.3373 26.7277 22.9139C26.9724 22.4904 27.1015 22.0101 27.102 21.521Z"
                    stroke="#3BB150"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.37598 8.91431L14.5505 15.9568L26.725 8.91431"
                    stroke="#3BB150"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5508 30V15.9429"
                    stroke="#3BB150"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-gray-800">Your order qualifies for free shipping!</span>
              </div>
              <div className="w-full rounded border-b-4 border-green-700"></div>
            </div>
            <div className="mt-4 flex w-full flex-col overflow-x-auto">
              <table className="min-w-full">
                <thead className="border-b-8 border-b-white">
                  <tr className="bg-[#F3F3F3]">
                    <th className="px-5 py-4"></th>
                    <th className="px-5 py-4 text-start">
                      <div className="border-r-gray border-r-2 text-stone-950">
                        Products({products.length})
                      </div>
                    </th>
                    <th className="px-5 py-4 text-left">
                      <div className="border-r-gray border-r-2 text-stone-950">Price</div>
                    </th>
                    <th className="px-5 py-4 text-left">
                      <div className="border-r-gray border-r-2 text-stone-950">Quantity</div>
                    </th>
                    <th className="px-5 py-4 text-left">
                      <div className="text-stone-950">Total</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product?.id} className="border-b-8 border-b-white bg-[#F3F3F3]">
                      <td className="px-5 py-4">
                        <div className="flex h-24  items-center">
                          <button className="" onClick={() => {removeFromCart(product?.name,product?.size,product?.url);
                          }}>
                            <svg
                              width="47"
                              height="47"
                              viewBox="0 0 47 47"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect opacity="0.1" width="47" height="47" fill="black" />
                              <g clip-path="url(#clip0_50_759)">
                                <path
                                  d="M31.7561 16.09H29.1309C28.9343 15.1343 28.4143 14.2755 27.6584 13.6585C26.9026 13.0415 25.9571 12.7039 24.9813 12.7026L23.2876 12.7026C22.3119 12.7039 21.3664 13.0415 20.6105 13.6585C19.8547 14.2755 19.3346 15.1343 19.1381 16.09H16.5129C16.2883 16.09 16.0729 16.1792 15.9141 16.3381C15.7552 16.4969 15.666 16.7123 15.666 16.9369C15.666 17.1615 15.7552 17.3769 15.9141 17.5357C16.0729 17.6945 16.2883 17.7837 16.5129 17.7837H17.3597V28.7927C17.3611 29.9153 17.8076 30.9915 18.6014 31.7853C19.3952 32.5791 20.4714 33.0256 21.5939 33.027H26.675C27.7976 33.0256 28.8738 32.5791 29.6676 31.7853C30.4614 30.9915 30.9079 29.9153 30.9093 28.7927V17.7837H31.7561C31.9807 17.7837 32.1961 17.6945 32.3549 17.5357C32.5137 17.3769 32.603 17.1615 32.603 16.9369C32.603 16.7123 32.5137 16.4969 32.3549 16.3381C32.1961 16.1792 31.9807 16.09 31.7561 16.09ZM23.2876 14.3963H24.9813C25.5066 14.397 26.0188 14.5601 26.4477 14.8633C26.8767 15.1665 27.2013 15.595 27.3771 16.09H20.8919C21.0677 15.595 21.3923 15.1665 21.8212 14.8633C22.2501 14.5601 22.7624 14.397 23.2876 14.3963ZM29.2156 28.7927C29.2156 29.4665 28.9479 30.1127 28.4715 30.5892C27.995 31.0656 27.3488 31.3333 26.675 31.3333H21.5939C20.9202 31.3333 20.274 31.0656 19.7975 30.5892C19.3211 30.1127 19.0534 29.4665 19.0534 28.7927V17.7837H29.2156V28.7927Z"
                                  fill="black"
                                />
                                <path
                                  d="M22.4416 27.9459C22.6662 27.9459 22.8816 27.8567 23.0404 27.6979C23.1992 27.5391 23.2884 27.3237 23.2884 27.0991V22.018C23.2884 21.7934 23.1992 21.578 23.0404 21.4192C22.8816 21.2604 22.6662 21.1711 22.4416 21.1711C22.217 21.1711 22.0016 21.2604 21.8428 21.4192C21.6839 21.578 21.5947 21.7934 21.5947 22.018V27.0991C21.5947 27.3237 21.6839 27.5391 21.8428 27.6979C22.0016 27.8567 22.217 27.9459 22.4416 27.9459Z"
                                  fill="black"
                                />
                                <path
                                  d="M25.8283 27.9459C26.0529 27.9459 26.2683 27.8567 26.4271 27.6979C26.5859 27.5391 26.6751 27.3237 26.6751 27.0991V22.018C26.6751 21.7934 26.5859 21.578 26.4271 21.4192C26.2683 21.2604 26.0529 21.1711 25.8283 21.1711C25.6037 21.1711 25.3883 21.2604 25.2295 21.4192C25.0707 21.578 24.9814 21.7934 24.9814 22.018V27.0991C24.9814 27.3237 25.0707 27.5391 25.2295 27.6979C25.3883 27.8567 25.6037 27.9459 25.8283 27.9459Z"
                                  fill="black"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_50_759">
                                  <rect
                                    width="20.3243"
                                    height="20.3243"
                                    fill="white"
                                    transform="translate(13.9727 12.7026)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="border-r-gray md:flex h-30 md:h-24 items-center border-r-2 p-2">
                          <img
                            src={product?.url}
                            alt={product?.name}
                            className="border-1 h-24 w-24 border border-gray-400 object-cover"
                          />
                          <div className="md:ml-4 flex flex-col">
                            <span className="text-stone-950">{product?.name}</span>
                            <span className="text-sm text-gray-600">Size: {product?.size}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="border-r-gray flex h-24 items-center border-r-2 p-2 px-6 py-8 text-gray-600">
                          ${product?.price}
                        </div>
                      </td>
                      <td className="px-6 py-8">
                        <div className="border-r-gray flex h-24 items-center border-r-2 p-2 px-6 py-8">
                          <select
                            value={product?.quantity}
                            onChange={(e) => updateQuantitiy(product?.name, e.target.value)}
                            className="rounded-full border border-gray-400 bg-[#F3F3F3] px-3 py-1 text-gray-600 focus:outline-none"
                          >
                            {[...Array(10).keys()].map((num) => (
                              <option key={num + 1} value={num + 1}>
                                {num + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                      </td>
                      <td className="px-6 py-8 text-gray-600">
                        ${(product?.price * product?.quantity)?.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="h-72 w-full bg-[#F3F3F3] p-8 lg:w-1/3">
            <div className="mb-4 flex justify-between">
              <span className="text-lg font-semibold text-gray-600">
                Your Cart({products.length})
              </span>
              <span className="text-lg text-gray-600">{totalPrice()}</span>
            </div>
            <div className="mb-4 flex flex-col items-end">
              <button className="mb-2 h-14 w-full bg-black px-4 py-2 font-bold text-white" onClick={()=>onClickCheckout()}>
                CHECKOUT
              </button>
              <button className="h-14 w-full border border-black px-4 py-2 font-bold text-stone-950">
                UPDATE CART
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-1">
              <button>
                <Amex />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}