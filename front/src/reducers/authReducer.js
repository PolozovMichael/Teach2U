
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



const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isStudent: null,
    isTeacher: null,
    isEduCenter: null,
    isLoading: false,
    user: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUSER_SUCCESS:
        case REGISTER_TUSER_SUCCESS:
        case REGISTER_ECUSER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isStudent: action.payload.user.is_student,
                isTeacher: action.payload.user.is_teacher,
                isEduCenter: action.payload.user.is_edu_center,
                isLoading: false
            }
        case STUDENT_USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isStudent: true,
                isTeacher: false,
                isEduCenter: false,
                user: action.payload
            }
        case TEACHER_USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                isStudent: false,
                isTeacher: true,
                isEduCenter: false,
                user: action.payload
            }
        case EDU_CENTER_USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                isStudent: false,
                isTeacher: false,
                isEduCenter: true,
                user: action.payload
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                isStudent: action.payload.is_student,
                isTeacher: action.payload.is_teacher,
                isEduCenter: action.payload.is_edu_center

            }

        case REGISTER_SUSER_FAILED:
        case REGISTER_TUSER_FAILED:
        case REGISTER_ECUSER_FAILED:
        case LOGIN_FAILED:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isStudent: null,
                isTeacher: null,
                isEduCenter: null,
                isAuthenticated: false,
                isLoading: false
            }

        case STUDENT_USER_FAILED:
        case TEACHER_USER_FAILED:
        case EDU_CENTER_USER_FAILED:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isStudent: null,
                isTeacher: null,
                isEduCenter: null,
                isAuthenticated: false,
                isLoading: false,
            }
        default:
            return state;
    }
}
