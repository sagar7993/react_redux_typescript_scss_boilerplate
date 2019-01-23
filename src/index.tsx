import * as React from 'react';
import { render } from 'react-dom';
import App from './App';

import './index.css';

const target = document.querySelector('#root');

render(<App />, target);