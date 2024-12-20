import * as React from "react"
export const Amex = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={62}
        height={42}
        fill="none"
        {...props}
    >
        <g filter="url(#a)">
            <rect width={50} height={30} x={6} y={6} fill="#1887FE" rx={5} />
            <mask
                id="b"
                width={50}
                height={30}
                x={6}
                y={6}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "alpha",
                }}
            >
                <rect width={50} height={30} x={6} y={6} fill="#D9D9D9" rx={5} />
            </mask>
            <g mask="url(#b)">
                <path fill="url(#c)" d="M6 5h51v32H6z" />
            </g>
        </g>
        <defs>
            <pattern
                id="c"
                width={1}
                height={1}
                patternContentUnits="objectBoundingBox"
            >
                <use xlinkHref="#d" transform="matrix(.00354 0 0 .00565 -.003 0)" />
            </pattern>
            <filter
                id="a"
                width={62}
                height={42}
                x={0}
                y={0}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feGaussianBlur stdDeviation={3} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_50_696" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_50_696"
                    result="shape"
                />
            </filter>
            <image
                xlinkHref="data:image/png;base64,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"
                id="d"
                width={284}
                height={177}
            />
        </defs>
    </svg>
)

