import React from 'react'
import './CheckOut.css' ;
import Subtotal from './Subtotal';
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from './StateProvider';


export default function CheckOut() {
  const [ {basket}, dispatch] = useStateValue();
 

  return (
    <div className='contianer-lg-fluid px-0  '>
      <div className='row  mx-0'>
        <div className='col-lg-9 CheckOut_Section  '>
          <p  className='CheckOut_poster-image '><img src="https://as1.ftcdn.net/v2/jpg/04/64/63/66/1000_F_464636683_czDpfMgTlPeRkWJHco1Sjs8HgUXIiLR8.jpg" width={"100%"}  height={"120px"} alt="" /></p>
           <h3>Your Shopping Basket</h3>
           {basket.map(item => (
                <CheckOutProduct 
                      id = {item.id}
                      title = {item.title}
                      image = { item.image} 
                      price = { item.price}
                      rating = { item.rating}/>
           ))

        }
         
        </div>
        <div className='col-lg-3 ' >
         <Subtotal/>
       
        </div>
      </div>


    </div>
  );
}
