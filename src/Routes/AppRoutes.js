import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './RoutesConfig';
import NotFoundPage from './NotFoundPage'; // Import your 404 component

const AppRoutes = () => (
    <Routes>
        {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element}  />
        ))}
        {/* Fallback route for undefined paths */}
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
);

export default AppRoutes;
