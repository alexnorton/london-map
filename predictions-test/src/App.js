import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './Navigation';
import AllPredictions from './all-predictions';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navigation />
        <Route path="/all-predictions" component={AllPredictions} />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
