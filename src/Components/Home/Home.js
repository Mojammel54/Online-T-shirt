import React from 'react';
import Lottie from 'lottie-react';
import home from './home.json'
const Home = () => {
    return (
        <div>
            <Lottie className='w-[70%] ml-52' animationData={home}></Lottie>
        </div>
    );
};

export default Home;