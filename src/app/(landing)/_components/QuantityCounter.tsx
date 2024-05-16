import { useState } from 'react';

const QuantityCounter = (props) => {

  const incrementQuantity = () => {
    props.setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (props.quantity > 1) {
      props.setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
      <div className="relative flex max-w-[8rem] items-center border border-black">
        <button
          type="button"
          onClick={decrementQuantity}
          className="h-11 p-3 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            className="h-3 w-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          value={props.quantity}
          readOnly
          className="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required
        />
        <button
          type="button"
          onClick={incrementQuantity}
          className="h-11 p-3 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            className="h-3 w-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
  );
};

export default QuantityCounter;
