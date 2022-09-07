import {FC} from "react";

const Input: FC<{value?: string; onChange?: (e: HTMLInputElement) => void; placeholder?: string; header?: string; className?: string; name?: string}> = props => {
    return <div className={'flex flex-col gap-1'}>
        <label className={'text-silver text-sm'}>{props.header}</label>
        <input
            className={`w-full hover:bg-secondaryBlack outline-none bg-transparent border-2 border-silver text-white text-lg px-5 py-3 rounded-md focus:border-blue transition-all ease-out duration-300 ${props.className}`}
            value={props.value}
            onChange={e => props.onChange?.(e.target)}
            placeholder={props.placeholder}
            name={props.name}
        />
    </div>
}

export default Input;