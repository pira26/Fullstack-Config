import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import App from './App.jsx'; // import the main app component

import '../public/assets/stylesheets/styles.scss'; // import main style

ReactDOM.render((<App/>), document.getElementById('root')) // render our App component and mount it to our #root element
