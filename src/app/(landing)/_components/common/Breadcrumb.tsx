import React from 'react';

const Breadcrumb = ({ items }) => {
    return (
        <div className='p-5'>
            <div className="bg-[#F3F3F3] p-4">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        {items.map((item, index) => (
                            <li key={index} className="inline-flex items-center">
                                <div className="flex items-center">
                                    {index !== 0 && (
                                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                    )}
                                    {item.href ? (
                                        <a href={item.href} className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">{item.label}</a>
                                    ) : (
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{item.label}</span>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default Breadcrumb;
