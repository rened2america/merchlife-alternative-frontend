import React from 'react'

const TImeline = ({ title, timelineData }) => {
    return (
        <div>
            <div className="bg-gray-200 p-24 text-center md:p-24 mb-[200px]">
                <h1 className="mb-16 text-6xl font-bold text-black">{title}</h1>
                <div className="relative w-full px-2 py-5 text-sm font-semibold text-gray-700 antialiased md:mx-auto md:max-w-4xl md:px-0">
                    <div className="absolute left-1/2 -translate-x-1/2 transform md:block top-44 custom-height">
                        <div className="h-full w-1 border-l-2 border-dashed border-black"></div>
                    </div>

                    {timelineData.map((item, index) => (
                        <div key={index}>
                            {index !== 0 && (
                                <div className="absolute left-1/2 hidden transform -translate-x-1/2 md:block">
                                    <div className="h-full w-0.5 bg-black"></div>
                                </div>
                            )}

                            <div className="mt-6 flex flex-col items-center md:mb-12 md:flex-row relative customFIrst">
                                <div className={`mx-auto flex w-full items-center justify-${index % 2 === 0 ? 'start' : 'end'}`}>
                                    <div className={`w-full md:w-2/4 ${index % 2 === 0 ? 'md:pr-24' : 'md:pl-24'}`}>
                                        <div className="relative rounded border border-gray-400 bg-transparent p-4 text-sm text-gray-800 text-start shadow cutomeTwo">
                                            <h1 className="py-2 text-lg font-bold text-black">{item.title}</h1>
                                            <p>{item.content}</p>
                                            <div className={`absolute ${index % 2 === 0 ? '-right-4' : '-left-4'} top-1/2 h-7 w-7 -translate-y-1/2 transform rounded-full border-4 border-white bg-white `}>
                                                <div className={`absolute ${index % 2 === 0 ? '-right-[-1px]' : '-left-[-3px]'} top-1/2 h-4 w-4 -translate-y-1/2 transform rounded-full bg-black`}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`custom-before absolute left-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-2 border-dashed border-black text-white ${index % 2 === 0 ? 'before:left-[-30px]' : 'before:right-[-31px]'} before:border-2 before:border-dashed before:border-black md:translate-y-0`}>
                                    <div className="absolute left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-4 transform items-center justify-center rounded-full border-4 border-white bg-white sm:translate-y-0 csustomeThree">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                                            {index + 1}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TImeline