// import Image from "next/image";
// import { Header } from "../storeMain/components/header";
// import { Raleway } from "next/font/google";

// // If loading a variable font, you don't need to specify the font weight
// const raleway = Raleway({ subsets: ["latin"] });
// const StoreMain = () => {
//   return (
//     <div className={raleway.className}>
//       <Header title="CATEGORIES" subtitle="HOME > CATEGORIES" />
//       <div
//         style={{
//           width: "100%",
//           padding: "72px 32px",
//           backgroundColor: "white",
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr 1fr",
//         }}
//       >
//         <div
//           style={{
//             position: "relative",
//           }}
//         >
//           <Image width={400} height={500} src={"/2A/2AAfWhite.jpg"} alt="back black" />
//           <div
//             style={{
//               position: "absolute",
//               backgroundColor: "black",
//               color: "white",
//               right: "30%",
//               top: " 95%",
//               width: "200px",
//               height: "50px",
//               textAlign: "center",
//               display: "grid",
//               alignContent: "center",
//             }}
//           >
//             6 PM ears
//           </div>
//         </div>
//         <div
//           style={{
//             position: "relative",
//           }}
//         >
//           <Image width={400} height={500} src={"/2A/2AAfWhite.jpg"} alt="back black" />
//           <div
//             style={{
//               position: "absolute",
//               backgroundColor: "black",
//               color: "white",
//               right: "30%",
//               top: " 95%",
//               width: "200px",
//               height: "50px",
//               textAlign: "center",
//               display: "grid",
//               alignContent: "center",
//             }}
//           >
//             6 PM ears
//           </div>
//         </div>
//         <div
//           style={{
//             position: "relative",
//           }}
//         >
//           <Image width={400} height={500} src={"/2A/2AAfWhite.jpg"} alt="back black" />
//           <div
//             style={{
//               position: "absolute",
//               backgroundColor: "black",
//               color: "white",
//               right: "30%",
//               top: " 95%",
//               width: "200px",
//               height: "50px",
//               textAlign: "center",
//               display: "grid",
//               alignContent: "center",
//             }}
//           >
//             6 PM ears
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StoreMain;
import React from 'react'
import SubHeaderCard from '../_components/SubHeaderCard';

interface Link {
    text: string;
    href: string;
    icon?: boolean;
}



const Categories = () => {


    const categories: Link[] = [
        { text: 'Home', href: '/' },
        { text: 'Categories', href: '#', icon: true },
    ];

    const tshirts = [
        { id: 1, src: '/2A/2AAfWhite.jpg', label: '6 PM ears' },
        { id: 2, src: '/2A/2AAfWhite.jpg', label: '2A American Freedom' },
        { id: 3, src: '/2A/2AAfWhite.jpg', label: 'ADAM KRUM' },
        { id: 4, src: '/2A/2AAfWhite.jpg', label: '2A American Freedom' },
        { id: 5, src: '/2A/2AAfWhite.jpg', label: 'ADAM KRUM' },
        { id: 6, src: '/2A/2AAfWhite.jpg', label: '6 PM ears' },
    ];



    return (
        <>
            <SubHeaderCard title="Categories" links={categories} />

            <div className="container mx-auto p-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {tshirts?.map(tshirt => (
                        <div key={tshirt.id} className="flex flex-col p-4 items-center space-y-[-40px]">
                            <img src={tshirt.src} alt={tshirt.label} className="mb-4 w-full h-auto" />
                            <button type="button" className="py-2.5 w-60 text-sm font-medium text-white focus:outline-none bg-black">{tshirt.label}</button>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Categories