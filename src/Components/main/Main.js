import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../../Components/NavBar/Nav'

export const TshirtContext = createContext([])

const Main = () => {

    const cart = useLoaderData()
 

    return (
        <TshirtContext.Provider value={cart}>


            <div>
                <Nav></Nav>
                <Outlet></Outlet>
            </div>


        </TshirtContext.Provider>
    );
};

export default Main;