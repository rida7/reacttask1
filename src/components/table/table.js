import React from 'react';
import Style from './style'

export default(props)=>{



    return(
        <>
        <table>
            <thead>
            <tr>
                <th><button
                >Name</button></th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            {
                props.data.map(row =>(
                    <tr>
                        <td>{row.name}</td>
                        <td>{row.company}</td>
                        <td>{row.email}</td>
                        <td>{row.phone}</td>
                        <td>{row.address}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        <Style/>
        </>
    );
}