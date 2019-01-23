import * as React from 'react';

import '../Error.css';

export interface Props { }

export class PageNotFound extends React.Component<Props, {}> {
    
    render() {
        return (
            <div className="error-container">
                <div className="error-icon"></div>
                <p className="error-message">
                    Error - 404
                </p>
                <div className="error-note">
                    <p className="title-note">
                        Page not found
                    </p>
                    <p className="body-note">
                        Looks like the page you are trying to access does not exist.
                    </p>
                </div>
            </div>
        );
    }

}

export default PageNotFound;