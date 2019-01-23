import * as React from 'react';
import { connect } from 'react-redux';

import WrappingComponent from '../../Components/HigherOrderComponents/WrappingComponent';
import MyLoader from '../../Components/UI/Loader';

import { MyActionCreators } from '../../Actions';

export interface Props {
    isLoading: boolean;
    showLoader: any;
    hideLoader: any;
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
        setTimeout(() => {
            this.props.hideLoader();
        }, 2000);
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

export default connect(mapStateToProps, mapDispatchToProps)(MyDashboard);