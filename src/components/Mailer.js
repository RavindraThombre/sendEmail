import React from 'react';
import emailjs from 'emailjs-com';

const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_86ca493', 'template_g4ej3ip', e.target, "user_brZ4w1ShSsfizyaEHcgzq"
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (
        <div className="container border"
            style={{
                marginTop: "50px",
                width: "50%",
                backgroundImage: `url('https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
            <h1 style={{
                marginTop: "25px",
                color: "white"
            }}>Contact Form</h1>
            <form style={{
                margin: "25px 85px 75px 100px"

            }} onSubmit={sendEmail}>
                <label style={{
                    color: "white"

                }}>Name</label>
                <input type="text" name="name" className="form-control" />

                <label style={{
                    color: "white"

                }}>Email</label>
                <input type="email" name="user_email" className="form-control" />

                <label
                    style={{
                        color: "white"

                    }}>Message</label>
                <textarea name="message" row="4" className="form-control" />
                <input type="submit"
                    value="send"
                    className="form-control btn btn-primary"
                    style={{
                        marginTop: "30px"

                    }}
                />
            </form>
        </div >
    );
};

export default Mailer;
