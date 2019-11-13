import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Table from '../components/table3/table3';
import Update from '../components/update/update';
import Add from '../components/add/add';
export default () => {
    return (
        <>

        <BrowserRouter>
            <Switch>
                <Route path={"/"} exact={true} component={Table}/>
                <Route path={"/update"} component={Update}/>
                <Route path={"/add"}  component={Add}/>
            </Switch>
        </BrowserRouter>
        </>

    );
}