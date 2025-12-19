import React from 'react';
import {Outlet} from "react-router";

import './css.scss'

const RootLayout = () => {
    return (

        <main  className={'bg'}>
            <Outlet/>
        </main>
    );
};

export default RootLayout;