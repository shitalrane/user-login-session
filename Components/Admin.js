import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router'

export default function AdminCompoenet() {

    const [users, setUsers] = useState()

    const router = useRouter()


    getUsers();


    function handleLogOut() {
        router.push('login')
    }



    function getUsers() {


        const apiUrl = "http://localhost:3000/api/getusers"
        fetch(apiUrl).then(res => res.json())
            .then(res => {
                debugger
                console.log(res.response);

                setUsers(res.response)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    return (
        <>
            {users && <div style={{ display: "flex", justifyContent: "center" }}>
                <table className='table' >
                    <thead className="thead-dark">
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email Id</th>
                            <th scope='col'>Mobile Number</th>
                            <th scope='col'>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.name}</td>
                                    <td>{val.email_id}</td>
                                    <td>{val.mobile_no}</td>
                                    <td>{val.feedback}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>}

            {!users && (<div style={{ display: "flex", justifyContent: "center" }}>
                Something went wrong!
            </div>)}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button style={{ margin: "0 auto" }} onClick={handleLogOut} type="submit">Logout</Button>
            </div>
        </>
    )
}