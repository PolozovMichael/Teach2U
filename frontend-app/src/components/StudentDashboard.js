import React, { useEffect } from 'react'
import { getClientUser } from "../actions/auth"
import { useDispatch } from "react-redux"

export default function StudentDashboard() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getClientUser())
    }, [dispatch])
    return (
        <div className='container mt-5'>
            Welcome! we have talented developer ready for hired
        </div>
    )
}

