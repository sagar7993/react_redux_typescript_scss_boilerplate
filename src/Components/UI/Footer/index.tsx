import * as React from 'react';

import './Footer.css';

export interface Props { }

const MyFooter = (props: Props) => {
    return (
        <footer>
            <p className="copyright text-center">
                © Demo App Technologies Pvt Ltd
            </p>
        </footer>
    );
};

export default MyFooter;