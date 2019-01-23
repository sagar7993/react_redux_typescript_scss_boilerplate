import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import MyFooter from '../../Components/UI/Footer';
import MyHeader from '../../Components/UI/Header';

import PageNotFound from '../../Components/ErrorPages/PageNotFound';
import MyDashboard from '../Dashboard';

export const MyRoutes = {
    RandomPath: '*',
    Dashboard: '/dashboard',
    PageNotFound: '/page-not-found'
};

export const Pages = [
    {
        name: 'Sass',
        link: ''
    },
    {
        name: 'Products',
        link: ''
    },
    {
        name: 'Dashboard',
        link: MyRoutes.Dashboard
    },
    {
        name: 'Vendors',
        link: ''
    }
];

export interface Props { }

export class MyRoutingModule extends React.Component<Props, {}> {

    render() {
        return (
            <div className='container'>
                <MyHeader />
                <div className='container-body'>
                    <Switch>
                        <Route path={MyRoutes.Dashboard} exact component={MyDashboard} />
                        <Route path={MyRoutes.PageNotFound} exact component={PageNotFound} />
                        <Redirect to={MyRoutes.Dashboard} />
                    </Switch>
                </div>
                <MyFooter />
            </div>
        );
    }

}

export default MyRoutingModule;