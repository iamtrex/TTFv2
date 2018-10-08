import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store/store';

import Home from './pages/Home';
import registerServiceWorker from './registerServiceWorker';

//Any component down the chain can now use the store.
ReactDOM.render(<Provider store={store}>
    <Home />
</Provider>, document.getElementById('root'));
registerServiceWorker();
