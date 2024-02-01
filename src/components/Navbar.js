import { useEffect, useState } from 'react'
import React from 'react'
import Signup from './Signup'
import Userinfomodal from './Userinfomodal'
import Login from './login';
import { Link } from 'react-router-dom';




export default function Navbar(props) {

    const [userDescription,setUserDescription]=useState([]);
    const [loginbutton,setloginbutton] = useState(true);
    const [signupbutton,setsignupbutton] = useState(true);
    const[username,setusername]=useState('');
   
    const updateUserDescription = (newDescription) => {
        setUserDescription(newDescription);
        setusername(newDescription[0]+" "+newDescription[1]);
      };

    const buttonhandler = () => {
        setloginbutton(true);
        setsignupbutton(true);
    };

    //   useEffect(() => {
    //     console.log(userDescription);
    //   });
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">codebytemart</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="About.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li> */}
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/product">Product</Link>
                                
                            </li>
                        </ul>
                        {/* <!-- Button trigger modal --> */}
                        <button type="button" className="btn btn-outline-success image-btn" data-bs-toggle="modal" data-bs-target="#userinfo" style={{ borderRadius: '2px', paddingRight: '5px', border: 'none', background: 'transparent' }}>
                            <div className="container">
                                <img src="https://img.freepik.com/premium-vector/art-illustration_890735-11.jpg?w=1060" alt="Image Button" style={{ maxWidth: '100%', borderRadius: '25px', height: '40px' }} />
                            </div>
                        </button>

                        <div className="mx-2">
                            <p id="username" style={{ color: 'white' }}>{username}</p>
                            </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>


                        </form>
                        <div className="mx-2">
                            <button className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#LoginModal" disabled={!loginbutton}>Login</button>
                            <button className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#SignUpModal" disabled={!signupbutton}>Sign up</button>
                        </div>
                    </div>
                </div>
            </nav>



            <Userinfomodal user ={userDescription} />

            <Login updateUserDescription={updateUserDescription} buttonhandler={buttonhandler}/>

          <Signup updateUserDescription={updateUserDescription} buttonhandler={buttonhandler}/>
        </>
    )
}
