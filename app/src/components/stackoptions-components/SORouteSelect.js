import {useEffect, useState} from 'react';
import Axios from 'axios';
import './StackOptionsStyle.css';

import { extractUniqueValuesFromArray, prettifyString } from '../../AppHelperFunctions';

const updateSoSearchFieldStatus = (currentRoute, setSoFieldStatus, fieldStatus) => {
    if(currentRoute === "question_by_tag"){
        setSoFieldStatus(fieldStatus.question_by_tag);
    } else if(currentRoute === "related_questions"){
        setSoFieldStatus(fieldStatus.related_questions);
    } else if(currentRoute === "search"){
        setSoFieldStatus(fieldStatus.search);
    } else if(currentRoute === "advanced-search"){
        setSoFieldStatus(fieldStatus.advanced_search);
    }
};


export default function SORouteSelect({fieldStatus, soFieldStatus, setSoFieldStatus, soSearchData, setSoSearchData}){

    const [soRouteData, setSoRouteData] = useState(false);
    const [routeCategories, setRouteCategories] = useState();
    const [currentCategory, setCurrentCategory] = useState();
    const [mappedRoutesFromCategories, setMappedRoutesFromCategories] = useState();
    const [routes, setRoutes] = useState([]);
    const [currentRoute, setCurrentRoute] = useState();

    useEffect(() => {
        fetchSoRouteData();
    }, []);

    useEffect(() => {
        if(soRouteData){
            setRouteCategories(getRouteCategories());
        }}, [soRouteData]);

    useEffect(() => {
        if(routeCategories){
            setCurrentCategory(routeCategories[0]);
        }
    }, [routeCategories]);

    useEffect(() => {
        if(currentCategory){
            setMappedRoutesFromCategories(getMappedRoutesFromCategories());
        }
    }, [currentCategory]);

    useEffect(() => {
        if(mappedRoutesFromCategories){
            setRoutes(mappedRoutesFromCategories[currentCategory]);
        }
    }, [mappedRoutesFromCategories]);

    useEffect(() => {
        if(routes && mappedRoutesFromCategories){
            setCurrentRoute(mappedRoutesFromCategories[currentCategory][0]);
        }
    }, [routes, mappedRoutesFromCategories]);

    useEffect(() => {
        if(currentRoute && currentCategory){
            setSoSearchData({...soSearchData, category : currentCategory, route : currentRoute,})
        }
    }, [currentRoute, currentCategory]);

    useEffect(() => {
        updateSoSearchFieldStatus(currentRoute, setSoFieldStatus, fieldStatus)
    }, [currentRoute]);

    const fetchSoRouteData = async () => {
        const response = await Axios('http://localhost:8000/stack/get/routes/');
        setSoRouteData(response.data);
    }

    const getRouteCategories = () => {
        if (!soRouteData) {
            return [];
        }
        const allCategories = soRouteData.map(route =>
            route.route_category
        );
        return extractUniqueValuesFromArray(allCategories);
    }

    const getMappedRoutesFromCategories = () => {
        // This function will extract all the routes from the routeCategories array
        // The final object will have this structure:

        // obj = {
        //     cat1 : [route1, route2, route3],
        //     cat2 : [route1, route2, route3],
        //     ...etc
        // }
        if (!soRouteData && !routeCategories) {
            return [];
        }
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
        setCurrentCategory(event.target.value);
        setRoutes(
            mappedRoutesFromCategories[event.target.value]
        );
        updateSoSearchFieldStatus(event, setSoFieldStatus, fieldStatus)
    };

    const handleRouteChange = event => {
        setCurrentRoute(event.target.value);
        // updateSoSearchFieldStatus(event, setSoFieldStatus, fieldStatus)
    };
    
    return(
        <div id="route-option-row" className="row">
            {soRouteData && currentCategory && currentRoute ? (
                <>
                <div id="search-category-label-and-select" className="col-sm-6 col-12">
                    <div className="row">
                        <div id="search-category-label" className="col-sm-6 col-12">
                            <span>Search Category</span>
                        </div>
                        <div id="search-category-select" className="col-sm-6 col-12">
                            <select className="col" value={currentCategory} onChange={handleRouteCategoryChange}>
                                {
                                    routeCategories.map((route, index) =>
                                        <option key={index} value={route}>{prettifyString(route)}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div id="search-route-label-and-select" className="col-sm-6 col-12">
                    <div className="row">
                        <div id="search-route-label" className="col-sm-6 col-12">
                            <span>Search Routes</span>
                        </div>
                        <div id="search-route-select" className="col-sm-6 col-12">
                            <select className="col" id="so-route-selector" value={currentRoute} onChange={handleRouteChange}>
                                {routes.map( (route, index) =>
                                    <option key={index} value={route}>{prettifyString(route)}</option>
                                )}
                            </select>
                        </div>
                    </div>
                </div>
                </>
            ) : (
                <div id="default-loader" className="col-12">
                    Loading...
                </div>
            )}
        </div>
    );
}