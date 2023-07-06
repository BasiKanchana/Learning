import React from 'react'
import "./Header.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom'
 import { useStateValue } from './StateProvider';


function Header() {
 const [{basket}, dispatch] = useStateValue(0);


 
  return (
    <header className='container-fluid '>

       <div className='row '>
        
        <div className=" col-lg-2  Header_logo-part">
        <Link to="/" style={{textDecoration:"none"}} >  
             <StorefrontIcon  className='storefrontIcon'  />
             <span  className='header-tittle'>eShop </span></Link> 
         </div>
          
         <div className=" col-lg-7  Header_Search_Bar">   
             <input type="search" className='input-search-bar' name="search" ></input>
             <SearchIcon    className='header-search-icon' />
         </div>
        <nav className='col-lg-3'>

          <div className='row'>   
         
                <div className=" col-lg-4 header-nav-item  ">
               <Link to="/Login"   style={{textDecoration:"none" , color:"white"}}>
                    <span className='header-nav-item-first-line'>Hello Gest</span>
                    <h5 className='header-nav-item-second-line'> Sign In</h5>
                    </Link>
                </div>
           
                <div className=" col-lg-4 header-nav-item">
                    <span className='header-nav-item-first-line'>Your</span>
                    <h5 className='header-nav-item-second-line'>Shop</h5>
                </div>
               
                <div className=" col-lg-4 header-nav-item-basket-section ">
                <Link to="/CheckOut" style={{textDecoration:"none"}}>
                   <ShoppingBasketIcon className='shoppingBasketIcon'/>
                   <span className='header-nav-item-count  Basket-Counter' >{basket.length}</span> </Link>
           
                </div>
               
           </div>

        </nav>
       </div>   
    </header>
  )
}

export default Header;