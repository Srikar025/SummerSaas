import type { ReactElement } from "react";


type Varients = "primary" | "secondary"
interface ButtonProps {
    variant: Varients;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    disabled?: boolean;
}
const variantStyles = {
    "primary": "bg-opacity-5 text-indigo-600 cursor-pointer border border-white",
    "secondary": "bg-opacity-5 text-slate-50 cursor-pointer border border-white rounded-xl  font-mono"
}
const sizeStyles = {
    "sm": "px-4 py-2 m-1",
    "md": "p-4 py-2 ",
    "lg": "p-6"
}

const defaultStyles = "rounded-md  px-10 py-2 flex items-center  "

export const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick} className={`${variantStyles[props.variant]}   ${defaultStyles}  ${sizeStyles[props.size]} `}>
        <div className="pr-2  ">
            {props.startIcon}

        </div>
        {props.disabled ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
            props.text
        )}


    </button>
}

