import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../Components/admin/Dashboard';
import CustoInquiry from '../../Components/admin/CustoInquiry';

export default function InquiryAdmin() {
    return (
        <>
            <Routes>
                <Route
                    path="/customer-inquiry"
                    element={
                        <>
                            <Dashboard />
                            <CustoInquiry />
                        </>
                    }
                />
            </Routes>
        </>
    )
}
