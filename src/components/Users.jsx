import React, { use } from 'react';

const Users = ({userPromise}) => {
    const users = use(userPromise);
    console.log(users)
    return (
        <div>
            {
                users.map(user => <p key={user.id}>
                     {user.name} : {user.email}

                </p>)
            }
        </div>
    );
};

export default Users;