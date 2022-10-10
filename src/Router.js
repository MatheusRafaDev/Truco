import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { Component } from 'react';


import Pagina1 from "./pages/pagina1";
import Pagina2 from "./pages/pagina2";


export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Pagina1} exact={true}/>
                <Route path="/truco" component={Pagina2} />
            </Switch>
        </BrowserRouter>
    );
}