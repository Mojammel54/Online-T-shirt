import React from 'react';

const Sinigle = ({ tshirt, btn }) => {
    const { name, picture, price } = tshirt
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl shadow-stone-600 gap-5 mb-5  ml-1">
            <figure><img className='h-72' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h1 className='text-lg mr-80'>Price:{price}</h1>
                <div className="card-actions justify-end">
                    <button onClick={() => btn(tshirt)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Sinigle;