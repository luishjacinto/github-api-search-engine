
import { createContext, useState } from "react";

const NotifyContext = createContext({})

export function NotifyProvider(props){

    const [alertMessage, setAlertMessage] = useState(null);
    const [alertPriority, setAlertPriority] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertTimeout, setShowAlertTimeout] = useState(null);

    const createAlert = (message, priority = "warning") => {
        setAlertMessage(message)
        setAlertPriority(priority)
        setShowAlert(true)

        if (showAlertTimeout)
            clearTimeout(showAlertTimeout)

        setShowAlertTimeout(
            setTimeout(() => {
                setShowAlert(false)
            }, 1500)
        )
    }

    const closeAlert = () => {
        setAlertMessage(null)
        setAlertPriority(null)
    }

    const value = {
        alertMessage,
        alertPriority,
        showAlert,
        closeAlert,
        createAlert
    }

    return (
        <NotifyContext.Provider value={value}>
            {props.children}
        </NotifyContext.Provider>
    )
}

export default NotifyContext