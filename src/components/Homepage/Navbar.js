import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUsingGoogle } from "../../actions";
import { useDispatch, useSelector } from "react-redux"; 
import firebase from "../../firebase/firebase"; 
import { useHistory } from "react-router-dom"; 


function Navbar() {
	const [top, setTop] = useState(true);

	const dispatch = useDispatch(); 
	const userState = useSelector((state) => state.userReducer.user); 

	const history = useHistory(); 

	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				dispatch(loginUsingGoogle(userState)); 
			 }
		}); 
		return unsubscribe(); 
	}, []);

	const handleLogin = (e) => {
		e.preventDefault(); 
		firebase
			.auth()
			.setPersistence("session")
			.then(() => {
				var provider = new firebase.auth.GoogleAuthProvider(); 
				firebase
					.auth()
					.signInWithPopup(provider)
					.then((result) => {
						dispatch(loginUsingGoogle(result.user));
						history.push("/invoice"); 
					})
					.catch((err) => console.log(err)); 
			});
	}

	return (
		<header
			className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
				!top && "bg-white blur shadow-lg"
			}`}
		>
			<div className="max-w-7xl mx-auto px-5 sm:px-6">
				<div className="flex items-center justify-between h-16 md:h-20">
					<div className="flex-shrink-0 mr-4">
						<Link to="/" className="block" aria-label="Cruip">
							{window.innerWidth > 640 ? (
								<img
									src={require("../../Images/Mainlogo.svg").default}
									width="150"
									height="96"
									alt="logo"
								/>
							) : (
								<img
									src={require("../../Images/Favicon.svg").default}
									width="26"
									height="26"
									alt="logo"
								/>
							)}
						</Link>
					</div>

					<nav className="flex flex-grow">
						<ul className="flex flex-grow justify-end flex-wrap items-center">
							<li>
								<Link
									to="/"
									className="font-bold text-primary hover:opacity-75 px-5 py-3 flex items-center transition duration-150 ease-in-out"
								>
									Login
								</Link>
							</li>
							<li>
								<Link to="/" className="btn-sm text-gray-200 hover:opacity-80 ml-3">
									<button 
										onClick={handleLogin}
										className="bg-primary text-white font-semibold rounded-md py-2 px-5">
										<span className="inline-block">Sign up</span>
									</button>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
