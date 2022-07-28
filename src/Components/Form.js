import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const Form = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);

        const url = 'https://agile-earth-14403.herokuapp.com/product';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('New data added successfully')
            })

    }


    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-semibold text-center mt-24 mb-12'>Receipt Details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='date' placeholder='Enter Date' className='border-2 p-3 border-black rounded w-2/6 ml-96  mb-5' {...register("date")} required />

                <input type='number' placeholder='Enter Amount (in INR)' className='border-2 p-3 border-black rounded w-2/6 ml-96     mb-5' {...register("amount")} required />

                {/* <input placeholder='Payment' className='border-2 p-3 border-black rounded w-2/6 ml-96 mb-5' {...register("payment")} required /> */}
                <select className='border-2 p-3 border-black rounded w-2/6 ml-96 mb-5' {...register("payment")} required >
                    <option value="cash">Cash</option>
                    <option value="credit">Credit</option>
                    <option value="Paytm">Paytm</option>
                </select>

                <input type='number' placeholder='Enter Remark' className='border-2 p-3  border-black rounded w-2/6 ml-96 mb-5'  {...register("remark")} required />

                <br />

                <input type="submit" value='Submit' id="" className='border-2 p-3 mt-4 text-xl font-semibold rounded w-2/6  bg-primary' style={{ marginLeft: '380px' }} />
            </form>
        </div>
    );
};

export default Form;