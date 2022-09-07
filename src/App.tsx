import {CreateTask, Greetings, TaskView, Navbar} from "./components";
import {useEffect} from "react";
import {getAccounts} from "./util/SmartContract";
import {useDispatch, useSelector} from "react-redux";
import {appActions} from "./store/app-slice";
import {StoreStateType} from "./store/store";

const App = () => {
    const dispatch = useDispatch();
    const {isDarkMode} = useSelector((state: StoreStateType) => state.app);

    useEffect(() => {
        getAccounts().then(accounts => {
           if (accounts.length === 0) {
               dispatch(appActions.setWallet(null));
           }
        });
    }, [])

    return <div className={`${isDarkMode ? 'dark' : ''}`}>
        <div className={`min-h-screen flex w-full bg-gradient-to-br from-primaryWhite to-secondaryWhite dark:from-primaryBlack dark:to-slate-900`}>
            <div className={'max-w-[1500px] md:w-[80%] w-[90%] mx-auto flex flex-col gap-10 justify-between'}>
                <Navbar />
                <div className={'flex md:flex-row flex-col gap-10 items-center'}>
                    <Greetings className={'md:w-[60%] w-full'}/>
                    <CreateTask className={'md:w-[40%] w-full py-10'}/>
                </div>
                <TaskView />
            </div>
        </div>
    </div>
}

export default App;