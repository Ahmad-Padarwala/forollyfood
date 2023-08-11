import React, { lazy, Suspense } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Route, Routes } from 'react-router-dom';
import SimerUi from '../Components/ShimerUi';
const Home = lazy(() => import('../Components/Home'));

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Suspense fallback={<><SimerUi width={300} height={300} /></>}>
                <Home />
              </Suspense>
              <Footer />
            </>
          }
        />
      </Routes>

    </>
  )
}
