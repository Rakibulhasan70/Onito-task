import React, { useEffect, useState } from 'react';
import Recipt from './Recipt';

const Receipts = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/info')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [datas])

    return (
        <div className='my-24'>
            <h2 className='text-3xl font-semibold text-center my-12'> Show all Receipts</h2>
            <div class="overflow-x-auto">
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Payment Method</th>
                            <th>Remark</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map(user => <Recipt
                                key={user._id}
                                user={user}
                            ></Recipt>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Receipts;