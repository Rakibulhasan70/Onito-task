import React, { useState } from 'react';

const Form = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    const [payment, setPayment] = useState('')
    const [remark, setRemark] = useState('')

    const handleTextBlur = e => {
        setText(e.target.value)
    }

    const handleAmountBlur = e => {
        setAmount(e.target.value)
    }

    const handlePaymentBlur = e => {
        setPayment(e.target.value)
    }

    const handleRemarkBlur = e => {
        setRemark(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(text, amount, payment, remark);
    }


    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-semibold text-center mt-24 mb-12'>Receipt Details</h2>
            <form onSubmit={handleSubmit}>


                <label className='ml-96 mr-6 text-xl font-semibold'>Date:</label>
                <br />
                <input onBlur={handleTextBlur} type="text" name="text" id="" placeholder='Enter Date' className='border-2 p-3 border-black rounded w-2/6 ml-96 mb-5' />

                <label className='ml-96 mr-6 text-xl font-semibold '>Amount:</label>
                <br />
                <input onBlur={handleAmountBlur} type="text" name="amount" id="" placeholder='Enter Amount (in INR)' className='border-2 p-3 border-black  rounded w-2/6 ml-96 mb-5' />

                <label className='ml-96 mr-6 text-xl font-semibold'>Payment:</label>
                <br />
                <input onBlur={handlePaymentBlur} type="text" name="payment" id="" placeholder='Cash' className='border-2 p-3 border-black rounded w-2/6 ml-96 mb-5' />

                <label className='ml-96 mr-6 text-xl font-semibold'>Remark:</label>
                <br />
                <input onBlur={handleRemarkBlur} type="text" name="remark" id="" placeholder='Enter Remark' className='border-2 p-3  border-black rounded w-2/6 ml-96 mb-5' />


                <input type="submit" value='Submit' id="" className='border-2 p-3 mt-4 text-xl font-semibold rounded w-2/6  bg-primary' style={{ marginLeft: '380px' }} />

            </form>
        </div>
    );
};

export default Form;