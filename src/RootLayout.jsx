import React from 'react';
import {Outlet} from "react-router";
import page from "./assets/img/page.svg";
import './css.scss'

const RootLayout = () => {
    return (
        /*<main style={{backgroundImage: `url(${page})`}} className={'bg'}>*/
        <main  className={'bg'}>
            <Outlet/>
        </main>
    );
};

export default RootLayout;