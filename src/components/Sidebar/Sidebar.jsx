import React from 'react';
import { NavLink } from 'react-router';

const Sidebar = () => {
    return (
        <aside className='mt-5 text-blue-500'>
            <p className='w-20'>Side 1</p>
            <p>Side 2</p>
            <p>Side 3</p>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/users2">Users2</NavLink></li>
            <li><NavLink to="/posts">Posts</NavLink></li>
        </aside>
    );
};

export default Sidebar;