import React from 'react'

type links = {
    text: string,
    herf: string,
    icon: boolean
}

const SubHeaderCard = ({ title, links }) => {
    return (
        <div>
            <div className="flex h-96 flex-col items-center justify-center bg-black p-4 text-center">
            <h1 className="tracking-normal font-bold mb-8 text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl m-0 p-0 dark:text-white text-zinc-50 leading-normal">
                    {title}
                </h1>
                <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        {links.map((link, index) => (
                            <li key={index} className="inline-flex items-center">
                                {link.icon && (
                                    <svg
                                        className="mx-1 block h-3 w-3 text-zinc-50 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 9 4-4-4-4"
                                        />
                                    </svg>
                                )}
                                <a
                                    href={link.href}
                                    className="inline-flex items-center text-sm font-medium text-zinc-50 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ol>
                </p>
            </div>
        </div>
    )
}

export default SubHeaderCard