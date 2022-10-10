import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar bg-gray-400 text-black-content rounded-md drop-shadow-2xl  shadow-red-700 font-bold sticky top-0 z-10">
            <NavLink className="btn btn-ghost normal-case text-xl">T-shirt</NavLink>

            <div className=' ml-[80%] ' >

                <ul className='flex gap-5'>

                    <NavLink className={({ isActive }) => isActive ? 'bg-red-700 rounded-2xl' : undefined} to='/home'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-red-700 rounded-2xl' : undefined} to='/shop'>Shop</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-red-700 rounded-2xl' : undefined} to='/chart'>Chart</NavLink>

                </ul>


            </div>
        </div >
    );
};

export default Nav;