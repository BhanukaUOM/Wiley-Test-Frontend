import React from 'react'
import { Redirect, Route } from "react-router-dom";

export const RestrictedRoute = ({
    component: Component,
    authUser,
    ...rest
}) => {

    return (
        <Route
            {...rest}
            render={(props) =>
                authUser ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login"
                            }}
                        />
                    )
            }
        />
    )
}
