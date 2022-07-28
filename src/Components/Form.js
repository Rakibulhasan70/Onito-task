import React from 'react';
import { useForm } from 'react-hook-form';


const Form = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);

        const url = 'http://localhost:5000/product';
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
            })

    }


    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-semibold text-center mt-24 mb-12'>Receipt Details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Enter Date' className='border-2 p-3 border-black rounded w-2/6 ml-96  mb-5' {...register("date")} />

                <input placeholder='Enter Amount (in INR)' className='border-2 p-3 border-black rounded w-2/6 ml-96     mb-5' {...register("amount")} />

                <input placeholder='Payment' className='border-2 p-3 border-black rounded w-2/6 ml-96 mb-5' {...register("payment")} />

                <input placeholder='Enter Remark' className='border-2 p-3  border-black rounded w-2/6 ml-96 mb-5'  {...register("remark")} />

                <br />

                <input type="submit" value='Submit' id="" className='border-2 p-3 mt-4 text-xl font-semibold rounded w-2/6  bg-primary' style={{ marginLeft: '380px' }} />
            </form>
        </div>
    );
};

export default Form;