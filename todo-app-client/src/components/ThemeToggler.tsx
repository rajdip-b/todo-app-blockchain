import {FC} from "react";
import {DarkModeOutlined, LightModeOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {StoreStateType} from "../store/store";
import {appActions} from "../store/app-slice";

const ThemeToggler: FC = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: StoreStateType) => state.app.isDarkMode);

    return <div onClick={() => dispatch(appActions.toggleTheme())} className={`${isDarkMode ? 'bg-gray-700' :'bg-gray-300'} w-[60px] h-[30px] rounded-full flex transition-all ease-out duration-300`}>
        <div className={`relative w-[30px] h-[30px] rounded-full ${isDarkMode ? 'bg-white translate-x-[30px]' : 'bg-primaryBlack'} items-center justify-center flex transition-all ease-out duration-300`}>
            {isDarkMode ?
                <DarkModeOutlined className={'text-primaryBlack'}/>
                :
                <LightModeOutlined className={'text-white'}/>
            }
        </div>
    </div>
}

export default ThemeToggler;