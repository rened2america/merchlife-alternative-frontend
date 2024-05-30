import * as React from "react"
export const CircleNext = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={60}
        height={60}
        fill="none"
        {...props}
    >
        <circle
            cx={30}
            cy={30}
            r={29}
            stroke="#000"
            strokeOpacity={0.84}
            strokeWidth={2}
            opacity={0.3}
            transform="rotate(180 30 30)"
        />
        <path
            fill="#000"
            fillOpacity={0.84}
            d="M40.707 30.207a1 1 0 0 0 0-1.414l-6.364-6.364a1 1 0 0 0-1.414 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM21.5 30.5H40v-2H21.5v2Z"
        />
    </svg>
)
