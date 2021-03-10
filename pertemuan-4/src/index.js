import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceworker';

import BlogPost from "./container/BlogPost/BlogPost";

ReactDOM.render(
  <BlogPost />, document.getElementById('content'));


serviceWorker.unregister();