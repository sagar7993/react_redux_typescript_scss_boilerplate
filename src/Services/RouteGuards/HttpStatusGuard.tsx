import * as React from 'react';

import axios from 'axios';

import HttpErrorPage from '../../Components/ErrorPages/HttpErrorPage';

export const HttpStatusGuard = (WrappedComponent) => {

    interface State {
        errorCode: number | null;
    }

    return class extends React.Component<{}, State> {

        state: State = {
            errorCode: null
        };

        constructor(props) {
            super(props);
            axios.interceptors.response.use((response) => {
                return response;
            }, (error) => {
                if (error && error.response && error.response.status && error.response.status === 401) {
                    this.setState({
                        errorCode: 401
                    });
                } else if (error && error.response && error.response.status && error.response.status === 500) {
                    this.setState({
                        errorCode: 500
                    });
                }
                return Promise.reject(error);
            });
        }

        render() {
            if (this.state.errorCode === 401 || this.state.errorCode === 500) {
                return <HttpErrorPage httpErrorCode={this.state.errorCode} />;
            } else {
                return (
                    <WrappedComponent {...this.props} />
                );
            }
        }
    };

};

export default HttpStatusGuard;