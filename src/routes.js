import Auth from './modules/Auth';
import Base from './pages/Base.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';

const routes = {
	// base component (wrapper for the whole application).
		component: Base,
	  	childRoutes: [
	  		{
	      		path: '/',
	      		getComponent: (location, callback) => {
		        	if (Auth.isUserAuthenticated()) {
		          		callback(null, HomePage);
		        	} else {
		          		callback(null, HomePage);
		        	}
	      		}
	    },
	    {
	      	path: '/login',
	      	component: LoginPage
	    },

    	{
		    path: '/signup',
		    component: SignUpPage
	    },

	    {
		    path: '/logout',
		    onEnter: (nextState, replace) => {
			    Auth.deauthenticateUser();

		        // change the current URL to /
			    replace('/');
	      	}
	    },
    ]
}

export default routes;
