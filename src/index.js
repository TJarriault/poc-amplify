import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import aws_exports from './aws-exports';
import Amplify from 'aws-amplify';
import {withAuthenticator} from "aws-amplify-react";
Amplify.configure(aws_exports);


const federated = {
  google_client_id: '1004692732344-o7bamuj5tj43bedqfcf5qc2qmkkql48r.apps.googleusercontent.com',
};
const AppWithAuth = withAuthenticator(App,  { includeGreetings: true });
ReactDOM.render(<AppWithAuth federated={federated} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
