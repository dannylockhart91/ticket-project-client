import React from 'react';
import buildClient from '../api/build-client';

const LandingPage = ({currentUser}) => {
    return currentUser ? <h1>You are signed in</h1> : <h1>You are not signed in</h1>
}

/**
 * Executes on server before the component is sent back to the client
 * @returns {Promise<{props: {currentUser: null}}|{props: {currentUser: any}}>}
 */
export async function getServerSideProps(context) {
    try {
        const {data} = await buildClient(context).get('/api/users/currentuser')
        return {props: data}
    } catch (e) {
        console.log(e);
        return {props: {currentUser: null}}
    }
}

export default LandingPage;
