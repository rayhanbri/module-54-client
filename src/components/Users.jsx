import React, { use } from 'react';

const Users = ({ userPromise }) => {
    const users = use(userPromise);
    // console.log(users)

const handleUser = e => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = {name, email};
    console.log(user)

    // crate user in the sever 

    fetch('http://localhost:3000/users',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(user)


    })
    .then(res => res.json() )
    .then (data => {
        console.log( 'data after post ',data)
    });

}




    return (
        <div>

            <form onSubmit={handleUser}>
                <input name="name" type="text"  id="" />
                <br />
                <input name='email' type="email"  id="" />
                <br />
                <input type="submit" value="Submit" />

            </form>
            <div>
                {
                    users.map(user => <p key={user.id}>
                        {user.name} : {user.email}

                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;