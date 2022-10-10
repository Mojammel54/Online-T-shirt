import React from 'react';
import Details from '../details/Details';
import './Cart.css'

const Cart = ({ cart }) => {
    let price = 0;
 

    cart.forEach(crt => {

        price = price + parseInt(crt.price)


    });


    return (
        <div>

            <h1 className={cart.length === 2 ? 'red' : 'green'}> total:{cart.length}</h1>



            {

                cart.map(singleCart =>

                    <Details singleCart={singleCart} key={singleCart._id}></Details>
                )

            }

            <h2>total:{price}</h2>

            {

                cart.length === 1 ? <p>u selected one </p> : <p> please select atleast one </p>


            }
            {

                cart.length === 2 && <p>u selected two </p>

            }



        </div>
    );
};

export default Cart;