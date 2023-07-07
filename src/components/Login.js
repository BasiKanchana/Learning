import React from 'react'
import './Login.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useState } from 'react';
import { Link , useNavigate} from "react-router-dom";
import auth from "./firebase";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';




 function Login() {

    const [ email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const SignIn = (e) => {
        e.preventDefault();
       signInWithEmailAndPassword( auth , email, password)
       .then( auth   => {
         navigate('/');

            })
            .catch(error => alert(error.massage))
        }
     const register = (e) => {
        e.preventDefault();
       createUserWithEmailAndPassword( auth, email,password)
                   .then((auth) => {
                    if(auth) {
                     navigate('/')
                    }
                   })
                   .catch(error => alert(error.message))
     }
   
  return (  
              <div className='Login_form container-fluid text-center'  >
                
                <div className='Login '>
                    <Link to="/" style={{textDecoration:"none"}}>
                    <div className='Login_Logo'>
                        <StorefrontIcon  className='logo_StoreIcon'/>
                        <span className='Logo_tittle'><strong>eShop</strong></span>
                    </div>
                    </Link>
                </div>
                <div className='sing_In_section'>

                 <div className='login_continer  '>
                        <h1>Sign-in</h1>

                    <form>
                        <div className="mb-3">
                          <strong>Email </strong>
                                 <input type="email" className="form-control" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"></input>
                        </div>
                        <div className="mb-3">
                    <strong>Password</strong>
                           <input type="password" className="form-control" value={password}  onChange={(e) => setPassword(e.target.value)}placeholder="Enter Password"></input>
                       
                        </div> 
                        <div className='Sign_in'>
                           <button type='button'  className='sign_in_button' onClick={ SignIn}>sign In</button>
                        </div>
                    </form>
                    <p className='py-2'>By signing-in you agree to the eShop Website conditions o Use & Sale. Please see our Privacy Notice our Cookies Notice an our Interest_Based Ads Notice.</p>
                   
                    <button type='button' className='Create_eshop_account ' onClick={register}> Create Your eshop Account</button>
                </div>
                </div>
               
                </div>
  )
} 
export default Login;
