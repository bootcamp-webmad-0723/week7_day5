import { Routes, Route } from 'react-router-dom'
import CoastersGalleryPage from '../pages/CoastersGalleryPage/CoastersGalleryPage'
import CoasterDetailsPage from '../pages/CoasterDetailsPage/CoasterDetailsPage'
import NewCoasterPage from '../pages/NewCoasterPage/NewCoasterPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/galeria'} element={<CoastersGalleryPage />} />
            <Route path={'/detalles/:coaster_id'} element={<CoasterDetailsPage />} />
            <Route path={'/crear'} element={<NewCoasterPage />} />
            <Route path={'/registro'} element={<SignupPage />} />
            <Route path={'/inicio-sesion'} element={<LoginPage />} />

            <Route path={'*'} element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes