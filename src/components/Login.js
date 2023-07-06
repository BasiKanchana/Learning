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
              <div className='Login_form text-center'  >
                
                <div className='Login text-center'>
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
                        <div class="mb-3">
                           <label for="exampleFormControlInput1" class="form-label"><strong>Email </strong></label>
                                 <input type="email" class="form-control" value={email}  onClick={(e) => setEmail(e.target.value)}placeholder="Enter Email"></input>
                        </div>
                        <div class="mb-3">
                           <label for="exampleFormControlPassword" class="form-label"><strong>Password</strong></label>
                           <input type="password" class="form-control" value={password}  onClick={(e) => setPassword(e.target.value)}placeholder="Enter Password"></input>
                       
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
