import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);

serviceWorker.unregister();