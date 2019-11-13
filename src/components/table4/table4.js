import React, {useState} from 'react';
import Style from './style'
import data from '../../data/data1.json';
import sortBy from 'array-sort-by';
import caret from '../../assets/icons/caret-down-solid.svg'
/*
 Row component written as a simple function:
 https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components

 Any components that do not have state should be written this way,
 see: https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
 */

const Row = ({name, company, email, phone, address}) => (
    <div className="row">
        <div>{name}</div>
        <div>{company}</div>
        <div>{email}</div>
        <div>{phone}</div>
        <div>{address}</div>
        <button>Delete</button>
    </div>
);
const arraySort = require('array-sort');
export default () => {


    const [frontEndTeam, setFrontEndTeam ]= useState(data);
    const [nameSortType, setNameSortType] = useState("");

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
                <div  onClick={()=>sortBy('name')}>{nameSortType&&nameSortType==="ASC"?<i className= "fas fa-chevron-up"/>:<i className= "fas fa-chevron-down"/>}Name</div>
                <div onClick={() => sortBy('company')}>{nameSortType&&nameSortType==="ASC"?"Company":"DESCENDING"}</div>
                <div onClick={() =>  sortBy('email')}>{nameSortType&&nameSortType==="ASC"?"Email":"DESCENDING"}</div>
                <div onClick={() => sortBy('phone')}>{nameSortType&&nameSortType==="ASC"?"Phone":"DESCENDING"}</div>
                <div onClick={() => sortBy('address')}>{nameSortType&&nameSortType==="ASC"?"Address":"DESCENDING"}</div>
            </div>
            <div className="body">
                {rows}
            </div>
        </div>
        <Style/>
        </>
    );


}

/*
 * Render the above component into the div#app
 */
