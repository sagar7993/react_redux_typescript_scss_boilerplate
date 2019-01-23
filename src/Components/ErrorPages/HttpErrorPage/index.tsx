import * as React from 'react';

import '../Error.css';

export interface Props {
    httpErrorCode: number | null;
}

export const HttpErrorPage = (props: Props) => {

    const error = {
        errorCode: props.httpErrorCode,
        shortErrorMessage: 'Something went wrong, please try again later',
        longErrorMessage: 'Something went wrong, please try again later.'
    };
    
    if (props.httpErrorCode === 401) {
        error.shortErrorMessage = '401 - Unauthorized';
        error.longErrorMessage = 'You are not authorized to view this page. Please login to continue.';
    } else if (props.httpErrorCode === 500) {
        error.shortErrorMessage = '500 - Internal server error';
        error.longErrorMessage = 'Something went wrong, please try again later.';
    }

    return (
        <div className="error-container">
            <div className="error-icon">
                <div className="error-icon-eyes"></div>
            </div>
            <div className="error-note">
                <p className="title-note">
                    {error.shortErrorMessage}
                </p>
                <p className="body-note">
                    {error.longErrorMessage}
                </p>
            </div>
        </div>
    );
};

export default HttpErrorPage;