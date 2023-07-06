// import logo from './logo.svg';
 import React from 'react'
  import Header from './components/Header';
  import Home from './components/Home'
  import CheckOut from './components/CheckOut';
  import { BrowserRouter as  Router,Routes, Route } from "react-router-dom";
  import Login from './components/Login';
 
 
 
 function EshopWeb() {
   return (
     <div  className='container-lg-fluid' >
      <Router>
         <Routes>
         <Route path="/Login" exact element={<Login/>}></Route>
          <Route path='/' exact element={(<><Header/> <Home/></>)}></Route>
          <Route path='/CheckOut' exact element={(<><Header/> <CheckOut/></>)}></Route>  
          

          {/* <Route path="/"  exact render={() => ( <> 
                                                   <Header/>
                                                   <Home/>
                                                </>)}/>

           <Route path="/CheckOut" exact render={() => (
                                                          <>
                                                          <Header/>
                                                          <CheckOut/>
                                                          </>
                                                        )}> </Route> */}
          
           </Routes>
          
      </Router>
     
     </div>
   );
 }
 
 
export default EshopWeb;