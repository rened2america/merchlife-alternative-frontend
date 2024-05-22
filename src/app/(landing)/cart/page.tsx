// "use client";
// import { Avatar, Chip, Divider, Input, Select, SelectItem, User } from "@nextui-org/react";
// import Link from "next/link";
// import {
//   // Card,
//   Button,
// } from "@nextui-org/react";
// // import useStore from "../state/store";
// import useStore from "@/state/store";
// import { CardContent, Card } from "@/components/ui/card";
// export default function Creators() {
//   const { products, removeFromCart } = useStore((state) => {
//     //@ts-ignore

//     return { products: state.products, removeFromCart: state.removeFromCart };
//   });
//   return (
//     <main
//       style={{
//         backgroundColor: "#171717",
//         fontFamily: "'Inter',sans-serif",
//       }}
//       className="h-screen"
//     >
//       <div className="grid justify-center">
//         {products.map((product: any) => {
//           return (
//             <>
//               <Card>
//                 <div className="flex w-96 justify-between gap-2 p-4">
//                   <h2>{product.name}</h2>
//                   <div>Size: {product.size}</div>
//                   <div className="flex flex-col items-end gap-1">
//                     <span className="text-tiny text-default-500">Quantity</span>
//                     {product.quantity}
//                   </div>
//                   <button color="danger" onClick={() => removeFromCart(product.name)}>
//                     Delete
//                   </button>
//                 </div>
//               </Card>
//               <Divider className="my-4" />
//             </>
//           );
//         })}
//         <button
//           onClick={async () => {
//             const response = await fetch("api/checkout/", {
//               method: "post",
//               body: JSON.stringify({
//                 itineraryId: "ok",
//                 products: products,
//               }),
//             });
//             const checkout = await response.json();
//             const checkoutLink = checkout.result.url;
//             window.location.href = checkoutLink;
//           }}
//         >
//           Buy
//         </button>
//       </div>
//     </main>
//   );
// }

"use client";
import { Avatar, Chip, Divider, Input, Select, SelectItem, User } from "@nextui-org/react";
import Link from "next/link";
import {
  // Card,
  Button,
} from "@nextui-org/react";
// import useStore from "../state/store";
import useStore from "@/state/store";
import { CardContent, Card } from "@/components/ui/card";
import Breadcrumb from "../_components/Breadcrumb";

export default function Creators() {
  const { products, removeFromCart } = useStore((state) => {
    //@ts-ignore

    return { products: state.products, removeFromCart: state.removeFromCart };
  });


  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/cart", label: "Cart" },
  ];

  const product = [
    {
      id: 1,
      name: 'Adam Krum Classic T-shirt Grey',
      price: 24.5,
      quantity: 2,
      size: 'S',
      image: '/adam-krum-tshirt.jpg', // replace with actual image path
    },
    {
      id: 2,
      name: '6 PMers Black T-shirt',
      price: 24.5,
      quantity: 1,
      size: '2XL',
      image: '/6pmers-tshirt.jpg', // replace with actual image path
    },
  ];

  return (
    <main
      style={{
        fontFamily: "'Inter',sans-serif",
      }}
      className="h-screen"
    >
      <Breadcrumb items={breadcrumbItems} />

      <div className="p-5">
        <div className="flex justify-center gap-4">
          <div className="flex flex-col w-full">
            <div className="bg-[#EBFBEE] p-6 w-full flex flex-col h-24 relative justify-start">


              <div className="flex items-center space-x-2 mb-2">
                <svg width="24" height="28" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.102 21.521V10.3645C27.1015 9.87538 26.9724 9.395 26.7277 8.97155C26.4829 8.5481 26.1311 8.19646 25.7075 7.9519L15.9456 2.37367C15.5216 2.12887 15.0406 2 14.551 2C14.0614 2 13.5805 2.12887 13.1565 2.37367L3.39456 7.9519C2.97098 8.19646 2.61916 8.5481 2.37439 8.97155C2.12961 9.395 2.0005 9.87538 2 10.3645V21.521C2.0005 22.0101 2.12961 22.4904 2.37439 22.9139C2.61916 23.3373 2.97098 23.689 3.39456 23.9335L13.1565 29.5118C13.5805 29.7566 14.0614 29.8854 14.551 29.8854C15.0406 29.8854 15.5216 29.7566 15.9456 29.5118L25.7075 23.9335C26.1311 23.689 26.4829 23.3373 26.7277 22.9139C26.9724 22.4904 27.1015 22.0101 27.102 21.521Z" stroke="#3BB150" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2.37598 8.91431L14.5505 15.9568L26.725 8.91431" stroke="#3BB150" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M14.5508 30V15.9429" stroke="#3BB150" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <p className="">Your order qualifies for free shipping!</p>
              </div>
              <div className="border-b-4 border-green-700 w-full rounded"></div>
            </div>
            <div className="flex flex-col w-full mt-4">

              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-[#F3F3F3]">
                    <th className="py-5 px-4 text-center">Products({products.length + 1})</th>
                    <th className="py-5 px-4 text-left">Price</th>
                    <th className="py-5 px-4 text-left">Quantity</th>
                    <th className="py-5 px-4 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((product) => (
                    <tr key={product.id} className="bg-[#F3F3F3] border-b border-8 py-0 border-white">
                      <td className="py-8 px-6 flex items-center">
                        <button className="mr-4">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.136 21H7.864a2 2 0 01-1.997-1.858L5 7m5 4v6m4-6v6M1 7h22"></path>
                          </svg>
                        </button>
                        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
                        <div className="ml-4">
                          <p>{product.name}</p>
                          <p className="text-sm text-gray-500">Size: {product.size}</p>
                        </div>
                      </td>
                      <td className="py-8 px-6">${product.price.toFixed(2)}</td>
                      <td className="py-8 px-6">
                        <select value={product.quantity} className="border rounded px-2 py-1">
                          {[...Array(10).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                              {num + 1}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="py-8 px-6">${(product.price * product.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>
          <div className="w-1/4 p-4">
            <div className="flex flex-col items-end mb-4">
              <p className="text-lg">Your Cart(2): $73.5</p>
            </div>
            <div className="flex flex-col items-end mb-4">
              <button className="bg-black text-white py-2 px-4 w-full mb-2">CHECKOUT</button>
              <button className="border border-black py-2 px-4 w-full">UPDATE CART</button>
            </div>
            <div className="flex justify-center">
              <img className="h-8" src="payment-methods.png" alt="Payment Methods" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
