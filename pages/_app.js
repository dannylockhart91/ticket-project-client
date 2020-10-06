import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';

export default ({Component, pageProps}) => {
    return (
        <div>
            <h1>Header</h1>
            <Component {...pageProps}/>
        </div>
    )
}
