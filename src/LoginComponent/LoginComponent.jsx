import React, { useState } from 'react'
import DashboardComponent from '../DashboardComponent/DashboardComponent';

export default function LoginComponent() {
    // State for email
    const [email, setEmail] = useState("");
    // State for Password
    const [password, setPassword] = useState("");
    // State for login or not
    const [login, setLogin] = useState(false);
    // State variable for username 
    const [username, setUsername] = useState(false);
    // Form Errors state
    const [formErrors, setFormerrors] = useState({});
    // Check the valid Form
    const [formvalid, setFormvalid] = useState(true)

    // Checking the Mail Validations
    const checkEmail = (e) => {
        setEmail(e.target.value);
        const regex = RegExp(
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        );
        let x = e.target.value;
        let valid;
        if (!regex.test(x)) {
            setFormerrors({ error: "Enter a Valid Mail" })
        }
        else {
            setFormerrors({ error: '' });
            valid = x && password;
        }
        setFormvalid(!valid);
        setUsername(x.slice(0, x.indexOf('@')));
    }
    const checkPassword = (e) => {
        setPassword(e.target.value);
        let pass = e.target.value;
        let valid;
        if (pass === "") {
            setFormerrors({ error1: 'Enter the Password' })
        }
        else if (pass.length < 8) {
            setFormerrors({ error1: 'Password Length to be greater than 8' })
        }
        else {
            setFormerrors({ error1: '' });
            valid = email && pass;
        }
        setFormvalid(!valid);
    }
    const submit = (e) => {
        setLogin(true);
    }
    if (login) {
        return <DashboardComponent username={username} />;
    }
    else {
        return (<div className="container d-flex justify-content-center flex-md-column" style={{ height: '100vh' }}>
            <div className="row">
                <h3 className='text-center'>Login Form</h3>
                <form action="" className='col-md-6 offset-md-4 '>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail" onChange={e => checkEmail(e)} value={email} />
                        </div>
                    </div>
                    <div className='text-danger'>{formErrors.error}</div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" onChange={e => checkPassword(e)} value={password} />
                        </div>
                    </div>
                    <div className='text-danger'>{formErrors.error1}</div>
                    <button type="submit" className="btn btn-primary " disabled={formvalid} onClick={e => submit(e)}>Sign in</button>
                </form>
            </div>
        </div>)
    }

}
