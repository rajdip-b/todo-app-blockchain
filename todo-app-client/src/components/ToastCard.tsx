import React, { FC } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useSelector} from "react-redux";
import {StoreStateType} from "../store/store";

const ToastCard: FC<{ children: React.ReactNode }> = (props) => {
    const {isDarkMode} = useSelector((state: StoreStateType) => state.app);

    return (
        <div>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme={`${isDarkMode ? 'dark' : 'light'}`}
            />
            {props.children}
        </div>
    );
};

export default ToastCard;