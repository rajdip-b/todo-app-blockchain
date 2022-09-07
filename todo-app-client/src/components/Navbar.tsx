import {FC, useCallback} from "react";
import {Button} from "./index";
import {useDispatch, useSelector} from "react-redux";
import {appActions} from "../store/app-slice";
import {connectWallet} from "../util/SmartContract";
import {StoreStateType} from "../store/store";
import {toast} from "react-toastify";
import {ContentCopyOutlined} from "@mui/icons-material";
import ThemeToggler from "./ThemeToggler";

const Navbar: FC = () => {
    const dispatch = useDispatch();
    const {wallet} = useSelector((state: StoreStateType) => state.app);

    const getFormattedWallet = useCallback(() => {
        return wallet?.substring(0, 6) + "..." + wallet?.substring(wallet.length - 4, wallet.length);
    }, [wallet]);

    const handleConnectToMetamask = useCallback(() => {
        connectWallet().then(account => {
            dispatch(appActions.setWallet(account));
        })
    }, [dispatch]);

    const copyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(wallet!);
        toast.info("Copied to clipboard!")
    }, [wallet]);

    return <nav className={'text-white py-5 flex justify-between items-center'}>
        <h2 className={'text-2xl font-semibold dark:text-white text-gray-700'}>My Todoister App</h2>
        <div className={'flex gap-10 items-center'}>
            <ThemeToggler />
            <a href={'https://github.com/rajdip-b/todo-app-blockchain'} className={'text-lg text-white hover:text-blue transition-all ease-out duration-300 dark:text-white text-gray-700'}>GitHub</a>
            {
                wallet ?
                    <Button onClick={copyToClipboard} className={'text-sm rounded-full w-[200px] flex gap-2 items-center justify-center'}>
                        <div><ContentCopyOutlined fontSize={'small'}/></div>
                        <div>{getFormattedWallet()}</div>
                    </Button>
                    :
                    <Button onClick={handleConnectToMetamask} className={'hover:border-blue border-2 border-transparent hover:text-blue hover:bg-transparent rounded-full w-[200px]'}>Connect Metamask</Button>
            }
        </div>
    </nav>
}

export default Navbar;