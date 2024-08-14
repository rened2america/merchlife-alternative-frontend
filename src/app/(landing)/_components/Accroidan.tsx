import React from 'react'

const AccordionItem = ({ id, question, answer, expanded, toggleAccordion, index }) => (
    <div className='mt-4 '>
        <h2 id={`accordion-open-heading-${id}`}>
            <button
                type="button"
                className={`flex items-center justify-between w-full p-4 font-medium rtl:text-right text-gray-500 border border-gray-400 focus:text-black focus:ring-2 focus:ring-black dark:focus:ring-black dark:border-gray-700 dark:text-gray-500  gap-3 ${expanded ? '' : ''}`}
                data-accordion-target={`#${id}`}
                aria-expanded={expanded}
                onClick={() => toggleAccordion(id)}
                aria-controls={id}
            >
                <span className="flex items-center">
                    {index + 1}.   {question}
                </span>
            </button>
        </h2>
        <div
            id={id}
            className={`p-5  dark:border-gray-700 dark:bg-gray-900 ${expanded ? 'block' : 'hidden'}`}
            aria-labelledby={`accordion-open-heading-${id}`}
        >
            <p className="mb-2 text-gray-500 dark:text-gray-400">{answer}</p>
        </div>
    </div>
);

export default AccordionItem