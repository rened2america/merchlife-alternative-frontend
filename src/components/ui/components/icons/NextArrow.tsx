import * as React from "react"
export const NextArrow = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={16}
        fill="none"
        {...props}
    >
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 8h18M12.368 1 19 8l-6.632 7"
        />
    </svg>
)
