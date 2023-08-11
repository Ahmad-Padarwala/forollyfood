import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const Login = lazy(() => import('../../Components/admin/Login'));

export default function LoginPage() {
    return (
        <>
            <Routes>
                <Route
                    path="/admin"
                    element={
                        <>
                            <Suspense fallback={<div>Loading..</div>}>
                                <Login />
                            </Suspense>
                        </>
                    }
                />
            </Routes>
        </>
    )
}
