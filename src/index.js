import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
//import createStore for storing state, applyMiddleware to apply thunk 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import rootReducer from './store/reducers/rootReducer'

const rrfConfig = { userProfile: 'users', attachAuthIsReady: true} // react-redux-firebase config
const store = createStore(rootReducer, 
    compose(
        //using compose to combine store-enhancers, in order to bind firestore with redux via config
        //so when we are using getFirebase and getFirestore, redux know which project we are connecting to
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reactReduxFirebase(fbConfig,rrfConfig),
        reduxFirestore(fbConfig) 
    )
);
//reducer being passed to the store here 
//redux thunk is middle and need to be applied here
//with thunk we can have action-creator interact with database
//pass in get firebase and firestore to think.withExtraArgument to use the 2 functions that allow Redux
//to interact with firestore API and firebase, since thunk allow action to return a function 

store.firebaseAuthIsReady.then(() => {
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
})
//by moving the reactDom render inside of firebaseAuthIsReady function, it is not letting react to render until firebase action is done
//firebaseAuthIsReady attached above in reactReduxFirebase

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
