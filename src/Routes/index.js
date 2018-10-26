import React from 'react';
import {Route} from 'react-router-dom';
import SeriesList from "../Components/SeriesList";
import ShowDetails from "../Components/ShowDetails";

const AppRoute = (props) =>{

    return (
        <switch>
            <Route exact path="/" component={SeriesList}/>
            <Route exact path="/show/:id" component={ShowDetails}/>
        </switch>
        )
}
export default AppRoute;
