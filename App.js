// React imports
import React from 'react';

// Redux imports
import { Provider } from 'react-redux';

// Store import
import store from './src/store';

// App config import
import App from './src/routes/App';

export default () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}