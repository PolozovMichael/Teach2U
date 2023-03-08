import axios from "axios";
import {
    STUDENT_USER_LOADED,
    STUDENT_USER_FAILED,
    TEACHER_USER_LOADED,
    TEACHER_USER_FAILED,
    EDU_CENTER_USER_LOADED,
    EDU_CENTER_USER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED, LOGOUT_SUCCESS,
    REGISTER_SUSER_SUCCESS,
    REGISTER_TUSER_FAILED,
    REGISTER_TUSER_SUCCESS,
    REGISTER_SUSER_FAILED,
    REGISTER_ECUSER_SUCCESS,
    REGISTER_ECUSER_FAILED
} from "../actions/types"



export const getClientUser = () => (dispatch, getState) => {
    const token = getState().auth.token
    const is_student = getState().auth.isStudent
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    if (token && is_student) {
        config.headers['Authorization'] = `Token ${token}`
    }
    axios.get('http://127.0.0.1:8000/api/student/dashboard/', config)
        .then(res => {
            dispatch({
                type: STUDENT_USER_LOADED,
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: STUDENT_USER_FAILED
            })
        })
}


export const getTeacherUser = () => (dispatch, getState) => {
    const token = getState().auth.token;
    const is_teacher = getState().auth.isTeacher
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (token && is_teacher) {
        config.headers['Authorization'] = `Token ${token}`
    }

    axios.get('http://127.0.0.1:8000/api/teacher/dashboard/', config)
        .then(res => {
            dispatch({
                type: TEACHER_USER_LOADED,
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: TEACHER_USER_FAILED
            })
        })
}


export const getEduCenterUser = () => (dispatch, getState) => {
    const token = getState().auth.token;
    const is_edu_center = getState().auth.isEduCenter
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (token && is_edu_center) {
        config.headers['Authorization'] = `Token ${token}`
    }

    axios.get('http://127.0.0.1:8000/api/educenter/dashboard/', config)
        .then(res => {
            dispatch({
                type: EDU_CENTER_USER_LOADED,
                payload: res.data
            })
        }).catch(err => {
            dispatch({
                type: EDU_CENTER_USER_FAILED
            })
        })
}


export const create_studentuser = ({ username, email, phone, password, password2 }) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ username, email, phone, password, password2 })

    axios.post('http://127.0.0.1:8000/api/signup/student/', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUSER_SUCCESS,
                payload: res.data
            })
            console.log(res.data)
        }).catch(err => {
            dispatch({
                type: REGISTER_SUSER_FAILED
            })
            console.log(err.response.data)
        })


}


export const create_teacheruser = ({ username, email, phone, password, password2 }) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ username, email, phone, password, password2 })

    axios.post('http://127.0.0.1:8000/api/signup/teacher/', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_TUSER_SUCCESS,
                payload: res.data
            })
            console.log(res.data)
        }).catch(err => {
            dispatch({
                type: REGISTER_TUSER_FAILED
            })
            console.log(err.response.data)
        })


}


export const create_educenteruser = ({ username, email, phone, city, address,  password, password2 }) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ username, email, phone, city, address, password, password2 })

    axios.post('http://127.0.0.1:8000/api/signup/educenter/', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_ECUSER_SUCCESS,
                payload: res.data
            })
            console.log(res.data)
        }).catch(err => {
            dispatch({
                type: REGISTER_ECUSER_FAILED
            })
            console.log(err.response.data)
        })


}


export const login = ({ username, password }) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ username, password })

    axios.post('http://127.0.0.1:8000/api/login/', body, config)
        .then(response => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            })
        }).catch(err => {
            dispatch({
                type: LOGIN_FAILED
            })
        })

}


export const logout = () => (dispatch, getState) => {
    const token = getState().auth.token
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }
    axios.post('http://127.0.0.1:8000/api/logout/', null, config)
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            })
        }).catch(err => {
            console.log(err.response.data)
        })
}