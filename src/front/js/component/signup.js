import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Usuario agregado', { email, password});
        actions.createUser(email, password);
    };

    return (
        <>
            <div className="container">
                <div className="d-flex align-items-center mt-3 bg-body-tertiary">
                    <div className="form-signin w-100 m-auto">
                        <form onSubmit={handleSubmit}>
                            <h1 className="h3 mb-3 fw-normal"><strong>Please sign up</strong></h1>

                            <div className="form-floating">
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
                            <button className="btn btn-primary w-100 py-2" type="submit">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
