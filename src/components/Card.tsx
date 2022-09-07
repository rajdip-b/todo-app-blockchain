import {FC, ReactNode} from "react";

const Card: FC<{children: ReactNode; className?: string}> = ({children, className}) => {
    return <div className={`p-5 rounded-xl text-white ${className}`}>{children}</div>
}

export default Card;