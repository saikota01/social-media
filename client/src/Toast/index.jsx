import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

function Toast() {

    const { message, success } = useSelector(state => state)

    useEffect(() => {
        if (message) {
            success ? toast.success(message) : toast.error(message)
        }
    }, [message, success])

    return (
        <Toaster />
    );
}

export default Toast;