import * as React from "react"

const SvgComponent = (props) => (
    <svg
        width={295}
        height={197}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#a)">
            <mask
                id="b"
                style={{
                    maskType: "alpha",
                }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={295}
                height={197}
            >
                <path
                    transform="rotate(90 295 0)"
                    fill="#C4C4C4"
                    d="M295 0h196.012v295H295z"
                />
            </mask>
            <g mask="url(#b)">
                <path
                    d="M295.656 200.814V-91.915h-306.89v292.729h306.89Z"
                    fill="#121713"
                />
                <path
                    d="M142.207 201.235H-11.315V54.87l153.522 146.365Z"
                    fill="#4C4E8E"
                />
                <path d="M65.563 201.445h-76.877v-73.34l76.877 73.34Z" fill="#FF5545" />
                <path
                    d="M219.012 54.765h-76.8v-73.34l76.8 73.34ZM65.563 54.765h-76.877v-73.34l76.877 73.34Z"
                    fill="#4C4E8E"
                />
                <path
                    d="M65.719 128.315h-.309l.155-.105-.155-.105h.309L142.44 54.87v146.68l-76.722-73.235ZM219.165 55.08V-91.915h76.491v219.914L219.165 55.08Z"
                    fill="#FF5545"
                />
                <path
                    d="M295.656 201.235H142.211V54.87l153.445 146.365Z"
                    fill="#4C4E8E"
                />
                <path
                    d="m65.716-91.704 76.491 72.92V128.21H65.716V-91.704Z"
                    fill="#FF5545"
                />
                <path
                    d="M295.809 54.765h-76.877v-73.34l76.877 73.34ZM219.012 201.445h-76.8v-73.34l76.8 73.34Z"
                    fill="#121713"
                />
                <path d="M142.363 128.21H65.486V54.87l76.877 73.34Z" fill="#4C4E8E" />
            </g>
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h295v196.012H0z" />
            </clipPath>
        </defs>
    </svg>
)

export default SvgComponent
