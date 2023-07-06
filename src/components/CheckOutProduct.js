import React from 'react'
import './CheckOutProduct.css';
import { useStateValue } from './StateProvider';

export default function CheckOutProduct({id,title,price,rating,image}) {

  const [{basket}, dispatch] = useStateValue();
    const RemoveFromBasket = () => {
      dispatch({
        type : "REMOVE_FROM_BASKET",
          id : id,
      })
    }
          

  return (
    <div className='container-fluid'>
 <div class="card   mb-3" >
  <div class="row g-0  CheckOut_Product_Section'">
    <div class="col-md-4 Checkout_Product_img">
      <img src={image} />
    </div>
    <div class="col-md-8">
      <div class="card-body ">
        <h5 class="card-title">{title}</h5>
        <span className='Curency_symbol'>$</span>
        <span class="card-text" className='Curency_symbol'>{price}</span>
        <span class="card-text products_rating  d-flex" >
          <small class="text-muted">{Array(rating).fill().map((_,i) => <span>⭐</span>)}</small>
        </span>
        
        <p className='py-4'>
          <button type='button' className='Remove_button ' onClick={RemoveFromBasket}>Remove from Basket</button>
          </p>
      </div>
    </div>
   </div>
  </div>
</div>

 
  )
}
