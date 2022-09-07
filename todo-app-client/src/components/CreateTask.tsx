import {FC, useCallback, useState} from "react";
import Card from "./Card";
import {CreateTaskText1} from "../constants";
import {Button, Input} from "./index";
import {useDispatch, useSelector} from "react-redux";
import {StoreStateType} from "../store/store";
import {toast} from "react-toastify";
import {createTask} from "../util/SmartContract";

const CreateTask: FC<{className?: string}> = ({className}) => {
    const dispatch = useDispatch();
    const wallet = useSelector((state: StoreStateType) => state.app.wallet);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
    });

    const handleChange = (e: HTMLInputElement) => {
        setFormData(prev => ({...prev, [e.name]: e.value}))
    }

    const handleCreateTask = useCallback(() => {
        const {title, content} = formData;

        if (wallet === null) {
            toast.error('Please connect wallet');
            return;
        }
        if (title === ''){
            toast.error('Title can\'t be empty!')
            return;
        }
        if (content === ''){
            toast.error('Content can\'t be empty!')
            return;
        }

        toast.promise(
            () => createTask(title, content, wallet), {
            success: 'Task created successfully!',
            error: 'There was an error creating that task!',
            pending: 'Creating your task...'
        }).then(() => {
            setFormData({
                title: '',
                content: '',
            })
        })
    }, [wallet, dispatch, formData])

    return <Card className={`${className} bg-gray-800/50 backdrop-filter-blur flex flex-col gap-5`}>
        <div className={'text-white text-3xl mb-5'}>{CreateTaskText1}</div>
        <Input name={'title'} value={formData.title} onChange={handleChange} header={'Task Name'} placeholder={'Frontend Design'} />
        <Input name={'content'} value={formData.content} onChange={handleChange}  header={'Task Body'} placeholder={'Create the login panel'} />
        <Button onClick={handleCreateTask}>Create</Button>
    </Card>
}

export default CreateTask;