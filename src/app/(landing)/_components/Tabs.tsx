import React, { useState } from 'react';

interface Tab {
    title: string;
    content: string;
}

interface TabsProps {
    tabContent: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabContent }) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className="m-8 border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 md:space-x-6 lg:flex-row">
            <div className="m-6 flex flex-col md:flex-row md:space-x-2 md:space-y-0 items-center justify-center">
                {tabContent.map((tab, index) => (
                    <button
                        key={index}
                        className={`mb-2 border-gray-200 px-5 py-2.5 text-sm font-medium  md:mb-0 lg:h-[54px] lg:w-[290px] ${activeTab === index
                            ? 'bg-black text-white focus:outline-none'
                            : 'bg-[#F5F5F5] text-[#121212]'
                            }`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            {tabContent.map((tab, index) => (
                <p
                    key={index}
                    className={`mb-4 mt-4 text-sm font-normal leading-normal text-gray-700 dark:text-gray-400 md:mb-4 md:mt-0 md:text-base lg:text-lg xl:text-lg ${activeTab === index ? '' : 'hidden'
                        }`}
                >
                    <div dangerouslySetInnerHTML={{ __html: tab.content }} />
                </p>
            ))}
        </div>
    );
};

export default Tabs;
