// import React, { useContext, useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserContent } from "../App";
// import "./style.css";
// const Login = () => {
// 	const [account, setAccount] = useState([]);

// 	// nó ở trên cùng một trang nên cứ import cho nhau thôi
// 	const { setUser } = useContext(UserContent);
// 	const emailRef = useRef();

// 	const nameRef = useRef();
// 	// const navigate = useNavigate();
// 	useEffect(() => {
// 		fetch("http://localhost:8000/users")
// 			.then((res) => res.json())
// 			.then((res) => {
// 				setAccount(res);
// 			});
// 	}, []);

// 	const handleLogin = () => {
// 		console.log(account);
// 		const username = nameRef.current.value;
// 		const email = emailRef.current.value;
// 		if (!username || !email) {
// 			return window.alert("Please enter all input");
// 		}


// 		const some = account.find( // item là người nằm trong mảng
// 			(item) => item?.email === username && item?.password === email
// 		);
// 		if (!some) {
// 			console.log(username);
// 			console.log(email);
// 			return window.alert("Username or email is not correct");
// 		}
// 		setUser({ ...some }); // dải ra đối tươngj some
// 		console.log("oke nhé");
// 		// navigate("/albums/all"); // thanh cong điều hướng đến đây
// 	};
// 	return (

// 		<div className="wrapper">
// 			<form className="form-signin">
// 				<h2 className="form-signin-heading">Please login</h2>
// 				<input type="text" className="form-control" ref={nameRef} name="username" placeholder="Email Address" required="" autofocus="" />
// 				<input type="password" ref={emailRef} className="form-control" name="password" placeholder="Password" required="" />
// 				<label className="checkbox">
// 					<input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
// 				</label>
// 				<button className="btn btn-lg btn-primary btn-block" onClick={handleLogin} type="submit">Login</button>
// 			</form>
// 		</div>
// 	);
// };

// export default Login;


import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContent } from "../App";
import "./style.css";
const Login = () => {
    const [account, setAccount] = useState([]);
    const [newAccount, setNewAccount] = useState({});
    // json-server --watch db.json
    // nó ở trên cùng một trang nên cứ import cho nhau thôi
    const { setUser } = useContext(UserContent);
    const emailRef = useRef(); //

    const nameRef = useRef();
    const passRef = useRef();
    const repassRef = useRef();

    const navigate = useNavigate();
    useEffect(() => {
      fetch("http://localhost:3000/users",
      {method : "GET"}
      )
        .then((res) => res.json())
        .then((res) => {
          setAccount(res);
        });
    }, []);

   
        const handleSignUp = (event) => {
            event.preventDefault();
            const username = nameRef.current.value;
            const email = emailRef.current.value;
            const password = passRef.current.value;
            const repassword = repassRef.current.value;
            const id = account.length + 1;
            if (!username || !email || !password || !repassword) {
              window.alert("Please enter all input");
              return;
            }
        
            if (password !== repassword) {
              window.alert("Confirm password different from password");
              return;
            }
            const some = account.find( // tìm thấy some != null
              (item) => item?.email === email
            );
            if(some != null || some != ""){
              window.alert("Mail is existed");
              return;
            }
        
            const newAccount = {
                id,
              name: username,
              email,
              password,
            };
        
            fetch("http://localhost:3000/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newAccount),
            })
              .then((res) => res.json())
              .then((res) => {
                setUser(res); // set user ở đây sau khi lấy được thông tin từ server
                navigate("/login");
              })
              .catch((error) => {
                console.log(error);
                window.alert("Cannot create new account!");
              });
          };
    


    return (
        <div class="wrapper">
            <form class="form-signin">
                <h2 class="form-signin-heading">Please Sign Up</h2>
                <input type="text" ref={nameRef} class="form-control" name="username" placeholder="Your Name" required="" autofocus="" />
                <input type="text" ref={emailRef} class="form-control" name="username" placeholder="Email Address" required=""
                    autofocus="" />
                <input type="password" ref={passRef} class="form-control" name="password" placeholder="Password" required="" />
                <input type="password" ref={repassRef} class="form-control" name="cfpassword" placeholder="Confirm Password" required="" />
                <label class="checkbox">
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                </label>
                <button class="btn btn-lg btn-primary btn-block" onClick={handleSignUp} type="submit">Register</button>
            </form>
        </div>
    );
};

export default Login;