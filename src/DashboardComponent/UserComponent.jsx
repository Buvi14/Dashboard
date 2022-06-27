import React from 'react';

export default function UserComponent({ user }) {
    //This is the User component
    // @param Input(user array)
    // return table
    // Styling done using Bootstrap
    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Street</th>
                        <th scope="col">Suite</th>
                        <th scope="col">City</th>
                        <th scope="col">Zip</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                        <th scope="col">Company</th>
                    </tr>
                </thead>
                {/* Here we use Map function that will help to traverse the Array */}
                <tbody>
                    {user ? user.map(user => {
                        return (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.street}</td>
                                <td>{user.address.suite}</td>
                                <td>{user.address.city}</td>
                                <td>{user.address.zipcode}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        )
                    }) : ''}
                </tbody>
            </table>
        </div>
    )
}
