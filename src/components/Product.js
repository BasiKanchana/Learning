import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';


  
 function Product( {id, image,title,price,rating } ) {
  const  [state,dispatch] = useStateValue();
  
  const addToBasket = () => {
    dispatch ({
      type: "ADD_TO_BASKET",
      item : {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <section > 
    <div className='Products_section'>
      <div className='Products'>
         <div class="Product_info" >
             <p>{title}</p>
             <h3 className='Product_Price'>
                <span>$</span>
                <span>{price}</span>
             </h3>
             <h4 className='Product_rating d-flex'>{Array(rating).fill().map((_,i) => <p>⭐</p>)}</h4>
         </div>

             <img src={image} /> 
            <div className='Product_button'>
               <button type='button' onClick={addToBasket}>Add to Basket</button>
            
            </div>   
      </div>
    </div>

    </section>
  )
}
export default  Product;
