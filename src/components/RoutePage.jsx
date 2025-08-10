import { Routes, Route } from 'react-router-dom';
import { appRoutes } from '../config/routes';

export default function RoutePage() {

const routes = appRoutes();

    return (
        <div className="routes">
            <Routes>
                {routes.map(route => (
                    <Route key={route.id} path={route.path} element={route.element} />
                ))}
            </Routes>
        </div>
    );
}
