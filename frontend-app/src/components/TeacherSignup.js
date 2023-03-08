import React, {useState} from 'react'
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {create_teacheruser} from "../actions/auth"
import {Redirect} from "react-router-dom"

const TeacherSignup = ({create_teacheruser, isAuthenticated, isTeacher}) => {
    const [teacher, setTeacher]=useState({
        username:'',
        email:'',
        phone: '',
        password:'',
        password2:''
    })

    const handleChange=(e)=>setTeacher({
        ...teacher,
        [e.target.name]:e.target.value })
        
    const {username, email, phone, password, password2}=teacher
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newUser={
           username,
           email,
           phone,
           password,
           password2
       }
       create_teacheruser(newUser)
    }
    if(isAuthenticated  && isTeacher){
        return <Redirect to="/teacher/dashboard" />
    } 
    return (
        <div className='container'>
            <h2>signup and start freelancing</h2>
            <div className='row'>
                <div className='col-md-8 mx-auto'>
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className='form-group mb-3'>
                            <label>username</label>
                            <input type='text'
                                 className='form-control' 
                                 name='username'
                                 value={username}
                                 onChange={(e)=>handleChange(e)}
                                 />
                        </div>
         
                        <div className='form-group mb-3'>
                            <label>Email</label>
                            <input type='text'
                                 className='form-control' 
                                 name='email'
                                 value={email}
                                 onChange={(e)=>handleChange(e)}
                                 />
                        </div>
                        <div className='form-group mb-3'>
                            <label>Phone</label>
                            <input type='text'
                                 className='form-control' 
                                 name='phone'
                                 value={phone}
                                 onChange={(e)=>handleChange(e)}
                                 />
                        </div>
                        <div className='form-group mb-3'>
                            <label>password</label>
                            <input type='text'
                                 className='form-control' 
                                 name='password'
                                 value={password}
                                 onChange={(e)=>handleChange(e)}
                                 />
                        </div>
                        <div className='form-group mb-3'>
                            <label>Confirm password</label>
                            <input type='text'
                                 className='form-control' 
                                 name='password2'
                                 value={password2}
                                 onChange={(e)=>handleChange(e)}
                                 />
                        </div>
                        <button type="submit" className="btn btn-primary">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
TeacherSignup.propTypes={
    create_teachereuser:PropTypes.func,
    isAuthenticated:PropTypes.bool,
    isTeacher:PropTypes.bool
}

const mapStateToProps = state =>({
    isAuthenticated:state.auth.isAuthenticated,
    isTeacher:state.auth.isTeacher
})

export default connect(mapStateToProps, {create_teacheruser})(TeacherSignup)