"use client"

import { useState } from 'react';
import SubHeaderCard from '../_components/common/SubHeaderCard';
import AccordionItem from '../_components/common/Accroidan';


const Faq = () => {
    const howItWorksLinks = [
        { text: 'Home', href: '/' },
        { text: 'FAQ', href: '#', icon: true }
    ];

    const initialAccordionState = {};

    const [expanded, setExpanded] = useState(initialAccordionState);

    const toggleAccordion = (id) => {
        setExpanded((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const faqData = [
        {
            id: 'accordion-open-body-1',
            question: 'Vivamus elementum semper felis, non suscipit tellus ultrices sed.',
            answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.'
        },
        {
            id: 'accordion-open-body-2',
            question: 'Suspendisse potenti. Donec in risus condimentum dui euismod ornare tristique vel dolor.',
            answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.'
        },
        {
            id: 'accordion-open-body-3',
            question: 'Curabitur euismod elit nunc, scelerisque ultrices ipsum scelerisque a.',
            answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.'
        },
        {
            id: 'accordion-open-body-4',
            question: 'Maecenas eu mi vel est maximus gravida.',
            answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.'
        },
        {
            id: 'accordion-open-body-5',
            question: ' In feugiat mauris vel placerat mollis, pellentesque dapibus.',
            answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.'
        },
    ];

    return (
        <>
            <SubHeaderCard title="FAQ" links={howItWorksLinks} />
            <div className='p-28 mb-20'>
                <h1 className='font-bold text-4xl'>Frequently Asked Questions.</h1>
                <div className='mt-4' id="accordion-open" data-accordion="open">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            index={index}
                            key={item.id}
                            id={item.id}
                            question={item.question}
                            answer={item.answer}
                            expanded={expanded[item.id]}
                            toggleAccordion={toggleAccordion}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Faq;
