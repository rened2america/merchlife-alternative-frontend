import React from 'react';

const ImageCardSection = ({ imageCardData }) => {
  return (
    <div className="bg-white p- md:p-24 xl:pr-96">
      {imageCardData.map((item, index) => (
        <a key={index} href="#" className="flex flex-col w-full bg-white p-4 md:p-8  md:flex-row">
          <img
            className="object-cover h-full w-full md:h-auto md:w-1/2 md:pr-8"
            src={item.path}
            alt=""
          />
          <div className="flex flex-col p-4 md:p-0 md:w-1/2 leading-normal">
            <h5 className="mb-6 xl:mt-24 md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-normal text-gray-900 dark:text-white">
              {item.title}
            </h5>
            <p className="text-sm  xl:mb-6 md:text-base lg:text-lg xl:text-xl m-0 p-0 font-normal text-gray-700 dark:text-gray-400 leading-normal">
              {item.description1}
            </p>
            {item.description2 ? 
            <p className="text-sm xl:mb-6  md:text-base lg:text-lg xl:text-xl m-0 p-0 font-normal text-gray-700 dark:text-gray-400 leading-normal">
              {item.description2}
            </p>
            :''}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ImageCardSection;


