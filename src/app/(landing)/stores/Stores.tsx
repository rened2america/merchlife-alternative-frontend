"use client";
import { useEffect, useRef, useState } from "react";
import { Raleway } from "next/font/google";
import SubHeaderCard from "../_components/SubHeaderCard";
import Pegination from "../_components/Pegination";
import apiCall from "@/utils/api";
import { useSearchParams } from "next/navigation";
import StoreCard from "../_components/common/StoreCard";
import BeatLoader from "react-spinners/BeatLoader";
import { ArrowRightIcon } from "@radix-ui/react-icons";
const raleway = Raleway({ subsets: ["latin"] });

export default function Stores() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchWord, setSearchWord] = useState<string | null>(null);
  const [artists, setArtists] = useState<any>([]);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [apiQuery, setquery] = useState("");
  const [productCount, setProductCount] = useState(0);
  const [loading, setLoading] = useState(false)
  const refSearchInput = useRef<HTMLInputElement>(null)

  const getData = async () => {
    try {
      setLoading(true);
      const { message, artist, count } = await apiCall('GET', 'api/1/artist/all');
      setArtists(artist);
      setProductCount(count);
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    console.log(artists);

  }, [artists])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className={`flex flex-col lg:flex-row gap-4 py-10 ${raleway.className}`}>
        <button className="lg:hidden mb-4" onClick={toggleSidebar}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <div className="flex-1 p-4 md:mx-24 mx-2">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <span className="uppercase font-light text-3xl md:text-5xl">
              Stores at <strong className="font-bold text-3xl md:text-5xl">Merchlife</strong>
            </span>
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
          </div>

          <div className="flex items-center bg-gray-100 text-black mt-6 gap-2 p-4 w-fit hover:bg-gray-300">
              <a className="flex items-center gap-2" href="../product/catalog">Visit Product Catalog <ArrowRightIcon/></a>
          </div>
          <div className="flex justify-center sm:justify-between flex-wrap mt-8">
            {artists &&
              (loading ?
                <div className="flex items-center m-auto p-20">
                  <BeatLoader color="white" />
                </div>
                :
                artists.map((artist: any) => (
                  <StoreCard key={artist?.id} name={artist.name} bannerUrl={artist.banner} />
                ))
              )}

            {/* <CardProduct
                name="Test"
                value={1}
                FrontImage="/2A/2AAfWhite.jpg"
                BackImage="/2A/2AAfWhiteB.jpg"
                redirect="/test"
              /> */}
          </div>
          <div>
            {itemsPerPage && currentPage &&
              <Pegination
                reviews={artists} // Pass the list of products as reviews
                displayedReviews={artists}
                setDisplayedReviews={setArtists}
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