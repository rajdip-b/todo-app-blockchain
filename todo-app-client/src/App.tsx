import {CreateTask, Greetings, TaskView, Navbar} from "./components";
import {useEffect} from "react";
import {getAccounts} from "./util/SmartContract";
import {useDispatch} from "react-redux";
import {appActions} from "./store/app-slice";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getAccounts().then(accounts => {
           if (accounts.length === 0) {
               dispatch(appActions.setWallet(null));
           }
        });
    }, [])

    return <div className={'min-h-screen flex w-full bg-gradient-to-br from-primaryBlack to-slate-900'}>
            <div className={'max-w-[1500px] md:w-[80%] w-[90%] mx-auto flex flex-col gap-10 justify-between'}>
                <Navbar />
                <div className={'flex md:flex-row flex-col gap-10'}>
                    <Greetings className={'md:w-[60%]'}/>
                    <CreateTask className={'md:w-[40%]'}/>
                </div>
                <TaskView />
            </div>
    </div>
}

export default App;