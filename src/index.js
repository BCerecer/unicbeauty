import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './index.css';

import App from './components/App';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
unregister();
