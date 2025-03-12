import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Estas logueado', { email, password});
        
        await actions.login(email, password)
        
        navigate('/demo');
               
    };

    return (
        <>
            <div className="container">
                <div className="d-flex align-items-center mt-3 bg-body-tertiary">
                    <div className="form-signin w-100 m-auto">
                        <form onSubmit={handleSubmit}>
                            <h1 className="h3 mb-3 fw-normal"><strong>Please Login</strong></h1>

                            <div className="form-floating mb-2">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInputlogin"
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
                                    id="floatingPasswordlogin"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
