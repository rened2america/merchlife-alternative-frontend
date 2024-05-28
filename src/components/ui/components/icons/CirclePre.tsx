import * as React from "react"
export const CirclePre = (props) => (
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
        />
        <path
            fill="#000"
            fillOpacity={0.84}
            d="M19.293 29.793a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L21.414 30.5l5.657-5.657a1 1 0 0 0-1.414-1.414l-6.364 6.364ZM38.5 29.5H20v2h18.5v-2Z"
        />
    </svg>
)
