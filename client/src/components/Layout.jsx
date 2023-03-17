import React from 'react';
import "../App.css";
import Navbar from './Navbar';
const Layout = ({ children }) => {
    return (
        <main className="App">
            <Navbar />
            {children}
        </main>
    )
}
export default Layout;