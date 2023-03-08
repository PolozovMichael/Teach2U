import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='container mt-'>
            <div className='flex-fill'>
                <h3>Signup as student</h3>
                <Link to="/student/signup" className='btn btn-warning'>Signup</Link>
            </div>
            <div className='flex-fill'>
                <h3>Signup as a teacher</h3>
                <Link to="/teacher/signup" className='btn btn-warning'>Signup</Link>
            </div>
            <div className='flex-fill'>
                <h3>Signup as a edu center</h3>
                <Link to="/edu_center/signup" className='btn btn-warning'>Signup</Link>
            </div>
        </div>
    )
}

export default Register