import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const SignUp = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        console.log('Has creado tu usuario', { email, password });

        await actions.signup(email, password);

        navigate('/login');
    };

    return (
        <>
            <div className="container">
                <div className="d-flex align-items-center mt-3 bg-body-tertiary">
                    <div className="form-signin w-100 m-auto">
                        <form onSubmit={handleSignup}>
                            <h1 className="h3 mb-3 fw-normal"><strong>Sign up</strong></h1>

                            <div className="form-floating mb-2">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>

                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <button onClick={() => handleSignup()} className="btn btn-primary w-100 py-2" type="submit">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
