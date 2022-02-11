import React from 'react';
import { Navbar } from './navigation';
import { Homepage } from './homepage';
import { Community } from './community';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const Home = (): JSX.Element => (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="community" element={<Community />}></Route>
            </Routes>
        </BrowserRouter>
    </>
);
