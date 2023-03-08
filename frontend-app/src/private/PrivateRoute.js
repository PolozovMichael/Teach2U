import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"


export const SPrivateRoute = ({ component: Component, path, ...rest }) => {
    const state = useSelector(state => state.auth)
    return <Route path={path}
        {...rest}
        render={(props) => {
            if (state.isLoading) {
                return <h3>Loading....</h3>
            } else if (!state.isAuthenticated && !state.isStudent) {
                return <Redirect to="/login" />
            } else {
                return <Component {...props} />
            }
        }} />

}



export const TPrivateRoute = ({ component: Component, path, ...rest }) => {
    const state = useSelector((state) => state.auth)
    return <Route
        path={path}
        {...rest}
        render={(props) => {
            if (state.isLoading) {
                return <h2>Loading ....</h2>
            } else if (state.isAuthenticated && !state.isTeacher) {
                return <Component {...props} />
            } else {
                return <Redirect to="/login" />
            }

        }

        } />
}

export const ECPrivateRoute = ({ component: Component, path, ...rest }) => {
    const state = useSelector((state) => state.auth)
    return <Route
        path={path}
        {...rest}
        render={(props) => {
            if (state.isLoading) {
                return <h2>Loading ....</h2>
            } else if (state.isAuthenticated && !state.isEduCenter) {
                return <Component {...props} />
            } else {
                return <Redirect to="/login" />
            }

        }

        } />
}