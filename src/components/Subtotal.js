import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

 function Subtotal() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div  className='subtotal py-4 bg-light my-2 border border-seconday'>
        <div className='mx-4'>
        <CurrencyFormat
            renderText = {(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>${value}</strong>
                </p>
           
                   <small className='subtotal_gift'>
                   <input type="checkbox" />      This order contains a gift
                   </small>
                   <div className='my-4'>
                    <button type='button' className='proceed_to_checkout'>Proceed to Checkout</button>
                   </div>
                  
                </>

            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
       />
       </div>
    </div>
  );
}
export default Subtotal;
