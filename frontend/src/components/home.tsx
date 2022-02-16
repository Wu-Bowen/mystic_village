import React from 'react';
import { Navbar } from './navigation';
import { Homepage } from './pages/homepage';
import { Community } from './pages/community';
import { Footer } from './footer';
import { Apartments } from './pages/apartments';
import { Contact } from './pages/contact';
import { NotFound } from './notfound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Home = (): JSX.Element => (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={'/'} element={<Homepage />} />
                <Route path={'community'} element={<Community />} />
                <Route path={'contact'} element={<Contact />} />
                <Route path={'apartments'} element={<Apartments />} />
                <Route path={'*'} element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
);
