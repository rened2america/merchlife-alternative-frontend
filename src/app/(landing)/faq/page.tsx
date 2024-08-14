"use client"

import { useState } from 'react';
import SubHeaderCard from '../_components/SubHeaderCard';
import AccordionItem from '../_components/Accroidan';

import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"] });
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
            question: 'What kind of garments do we use?',
            answer: 'We want you to try the best shirts in the market. Most of our products are 100% cotton, but this is subject to availability from our suppliers. WE PRINT IN SIZES SMALL TO 5XLARGE!'
        },
        {
            id: 'accordion-open-body-2',
            question: 'Are the shirts authentic?',
            answer: 'Our shirts are 100% original designs, created by many brands and artists around the world. Also, the licenses we held are 100% official. This means every design you see in our store is previously approved.You can also find original designs from our talented team!'
        },
        {
            id: 'accordion-open-body-3',
            question: 'Can I exchange my shirt if the size is wrong or I didn’t like the design?',
            answer: 'Totally. For more information, please check our “Return Policies” or contact us directly.'
        },
        {
            id: 'accordion-open-body-4',
            question: 'What payments are accepted?',
            answer: 'You can pay your orders through PayPal, and/or credit cards.'
        },
        {
            id: 'accordion-open-body-5',
            question: 'Does Merchlife have a physical store?',
            answer: 'No. We’re only focused on e-Commerce, which means we only sell our products through online stores.'
        },
        {
            id: 'accordion-open-body-6',
            question: 'What can I do to preserve the good quality of my shirt?',
            answer: 'We suggest you to wash them inside-out in cold water, and line dry.'
        },
        {
            id: 'accordion-open-body-7',
            question: 'What can I do if I want a design in another garment or color?',
            answer: 'We try to have a lot of options so our clients find everything they want - and more - in our store! But if you find a design and you would like to change it to another garment or color, please send us the design information to support@merchlife.com and our Customer Service team will help you create the order. Please note that this option will always be subject to the availability of the garments and colors.'
        },
        {
            id: 'accordion-open-body-8',
            question: 'How much time is it going to take to receive my order?',
            answer: 'We have one handling working day to process your order. Once your order ships, it takes 2 to 4 working days to be delivered to your doorstep.'
        },
        {
            id: 'accordion-open-body-9',
            question: 'How can I track my package?',
            answer: 'Every time you place an order, we will send you the tracking number so you know every detail of your delivery.'
        },
        {
            id: 'accordion-open-body-10',
            question: 'Still have questions? ',
            answer: 'Send us an email to support@merchlife.com or call us by phone to clear up your doubts. We’re always happy to help!'
        },
    ];

    return (
        <>  <div className={`${raleway.className}`}>
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
            </div>
        </>
    );
};

export default Faq;