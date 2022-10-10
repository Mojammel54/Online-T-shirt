import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Sinigle from '../Single-tshirt/Sinigle';

const Shop = () => {
    const tshirts = useLoaderData()

    const [cart, setCart] = useState([])

    const btnadd = (product) => {

        const exist = cart.find(crt => crt._id === product._id)

        if (exist) {

            alert('already exist')

        }
        else {

            const newproduct = [...cart, product]
            setCart(newproduct)

        }



    }

    return (
        <div className='flex'>

            <div className='grid grid-cols-3 ml-32 mt-5'>
                {


                    tshirts.map(tshirt => <Sinigle key={tshirt._id} tshirt={tshirt} btn={btnadd}></Sinigle>)

                }

            </div>


            <div>

                <Cart cart={cart}></Cart>

            </div>


        </div>
    );
};

export default Shop;