import React, {useState,useEffect} from 'react';
import Style from './style'
import caret from '../../assets/icons/caret-down-solid.svg';
import caret2 from '../../assets/icons/caret-up-solid.svg';
import {Link} from 'react-router-dom';
import axios from 'axios';





const arraySort = require('array-sort');

export default () => {

    const [frontEndTeam, setFrontEndTeam ]= useState([]);
    const [nameSortType, setNameSortType] = useState("");

    useEffect(()=>{
        axios.get('https://personal-app-team.herokuapp.com/api/team').then(res=>{
            console.log("response", res.data);
            setFrontEndTeam(res.data)
        });
    },[]);



    const Row = ({name, company, email, phone, address,id}) => (
        <div className="row">
            <div>{name}</div>
            <div>{company}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{address}</div>
            <button type="button" className='btn btn-danger' onClick={()=>deleteUser(id)}>Delete</button>

            <Link to='/update'>
                <button type="button" className="btn btn-info">Edit</button>
            </Link>

        </div>
    );

    const deleteUser=(id)=>{
        setFrontEndTeam([...frontEndTeam.filter((sin) => sin.id !== id)])
    };




    const sortBy = (x) => {
        if(!nameSortType || nameSortType==="DESC"){
            setFrontEndTeam(arraySort(frontEndTeam, x));
            setNameSortType("ASC")

        }else {
            setFrontEndTeam(arraySort(frontEndTeam,x ,{reverse: true}  ));
            setNameSortType("DESC")
        }
    };



    const rows = frontEndTeam.map( (rowData) => <Row {...rowData} />);


    return (
        <>

        <div className="table">
            <div className="header">
                <div  onClick={()=>sortBy('name')}>{nameSortType&&nameSortType==="ASC"?<img src={caret} />:<img src={caret2}/>}Name</div>
                <div onClick={() => sortBy('company')}>{nameSortType&&nameSortType==="ASC"?"Company":"Company"}</div>
                <div onClick={() =>  sortBy('email')}>{nameSortType&&nameSortType==="ASC"?"Email":"Email"}</div>
                <div onClick={() => sortBy('phone')}>{nameSortType&&nameSortType==="ASC"?"Phone":"Phone"}</div>
                <div onClick={() => sortBy('address')}>{nameSortType&&nameSortType==="ASC"?"Address":"Address"}</div>

                <Link to='/add'>
                    <button type="button" className="btn btn-info">ADD</button>
                </Link>
            </div>

            <div className="body">
                {rows}
            </div>
        </div>
        <Style/>

        </>
    );


}

