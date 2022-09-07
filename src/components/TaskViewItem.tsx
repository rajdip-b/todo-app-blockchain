import {FC, useCallback} from "react";
import {Todo} from "../util/types";
import {Card} from "./index";
import {getEthereumContract} from "../util/SmartContract";
import {toast} from "react-toastify";

const TaskViewItem: FC<{todo: Todo}> = ({todo}) => {

    const toggleTaskStatus = useCallback(() => {
        toast.promise(() => getEthereumContract().toggleTaskStatus(todo.id), {
            pending: 'Toggling task status',
            success: 'Task status toggled',
            error: 'Error toggling task status'
        })
    }, []);

    return <Card className={`dark:bg-gray-800/50 bg-stone-200 backdrop-filter-blur flex flex-col gap-5 border-l-4 rounded-l-sm ${todo.completed ? 'border-l-green-500' : 'border-l-red-500'} hover:translate-x-2 transition-all ease-out duration-500`}>
        <div className={'flex gap-5 justify-between items-center'}>
            <div className={'text-2xl font-bold dark:text-white text-gray-700'}>{todo.title}</div>
            {
                !todo.completed ? (
                    <button onClick={toggleTaskStatus} className={'text-green-500'}>Set as done</button>
                ) :
                    <button onClick={toggleTaskStatus} className={'text-red-500'}>Set as undone</button>
            }
        </div>
        <div className={'dark:text-silver text-gray-500'}>{todo.content}</div>
    </Card>
}

export default TaskViewItem;