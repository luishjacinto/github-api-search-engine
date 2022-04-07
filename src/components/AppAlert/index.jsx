import {
    Alert
} from 'react-bootstrap'
import useNotify from '../../data/hook/useNotify'

export default function AppAlert(){
    const {
        showAlert,
        alertMessage,
        alertPriority,
        closeAlert
    } = useNotify()

    return <Alert variant={alertPriority} show={showAlert} onClose={closeAlert}>{alertMessage}</Alert>
}