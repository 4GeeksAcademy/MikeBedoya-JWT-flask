import { Login } from "../component/login";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			auth: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");


			},
			signup: (email, password) => {
				const requestOptions = {
					method: "POST",
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify({
						"email": email,
						"password": password
					})
				};
			
				fetch("https://laughing-engine-r4r7qx5w7qv72pxj-3001.app.github.dev/api/signup", requestOptions)
				.then((response) => {
					if (!response.ok) {
						throw new Error("Error al crear el usuario. Verifica los datos o intenta más tarde.");
					}
					return response.json(); 
				})
				.then((result) => {  
					setStore({ auth: true });  
					localStorage.setItem('token', result.access_token);  
				})
			},
			
			logout: () => {
				setStore({ auth: false });
				localStorage.removeItem('token');
			},
			login: (email, password) => {
				console.log('algo desde flux')
				const requestOptions = {
					method: "POST",
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify(
						{
							"email": email,
							"password": password
						}
					)
				};
				fetch(process.env.BACKEND_URL + '/api/login', requestOptions)
					.then((response) => {
						if (response.status == 200) {
							setStore({ auth: true });
						} else {
							setStore({ auth: false });
						}
						return response.json()
					})
					.then((data) => {
						localStorage.setItem('token', data.access_token);
						console.log(data)
					});
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store

			}
		}
	};
};

export default getState;
