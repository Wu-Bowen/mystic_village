import React from 'react';
import { Navbar } from './navigation';
import { Homepage } from './homepage';
import { Community } from './community';
import { Footer } from './footer';
import { NotFound } from './notfound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Home = (): JSX.Element => (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="community" element={<Community />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
);
