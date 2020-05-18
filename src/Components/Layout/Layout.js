import React, { Fragment } from 'react';

const Layout=( props )=>(
    <Fragment>
        <div>Sidebar, toolbar,backdrop</div>
        <main>
            {props.children}
        </main>
    </Fragment>
);
export default Layout;