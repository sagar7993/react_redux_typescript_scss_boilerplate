import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import myLogo from '../../../Assets/images/logo.png';
import myBackground from '../../../Assets/images/office.jpg';
import myUser from '../../../Assets/images/yuna.jpg';

import './Header.css';
import { MyActionCreators } from '../../../Actions';

import WrappingComponent from '../../../Components/HigherOrderComponents/WrappingComponent';
import { MyWindow } from '../../../Contracts';

import { Pages } from '../../../Containers/Routing';

declare var window: MyWindow;

export interface Props {
    isLoading: boolean;
    showLoader: any;
    hideLoader: any;
}

export interface State { }

export class MyHeader extends React.Component<Props, State> {

    state: State = {};

    render() {
        return (
            <WrappingComponent>
                <nav>
                    <div className="nav-wrapper">
                        <i className="material-icons sidenav-trigger show-on-medium-and-down hide-on-large-only" data-target="slide-out">menu</i>
                        <a href="javascript:void(0);" className="brand-logo">
                            <img className="logo" src={myLogo} />
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {
                                Pages.map((page) => {
                                    const link = (page.link && page.link.length > 0) ? <Link to={page.link}>{page.name}</Link> : <a href="javascript:void(0);">{page.name}</a>;
                                    return (
                                        <li key={page.name}>{link}</li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </nav>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src={myBackground} />
                            </div>
                            <a href="javascript:void(0);"><img className="circle" src={myUser} /></a>
                            <a href="javascript:void(0);"><span className="white-text name">John Doe</span></a>
                            <a href="javascript:void(0);"><span className="white-text email">johndoe@gmail.com</span></a>
                        </div>
                    </li>
                    {
                        Pages.map((page) => {
                            const link = (page.link && page.link.length > 0) ? <Link to={page.link}>{page.name}</Link> : <a href="javascript:void(0);">{page.name}</a>;
                            return (
                                <li key={page.name}>{link}</li>
                            );
                        })
                    }
                </ul>
            </WrappingComponent>
        );
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {
            const elems = document.querySelectorAll('.sidenav');
            window.M.Sidenav.init(elems, {});
        });
    }

}

const mapStateToProps = (state) => {
    return {
        isLoading: state.reducer.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showLoader: () => dispatch(MyActionCreators.showLoader()),
        hideLoader: () => dispatch(MyActionCreators.hideLoader())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyHeader);