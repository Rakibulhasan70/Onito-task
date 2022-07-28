import React from 'react';

const Recipt = ({ user }) => {
    const { date, amount, payment, remark } = user
    return (

        <tr>

            <td>{date}</td>
            <td>{amount}</td>
            <td>{payment}</td>
            <td>{remark}</td>
        </tr>
    );
};

export default Recipt;