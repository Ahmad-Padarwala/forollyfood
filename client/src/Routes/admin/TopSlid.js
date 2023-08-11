import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../Components/admin/Dashboard';
import TopSlider from '../../Components/admin/TopSlider';

export default function TopSlid() {
    return (
        <>
            <Routes>
                <Route
                    path="/top-slider"
                    element={
                        <>
                            <Dashboard />
                            <TopSlider />
                        </>
                    }
                />
            </Routes>
        </>
    )
}
