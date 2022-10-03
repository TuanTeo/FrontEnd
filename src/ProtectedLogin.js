import { Route, Redirect } from "react-router-dom"
import React from 'react';

const ProtectedLogin = ({ component: Component, isAuth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                if (!isAuth) {
                    return (
                        <Component />
                    )
                } else {
                    return (
                        <Redirect to="/account" />
                    )
                }


            }}
        />
    )
}

export default ProtectedLogin