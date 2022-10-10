import React, { useContext } from 'react';
import { TshirtContext } from '../main/Main';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,  } from 'recharts';

const Chart = () => {

    const chart = useContext(TshirtContext)
    console.log(chart)


    return (
        <div>
            <h1 className='mt-8 text-5xl text-red-600 font-extrabold'>Price chart</h1>
            <div className='mt-28'>
                <AreaChart
                    width={1500}
                    height={500}
                    data={chart}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>




            </div>

        </div>



    );
}


export default Chart;