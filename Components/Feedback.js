
import { Button } from 'react-bootstrap';
import React from "react";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'
import { Formik, Field, Form } from 'formik';

const Feedback = (props) => {
    const router = useRouter()
    const user = props.user;

    async function handleSubmit() {
        console.log("in submit " + user.name)

        const feedback_text = document.getElementById("feedback_text").value;
        if (!feedback_text) {
            alert("Please give feedback")
            return
        }
        user.feedback_text = feedback_text

        const err = await updateUserEntry(user, feedback_text);

        if (err) {
            alert("Failed to submit feedback!")
        } else {
            Cookies.remove('user');
            router.push('login')
        }
    }

    async function updateUserEntry(user) {

        let err = false;
        const apiUrl = "http://localhost:3000/api/updateuser"
        await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(res => res.json())
            .then(res => {
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
        <div style={{display: "flex", justifyContent: "center", marginTop: "15%"}}>
<main>
            <Formik initialValues={{
                feedback_text: '',
            }}>
                <Form>
                    <div className='my-2'><Field id="feedback_text" type="text" name="feedback" placeholder="Feedback" required /></div>

                    <div>
                        <Button onClick={handleSubmit} type="submit">Submit</Button>
                    </div>

                </Form>
            </Formik>
            </main>  
            </div>

        </>
    );
};

export default Feedback;