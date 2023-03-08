import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { create_studentuser } from '../actions/auth'
import { Redirect } from 'react-router-dom'

const StudentSignup = ({ create_studentuser, isAuthenticated, isStudent }) => {
    const [student, setStudent] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        password2: ''
    })

    const handleChange = (e) => setStudent({
        ...student,
        [e.target.name]: e.target.value
    })

    const { username, email, phone, password, password2 } = student

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = {
            username,
            email,
            phone,
            password,
            password2
        }
        console.log(newStudent)
        create_studentuser(newStudent)
    }
    if (isAuthenticated && isStudent) {
        return <Redirect to="/student/dashboard" />
    }
    return (
        <div className='container'>
            <h2>signup as a employer</h2>
            <div className='row'>
                <div className='col-md-8 mx-auto'>
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className='form-group mb-3'>
                            <label>username</label>
                            <input type='text'
                                className='form-control'
                                name='username'
                                value={username}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        <div className='form-group mb-3'>
                            <label>Email</label>
                            <input type='text'
                                className='form-control'
                                name='email'
                                value={email}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label>Phone</label>
                            <input type='text'
                                className='form-control'
                                name='phone'
                                value={phone}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label>password</label>
                            <input type='text'
                                className='form-control'
                                name='password'
                                value={password}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label>Confirm password</label>
                            <input type='text'
                                className='form-control'
                                name='password2'
                                value={password2}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

StudentSignup.propTypes = {
    create_studentuser: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    isStudent: PropTypes.bool
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    isStudent: state.auth.isStudent
})

export default connect(mapStateToProps, { create_studentuser })(StudentSignup)