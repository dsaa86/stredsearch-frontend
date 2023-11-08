import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

import { extractUniqueValuesFromArray, prettifyString } from '../../AppHelperFunctions';

export default function SORouteSelect({soRouteData}){

    const getRouteCategories = () => {
        const allCategories = soRouteData.map(route =>
            route.route_category
        );
        return extractUniqueValuesFromArray(allCategories);
    }

    const getRoutesFromCategories = (routeCategories, soRouteData) => {
        // This function will extract all the routes from the routeCategories array
        // The final object will have this structure:

        // obj = {
        //     cat1 : [route1, route2, route3],
        //     cat2 : [route1, route2, route3],
        //     ...etc
        // }
        let extractedRoutes = {}
        routeCategories.forEach(category => {
            extractedRoutes[category] = [];
        });

        soRouteData.forEach(route => {
            extractedRoutes[route.route_category].push(route.route_query);
        });
        return extractedRoutes;
    }

    const handleRouteCategoryChange = event => {
        setRouteCategory(event.target.value);

        setRoutes(
            secondaryRoutes[event.target.value].map(
                route =>
                    <option value={route}>{prettifyString(route)}</option>
            )
        );
    };


    const [routeCategory, setRouteCategory] = useState();
    const [routes, setRoutes] = useState([]);

    const routeCategories = getRouteCategories();
    const secondaryRoutes = getRoutesFromCategories(routeCategories, soRouteData)
    
    useEffect(() => {
        if(routeCategories.length > 0){
            const defaultCategory = routeCategories[0];
            setRouteCategory(defaultCategory);
            setRoutes(
                secondaryRoutes[defaultCategory].map(
                    route =>
                        <option value={route}>{prettifyString(route)}</option>
                )
            );
        }
    }, []);

    return(
        <div className="stack-options-route-select-container">
                <span className="row-padding">Search Category</span>
                <select className="row-padding row-margin" value={routeCategory} onChange={handleRouteCategoryChange}>
                    {
                        routeCategories.map(route =>
                            <option value={route}>{prettifyString(route)}</option>
                        )
                    }
                </select>
                <span className="row-padding row-margin">Search Routes</span>
                <select className="row-padding" id="so-route-selector">
                    {routes}
                </select>
            </div>
    );
}