import React from 'react';
export default () => (
    <style js="true">{`
table{
    font-family: "Montserrat", sans-serif;
    width: 100%;
    border-collapse: collapse;

}
tr{

    text-align: left;
}
thead >tr >th:nth-child(1){
    padding-left:150px;
}

tbody >tr:nth-child(odd){
    background-color: rgba(0, 0, 0, 0.05);
    border-top: 1px solid #c1c1c145;
    border-bottom: 1px solid #c1c1c145;
}

tbody >tr >td:nth-child(1){
    padding-right: 0px;
    padding-left:150px;
    color: #24b8f0;
    text-decoration: none;
    font-weight: 800;
}

tbody >tr >td{
    font-size: 15px;
    line-height: 1.33;
    color: #54585a;
    font-weight: normal;
}

td {
    padding:40px;

}

thead{
    background: #01c2c4;
}

thead th{
    background: #01c2c4;
    padding: 30px;
    color: white;
    line-height: 1.5;
    font-weight: 600;
    font-size: 15px;
}

    `}</style>
);