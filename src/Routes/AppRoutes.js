import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './RoutesConfig';

const AppRoutes = () => (
    <Routes>
        {routes.map(({ path, element, index }) => (
            <Route key={path} path={path} element={element} index={index} />
        ))}
    </Routes>
);

export default AppRoutes;
