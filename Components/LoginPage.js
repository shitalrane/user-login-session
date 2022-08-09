import React from 'react'
import { Formik, Field, Form } from 'formik';

import { Button } from 'react-bootstrap';
import { signIn } from '../Commons/utils.js'
import { useRouter } from 'next/router'
import { setUser } from '../Commons/utils.js'




export default function LoginPage() {

    const router = useRouter()
    async function handleLogin() {


        const name = document.getElementById("username").value
        const email = document.getElementById("email").value
        const mobile_no = document.getElementById("mobile_no").value

        if(name === 'admin' && email === 'admin@admin.com' && mobile_no === '0000000000'){
            router.push('admin')
            return
        }

        const user = {
            name: name,
            email: email,
            mobile_no: mobile_no
        }

        const err = await addUserEntry(user);

        if (err) {
            alert("Failed to Login!")
        } else {
            alert("Login successfully!")
            setUser(user)
            router.push('profile')
        }
    }

    async function addUserEntry(user) {

        let err = false;
        const apiUrl = "http://localhost:3000/api/adduser"
        await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.err !== 0) {
                    err = true;
                }
            })
            .catch((err) => {
                console.log(err.message);
                err = true;
            });

        return err;
    }

    return (
        <>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    mobile_no: ''
                }}
            >
                <Form>
                    <div className='my-2'><Field id="username" name="username" placeholder="Username" required /></div>
                    <div className='my-2'><Field type="email" id="email" name="email" placeholder="email" required /></div>
                    <div className='my-2'><Field id="mobile_no" type="tel" name="mobile_no" pattern="^\d{10}$" placeholder="Mobile no" required /></div>
                    <div>
                        <Button style={{ margin: "0 auto" }} onClick={handleLogin} type="submit">Login</Button>
                    </div>

                </Form>
            </Formik>
        </>
    )
}