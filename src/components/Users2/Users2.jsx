import React, { use } from 'react';
import User from '../User/User';

const Users2 = ({users2Promise}) => {
    const users2 = use(users2Promise)
//    console.log(users2)
    return (
        <div>

            {/* user card */}
            <div className='grid grid-cols-3 gap-2'>
                {
                    users2.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users2;