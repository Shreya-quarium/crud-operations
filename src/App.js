import React, { useState, useEffect } from 'react';
import './App.scss'
import Create from './Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './Read';
import Update from './Update';

const App = () => {

    return (
        <div className="app">
        <BrowserRouter>
            <Routes>
                <Route  path="/crud-operations" element={<Create />}></Route>
                <Route  path="/read" element={<Read/>}></Route>
                <Route  path="/update" element={<Update/>}></Route>
                </Routes>
            </BrowserRouter>
            </div>
    );
};

export default App;

