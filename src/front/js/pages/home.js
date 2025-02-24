import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Login } from "../component/login";
import { Navigate } from "react-router-dom";
import { SignUp } from "../component/singup";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<div className="row col-12">
					<div className="col-md-9">
						{store.auth == true ? <Navigate to="/demo" /> : <Login />}
					</div>
					<div className="col-md-3">
						<SignUp />
					</div>
				</div>
			</div>
		</>
	);
};
