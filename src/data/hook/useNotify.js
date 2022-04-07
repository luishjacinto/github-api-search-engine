import { useContext } from 'react';
import NotifyContext from '../context/NotifyContext';

const useNotify = () => useContext(NotifyContext)

export default useNotify