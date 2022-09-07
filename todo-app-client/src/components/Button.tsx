import {FC, ReactNode} from "react";

const Button: FC<{onClick?: () => void; children: ReactNode; className?: string; disabled?: boolean}> = ({onClick, children, className, disabled}) => {
    return <button
        disabled={disabled}
        onClick={onClick}
        className={`px-4 py-3 rounded-md bg-blue text-white disabled:bg-gray-600 transition-all ease-out duration-300 disabled:border-gray-600 ${className}`}>
        {children}
    </button>
}

export default Button;