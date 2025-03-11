import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Login } from "../component/login";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { SignUp } from "../component/singup";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12 mb-3">
						{store.auth ? <Navigate to="/demo" /> : <Login />}
					</div>
					<div className="col-12 text-center">
						<h5> Or </h5>
						<Link to="/signup">
							<button
								className="btn btn-primary mt-2 px-5 py-3"
								style={{ fontSize: "1.2rem", width: "200px" }}
								type="submit"
							>
								Sign Up
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
