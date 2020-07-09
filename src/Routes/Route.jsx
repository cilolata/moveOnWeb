/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import store from '../store';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';

// eslint-disable-next-line react/prop-types
export default function RouteWrapper({
    // eslint-disable-next-line react/prop-types
    component: Component,
    // eslint-disable-next-line react/prop-types
    isPrivate,
    ...rest
}) {
    const { signed } = store.getState().auth;

    if (!signed && isPrivate) return <Redirect to="/" />;
    if (signed && !isPrivate) return <Redirect to="/dashboard" />;

    const Pages = signed ? Dashboard : Home;

    return (
        <Route
            {...rest}
            render={(props) => (
                <Pages>
                    <Component {...props} />
                </Pages>
            )}
        />
    );
}

RouteWrapper.prototype = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
