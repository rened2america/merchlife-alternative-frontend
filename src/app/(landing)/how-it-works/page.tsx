import React from "react";
import SubHeaderCard from "../_components/SubHeaderCard";
import ImageCardSection from "../_components/ImageCardSection";
import TImeline from "../_components/TImeline";
import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });

const HowItWorks = () => {

    const howItWorksLinks = [
        { text: 'HOME', href: '/' },
        { text: 'HOW-IT-WORKS', href: '#', icon: true }
    ];

    const timelineData = [
        {
            title: "Lorem ipsum dolor sit amet",
            content: "Curabitur posuere risus pretium varius feugiat. Maecenas condimentum tellus a nunc luctus vulputate. Cras lobortis congue diam, sit amet ornare leo eleifend at. Nulla et hendrerit felis. Aliquam gravida turpis a feugiat finibus."
        },
        {
            title: "Fusce venenatis urna",
            content: "Morbi at lorem ligula. Praesent quis tincidunt nibh. Donec rutrum mauris quis felis accumsan, sed suscipit erat laoreet. Phasellus ultrices lacus dolor, at semper ex elementum non. Vestibulum mollis dolor vel facilisis porta. Vestibulum finibus egestas lectus, eu mollis tellus viverra nec. Sed nec ante eu tortor fringilla tempus in blandit sapien."
        },
        {
            title: "Quisque nibh massa",
            content: "Sed efficitur nisi at augue gravida sodales. Ut nec mi tristique, sollicitudin quam in, aliquam augue. Quisque nibh massa, tempus ut mi a, faucibus dapibus nisl. Aliquam fermentum risus lacus, at lobortis metus vehicula sit amet. Nulla condimentum vitae lectus sed tristique. Ut imperdiet dictum arcu."
        },
        {
            title: "Sed efficitur nisi",
            content: "Fusce venenatis urna eget augue feugiat ornare. Sed varius, dui non mattis vehicula, ipsum ante faucibus velit, sit amet aliquam lacus ipsum sed nulla. Ut porta lectus eget cursus consectetur. Suspendisse posuere finibus orci, sed sodales odio tincidunt in."
        }, 
    ];

    const ImageCardData = [
        {
            path : './works1.svg',
            title : ' Lorem Ipsum is simply dummy text',
            description1 : 'Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021.',
            description2 : 'Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021.',
        },
    ]

    return (
        <>
        <div className={`${raleway.className}`}>
            <SubHeaderCard title="HOW IT WORKS" links={howItWorksLinks} />
            <div className="flex flex-col p-4 leading-normal text-center bg-white w-full mb-5">
            <h5 className="mb-6 xl:mt-24 md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-normal text-gray-900">
              title
            </h5>
            <p className="text-sm  xl:mb-6 md:text-base lg:text-lg xl:text-xl m-0 p-0 font-normal text-gray-700">
              description1
            </p>
            
          </div>
            {/* <ImageCardSection imageCardData = {ImageCardData}/> */}
            {/* <TImeline title="Lorem Ipsem Step" timelineData={timelineData} /> */}
          </div>
        </>
    
    );
};

export default HowItWorks;