import React, { createContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import NotFound from '../views/NotFound'
import Home from '../views/Home/Home';
import Project from '../views/Projects/Project';
import { Box } from '@chakra-ui/react';


export const UserContext = createContext()

export default function AppRoute() {

    return (
        <Box>
            <Router>
                <RouteSwitch>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="*" element={<NotFound />}></Route>
                    <Route exact path="/project" element={<Project />}></Route>
                </RouteSwitch>
            </Router>
        </Box>
    )
}