import {FC} from "react";
import Card from "./Card";
import {GreetingsText1, GreetingsText2} from "../constants";

const Greetings: FC<{className?: string}> = ({className}) => {
    return <Card className={`${className} flex flex-col gap-10 pl-0`}>
        <div className={'text-5xl dark:text-white text-gray-700'}>{GreetingsText1}</div>
        <div className={'text-4xl text-blue '}>{GreetingsText2}</div>
    </Card>
}

export default Greetings;