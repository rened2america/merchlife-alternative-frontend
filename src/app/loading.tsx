"use client"
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
  const [loading, setloading] = useState(true)
  return (
    // <div
    //   role="status"
    //   className="h-screen w-full animate-pulse space-y-4 divide-y divide-gray-200 rounded border border-gray-200 p-4 shadow dark:divide-gray-700 dark:border-gray-700 md:p-6"
    // >
    //   <div className="flex items-center justify-between">
    //     <div>
    //       <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
    //       <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    //     </div>
    //     <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
    //   </div>
    //   <div className="flex items-center justify-between pt-4">
    //     <div>
    //       <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
    //       <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    //     </div>
    //     <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
    //   </div>
    //   <div className="flex items-center justify-between pt-4">
    //     <div>
    //       <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
    //       <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    //     </div>
    //     <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
    //   </div>
    //   <div className="flex items-center justify-between pt-4">
    //     <div>
    //       <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
    //       <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    //     </div>
    //     <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
    //   </div>
    //   <div className="flex items-center justify-between pt-4">
    //     <div>
    //       <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
    //       <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    //     </div>
    //     <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
    //   </div>
    //   <div className="flex items-center justify-between">
    //     <div>
    //       <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
    //       <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    //     </div>
    //     <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
    //   </div>
    //   <div className="flex items-center justify-between pt-4">
    //     <div>
    //       <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
    //       <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    //     </div>
    //     <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
    //   </div>
    //   <div className="flex items-center justify-between pt-4">
    //     <div>
    //       <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
    //       <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    //     </div>
    //     <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
    //   </div>
    //   <div className="flex items-center justify-between pt-4">
    //     <div>
    //       <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
    //       <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    //     </div>
    //     <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
    //   </div>
    //   <div className="flex items-center justify-between pt-4">
    //     <div>
    //       <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
    //       <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    //     </div>
    //     <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
    //   </div>
    // </div>
    <div className="h-screen flex justify-center items-center">
      <BeatLoader color="white" loading={loading}/>
    </div>
  );
}
