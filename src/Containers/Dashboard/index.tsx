import * as React from 'react';
import { connect } from 'react-redux';

import WrappingComponent from '../../Components/HigherOrderComponents/WrappingComponent';
import HttpStatusGuard from '../../Services/RouteGuards/HttpStatusGuard';

import MyLoader from '../../Components/UI/Loader';

import { MyActionCreators } from '../../Actions';

import { getProducts, getTransactions } from '../../Services/MyService';

import { Product, Transaction } from '../../Contracts';

export interface Props {
    isLoading: boolean;
    products: Product[];
    transaction: Transaction[];
    showLoader: any;
    hideLoader: any;
    getProductsStarted: any;
    getProductsCompleted: any;
    getProductsRejected: any;
    getTransactionsStarted: any;
    getTransactionsCompleted: any;
    getTransactionsRejected: any;
}

export interface State { }

export class MyDashboard extends React.Component<Props, State> {

    state: State = {};

    render() {
        return (
            <WrappingComponent>
                {!this.props.isLoading &&
                    <p className="center">My Dashboard!</p>
                }
                {this.props.isLoading &&
                    <MyLoader />
                }
            </WrappingComponent>
        );
    }

    componentDidMount() {
        this.props.showLoader();
        this.props.getProductsStarted();
        this.props.getTransactionsStarted();
        const products = getProducts();
        const transactions = getTransactions();
        Promise.all([products, transactions]).then(results => {
            this.props.hideLoader();
            this.props.getProductsCompleted(results[0]);
            this.props.getTransactionsCompleted(results[1]);
        });
    }

}

const mapStateToProps = (state) => {
    return {
        isLoading: state.reducer.isLoading,
        products: state.reducer.products,
        transactions: state.reducer.transactions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showLoader: () => dispatch(MyActionCreators.showLoader()),
        hideLoader: () => dispatch(MyActionCreators.hideLoader()),
        getProductsStarted: () => dispatch(MyActionCreators.getProductsStarted()),
        getProductsCompleted: (products: Product[]) => dispatch(MyActionCreators.getProductsCompleted(products)),
        getProductsRejected: () => dispatch(MyActionCreators.getProductsRejected()),
        getTransactionsStarted: () => dispatch(MyActionCreators.getTransactionsStarted()),
        getTransactionsCompleted: (transactions: Transaction[]) => dispatch(MyActionCreators.getTransactionsCompleted(transactions)),
        getTransactionsRejected: () => dispatch(MyActionCreators.getTransactionsRejected())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HttpStatusGuard(MyDashboard));