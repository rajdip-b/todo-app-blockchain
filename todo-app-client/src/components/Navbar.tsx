import {FC, useCallback} from "react";
import {Button} from "./index";
import {useDispatch, useSelector} from "react-redux";
import {appActions} from "../store/app-slice";
import {connectWallet} from "../util/SmartContract";
import {StoreStateType} from "../store/store";

const Navbar: FC = () => {
    const dispatch = useDispatch();
    const {wallet} = useSelector((state: StoreStateType) => state.app);

    const handleConnectToMetamask = useCallback(() => {
        connectWallet().then(account => {
            dispatch(appActions.setWallet(account));
        })
    }, [dispatch]);

    return <nav className={'text-white py-5 flex justify-between items-center'}>
        <h2 className={'text-2xl font-semibold'}>My Todo App</h2>
        <div className={'flex gap-10 items-center'}>
            <a href={'/'} className={'text-lg text-white hover:text-blue transition-all ease-out duration-300'}>GitHub</a>
            {
                wallet ?
                    <div className={'text-green-500'}>Wallet Connected!</div>
                    :
                    <Button onClick={handleConnectToMetamask} className={'hover:border-blue border-2 border-transparent hover:bg-transparent'}>Connect Metamask</Button>
            }
        </div>
    </nav>
}

export default Navbar;