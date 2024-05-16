import React from "react";
import SubHeaderCard from "../_components/common/SubHeaderCard";
import ImageCardSection from "../_components/common/ImageCardSection";
import { title } from "process";

export default function About() {
  const howItWorksLinks = [
    { text: "Home", href: "/" },
    { text: "ABOUTUS", href: "/about", icon: true },
  ];

  const ImageCardData = [
    {
      path: "./about.svg",
      title: " Lorem Ipsum is simply dummy text",
      description1: `Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021.
            Here are the biggest enterprise technology acquisitions of 2021  Here are the biggest enterprise technology acquisitions of 2021`,
      // description2 : 'Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021.',
    },
  ];

  const dataOfCard = [
    {
      imageSrc :'./about4.svg',
      title : 'With supporting text ',
      description: `With supporting text below as a natural lead-in to additional content With supporting text below as natural lead-in to additional
      content With supporting text below as a natural lead-in to additional.`,
      link: '#'
    },
    {
      imageSrc :'./about4.svg',
      title : 'With supporting text ',
      description: `With supporting text below as a natural lead-in to additional content With supporting text below as natural lead-in to additional
      content With supporting text below as a natural lead-in to additional.`,
      link: '#'
    },
    {
      imageSrc :'./about4.svg',
      title : 'With supporting text ',
      description: `With supporting text below as a natural lead-in to additional content With supporting text below as natural lead-in to additional
      content With supporting text below as a natural lead-in to additional.`,
      link: '#'
    }
  ]
  return (
  <>
      <SubHeaderCard title="ABOUT US" links={howItWorksLinks} />
      <ImageCardSection imageCardData={ImageCardData} />
      <div className="xl:h-[744px] bg-white">
  <div className="bg-black xl:h-[544px] justify-center text-center align-center space-x-8 sm:space-x-8 sm:pr-8 md:pr-0 lg:pr-">
  <div className="text-white xl:text-6xl font-bold xl:pt-20 xl:pb-12 lg:pt-10 lg:pb-8 md:pt-8 md:pb-6 sm:pt-6 sm:pb-6 leading-normal">
  Enterprise technology acquisitions
</div>

    <div className="flex flex-wrap justify-center items-center space-x-8 sm:space-x-8">
      {dataOfCard.map((items, index) => (
        <div className="flex transform transition duration-300 hover:scale-105 shadow-lg flex-row w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 mb-8 rounded-lg bg-white 
        shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface" key={index}>
          <div className="p-8 ">
            <h5 className="mb-4 flex justify-center text-center font-medium leading-tight">
              <img src={items.imageSrc} alt={items.title} />
            </h5>
            <p className="mb-4 font-bold text-[22px] leading-6 uppercase">
              {items.title}
            </p>
            <p className="mb-4 font-normal text-lg leading-8">
              {items.description}
            </p>
            <a
              href={items.link}
              className="inline-block underline text-lg px-6 pb-4 pt-2.5 font-medium uppercase leading-8 text-black"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              LEARN MORE
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



    
  
<div className="container pt-24 pb-24">
<div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2">
    <div className="">
      <h5
        className="md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-normal text-gray-900 dark:text-white">
        Special title treatment
      </h5>
      <p className="text-sm xl:mt-6  xl:mb-6 md:text-base lg:text-lg xl:text-lg m-0 p-0 font-normal text-gray-700 dark:text-gray-400 leading-normal">
      Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021.
      </p>
      <p className="mb-4 text-base">
      <img
            className="object-cover h-full w-full md:h-auto  md:pr-8 transform transition duration-300 hover:scale-105"
            src='about2.svg'
            alt=""
          />
      </p>
      
    </div>
    <div className="">
    <p className="mb-4 text-base">
      <img 
            className="object-cover h-full w-full md:h-auto  md:pr-8 transform transition duration-300 hover:scale-105"
            src='about3.svg'
            alt=""
          />
      </p>
      <h5
        className="md:text-3xl lg:text-4xl  xl:text-5xl font-bold tracking-tight leading-normal text-gray-900 dark:text-white">
        Special title treatment
      </h5>
      <p className="text-sm  xl:mb-6 xl:mt-6 md:text-base lg:text-lg xl:text-lg m-0 p-0 font-normal text-gray-700 dark:text-gray-400 leading-normal">
      Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021. Here are the biggest enterprise technology acquisitions of 2021.
            </p>

  </div>
</div>
</div>



      <div className="card pb-4 md:pb-8 lg:pb-12 xl:pb-28 pt-4 md:pt-8 lg:pt-12 xl:pt-28">
    <div className="relative h-[360px] sm:h-[300px] md:h-[360px] lg:h-[480px] xl:h-[720px] w-full" id="home">
        <div className="absolute inset-0">
            <img src="./about1.png" alt="Background Image" className="h-full w-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full md:w-2/3 text-center md:text-left">
                <h1 className="text-base md:text-lg lg:text-xl xl:text-3xl font-bold leading-normal text-white">Bappa Flour mill Bappa Bappa</h1>
                <p className="mb-1 mt-1 md:mb-2 md:mt-2 lg:mb-4 lg:mt-4 xl:mb-8 xl:mt-8 text-xs md:text-sm lg:text-base xl:text-lg font-thin leading-7 text-white">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
                </p>

                <p className="mb-1 mt-1 md:mb-2 md:mt-2 lg:mb-4 lg:mt-4 xl:mb-8 xl:mt-8 text-xs md:text-sm lg:text-base xl:text-lg font-thin leading-7 text-white">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.
                </p>
            </div>
        </div>
    </div>
</div>
  </>
  );
}

