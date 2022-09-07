import {FC, useEffect, useState} from "react";
import Card from "./Card";
import {TaskViewItem} from "./index";
import {useDispatch} from "react-redux";
import {getAllTaskIds, getEthereumContract, getTask} from "../util/SmartContract";
import {Todo} from "../util/types";
import {BigNumber} from "ethers";

const TaskView: FC = ({}) => {
    const dispatch = useDispatch();
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getAllTaskIds().then(ids => {
            // @ts-ignore
            ids.map(i => getTask(BigNumber.from(i._hex)).then((todo: any[]) => {
                setTodos(prevState => [...prevState, {
                    id: todo[0]._hex,
                    title: todo[1],
                    content: todo[2],
                    completed: todo[3]
                }]);
            }));
        });

        getEthereumContract().on('TaskCreated', (id) => {
            getTask(BigNumber.from(id._hex)).then((todo: any[]) => {
                setTodos(prevState => {
                    if (prevState.length === 0 || prevState[prevState.length - 1].id !== todo[0]._hex)
                        return [...prevState, {
                            id: todo[0]._hex,
                            title: todo[1],
                            content: todo[2],
                            completed: todo[3]
                        }]
                    else return prevState;
                });
            });
        });
    }, [dispatch])

    useEffect(() => {
        getEthereumContract().on("TaskToggled", (id) => {
            setTodos(prevState => prevState.map(todo => {
                if (todo.id === id._hex) {
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            }))
        })
    }, [])

    return <Card className={'flex flex-col gap-10 pl-0'}>
        <div className={'text-4xl'}>See your todos here</div>
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'}>
            {
                todos.map(todo => <TaskViewItem key={todo.id} todo={todo} />)
            }
            {
                todos.length === 0 && <div className={'text-2xl text-center text-silver col-span-4'}>No todos yet</div>
            }
        </div>
    </Card>
}

export default TaskView;