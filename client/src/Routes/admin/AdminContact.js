import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../Components/admin/Dashboard';
import ContactAdmin from '../../Components/admin/ContactAdmin';

export default function AdminContact() {
    return (
        <>
            <Routes>
                <Route
                    path="/customer-cotact"
                    element={
                        <>
                            <Dashboard />
                            <ContactAdmin />
                        </>
                    }
                />
            </Routes>
        </>
    )
}
