import React from'react';
import Style from './style';
import 'bootstrap/dist/css/bootstrap.min.css';


export default()=>{

    return (
        <>
        <form className='demoForm'>
            <h2>Add</h2>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' className='form-control' name='name'  required/>


            </div>

            <div className='form-group'>
                <label htmlFor='company'>Company</label>
                <input type='text' className='form-control' name='company' required />
            </div>

            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='text' className='form-control' name='email' pattern='[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[A-Za-z]{2,4}' title="for example: abc@gmail.com" required/>
            </div>

            <div className='form-group'>
                <label htmlFor='phone'>Phone</label>
                <input type='phone' className='form-control' name='phone' pattern="\+([0-9]{1})?\(?([0-9]{3})\)?([0-9]{3})?[-.]?([0-9]{4})?" title="example: +1(222)333-4444" required/>


            </div>

            <div className='form-group'>
                <label htmlFor='address'>Address</label>
                <input type='text' className='form-control' name='address' required/>
            </div>

            <button type='submit' className='btn btn-primary'>
                SAVE
            </button>
        </form>
        <Style/>
        </>
    )
}
