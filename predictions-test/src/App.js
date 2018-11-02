import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './Navigation';
import AllPredictions from './all-predictions';
import VehicleUpdates from './vehicle-updates';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navigation />
        <Route path="/all-predictions" component={AllPredictions} />
        <Route path="/vehicle-updates" component={VehicleUpdates} />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
